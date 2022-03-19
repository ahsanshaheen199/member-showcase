import { useBlockProps } from '@wordpress/block-editor';
const Save = ( { attributes } ) => {
	const {
		memberImageId,
		memberImageURL,
		memberName,
		designation,
	} = attributes;
	const blockProps = useBlockProps.save( {
		className: `${
			useBlockProps.save().className
		} member-item text-center`,
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
				<h4>
					<a href="teacher-single.html">{ memberName }</a>
				</h4>
				<p>{ designation }</p>
				<ul>
					<li>
						<a href="#">
							<i className="icofont-facebook"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="icofont-twitter"></i>
						</a>
					</li>
					<li>
						<a href="#">
							<i className="icofont-linkedin"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Save;
