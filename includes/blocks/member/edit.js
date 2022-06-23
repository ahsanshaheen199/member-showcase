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
	} = attributes;

	const blockProps = useBlockProps( {
		className: `${
			useBlockProps().className
		} member-item text-center image-${ memberImagePosition }`,
	} );

	return (
		<div { ...blockProps }>
			{ memberImageId && (
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
				{ description && hideDescription && <p>{ description }</p> }
				{ socialIcons.icons.length > 0 && (
					<ul>
						{ socialIcons.icons.map( ( ic ) => {
							return (
								<li key={ ic.id }>
									<a href={ ic.link }>
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
