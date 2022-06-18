import { useBlockProps } from '@wordpress/block-editor';
const Save = ( { attributes } ) => {
	const {
		memberImageId,
		memberImageURL,
		memberName,
		designation,
		description,
		hideDescription,
		memberImagePosition,
		socialIcons,
	} = attributes;
	const blockProps = useBlockProps.save( {
		className: `${
			useBlockProps.save().className
		} member-item text-center image-${ memberImagePosition }`,
	} );
	return (
		<div { ...blockProps }>
			{ memberImageId && (
				<div className="member-img">
					<img
						className="img-fluid"
						src={ memberImageURL }
						alt={ memberName }
					/>
				</div>
			) }

			<div className="member-details">
				<h4>{ memberName }</h4>
				<h6>{ designation }</h6>
				{ ! hideDescription && <p>{ description }</p> }
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
		</div>
	);
};

export default Save;
