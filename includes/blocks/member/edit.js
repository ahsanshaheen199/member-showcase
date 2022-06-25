import { useBlockProps } from '@wordpress/block-editor';
import Inspector from './inspector';

import './editor.scss';

const Edit = ( { attributes, setAttributes } ) => {
	const {
		memberImageId,
		memberImageURL,
		memberName,
		designation,
		description,
		hideDescription,
		memberImagePosition,
		socialIcons,
		imageWidth,
		imageBorder,
		nameColor,
		nameFontSize,
		nameFontWeight,
		nameFontStyle,
		nameLetterSpacing,
		nameTextTransform,
		nameLineHeight,
		nameMargin,
		jobTitleColor,
		jobTitleFontSize,
		jobTitleFontWeight,
		jobTitleFontStyle,
		jobTitleLetterSpacing,
		jobTitleTextTransform,
		jobTitleLineHeight,
		jobTitleMargin,
		descriptionColor,
		descriptionFontSize,
		descriptionFontWeight,
		descriptionFontStyle,
		descriptionLetterSpacing,
		descriptionTextTransform,
		descriptionLineHeight,
		descriptionMargin,
		globalBackgroundColor,
		globalPadding,
		globalMargin,
		globalBorder,
		globalBorderRadius,
		socialIconsColor,
		socialIconsBackgroundColor,
		socialIconsHoverColor,
		socialIconsHoverbackgroundColor,
		socialIconsBorder,
	} = attributes;

	const blockProps = useBlockProps( {
		className: `${
			useBlockProps().className
		} member-item text-center image-${ memberImagePosition }`,
	} );

	return (
		<div
			{ ...blockProps }
			style={ {
				backgroundColor: globalBackgroundColor,
				paddingTop: globalPadding?.top ?? false,
				paddingBottom: globalPadding?.bottom ?? false,
				paddingLeft: globalPadding?.left ?? false,
				paddingRight: globalPadding?.right ?? false,
				marginTop: globalMargin?.top ?? false,
				marginBottom: globalMargin?.bottom ?? false,
				marginLeft: globalMargin?.left ?? false,
				marginRight: globalMargin?.right ?? false,
				borderWidth: globalBorder?.width ?? false,
				borderStyle: globalBorder?.style ?? false,
				borderColor: globalBorder?.color ?? false,
				borderRadius: globalBorderRadius,
			} }
		>
			{ ( memberImageId || memberImageURL ) && (
				<div className="member-img">
					<img
						style={ {
							maxWidth: `${ imageWidth }px`,
							boxShadow: `0 0 0 ${ imageBorder.width } ${ imageBorder.color }`,
						} }
						src={ memberImageURL }
						alt={ memberName }
					/>
				</div>
			) }

			<div className="member-details">
				<h4
					style={ {
						color: nameColor,
						fontSize: nameFontSize,
						fontWeight: nameFontWeight,
						fontStyle: nameFontStyle,
						letterSpacing: nameLetterSpacing,
						textTransform: nameTextTransform,
						lineHeight: nameLineHeight,
						marginTop: nameMargin.top,
						marginRight: nameMargin.right,
						marginBottom: nameMargin.bottom,
						marginLeft: nameMargin.left,
					} }
				>
					{ memberName }
				</h4>
				<h6
					style={ {
						color: jobTitleColor,
						fontSize: jobTitleFontSize,
						fontWeight: jobTitleFontWeight,
						fontStyle: jobTitleFontStyle,
						letterSpacing: jobTitleLetterSpacing,
						textTransform: jobTitleTextTransform,
						lineHeight: jobTitleLineHeight,
						marginTop: jobTitleMargin.top,
						marginRight: jobTitleMargin.right,
						marginBottom: jobTitleMargin.bottom,
						marginLeft: jobTitleMargin.left,
					} }
				>
					{ designation }
				</h6>
				{ description && ! hideDescription && (
					<p
						style={ {
							color: descriptionColor,
							fontSize: descriptionFontSize,
							fontWeight: descriptionFontWeight,
							fontStyle: descriptionFontStyle,
							letterSpacing: descriptionLetterSpacing,
							textTransform: descriptionTextTransform,
							lineHeight: descriptionLineHeight,
							marginTop: descriptionMargin.top,
							marginRight: descriptionMargin.right,
							marginBottom: descriptionMargin.bottom,
							marginLeft: descriptionMargin.left,
						} }
					>
						{ description }
					</p>
				) }
				{ socialIcons.icons.length > 0 && (
					<ul>
						{ socialIcons.icons.map( ( ic ) => {
							return (
								<li key={ ic.id }>
									<a
										style={ {
											color: socialIconsColor,
											backgroundColor:
												socialIconsBackgroundColor,
											'--msb-social-icons-hover-color':
												socialIconsHoverColor,
											'--msb-social-icons-hover-bg-color':
												socialIconsHoverbackgroundColor,
											borderWidth:
												socialIconsBorder?.width ??
												false,
											borderStyle:
												socialIconsBorder?.style ??
												false,
											borderColor:
												socialIconsBorder?.color ??
												false,
										} }
										href={ ic.link }
									>
										<i className={ ic.icon }></i>
									</a>
								</li>
							);
						} ) }
					</ul>
				) }
			</div>
			<>
				<Inspector
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</>
		</div>
	);
};

export default Edit;
