import {
	InspectorControls,
	MediaUpload,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	ButtonGroup,
	CardBody,
	IconButton,
	PanelBody,
	TabPanel,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import '@icon/dashicons/dashicons.css';
import { dashIcons } from './icons';

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
					<img src={ memberImageURL } alt={ memberName } />
				</div>
			) }

			<div className="member-details">
				<h4>
					<a href="teacher-single.html">{ memberName }</a>
				</h4>
				<h6>{ designation }</h6>
				{ description && <p>{ description }</p> }
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
			<>
				<InspectorControls>
					<TabPanel
						className="member-showcase-tab-panel"
						activeClass="active-tab"
						tabs={ [
							{
								name: 'tab-content',
								title: 'Content',
								className: 'tab-content',
							},
							{
								name: 'tab-style',
								title: 'Style',
								className: 'tab-style',
							},
						] }
					>
						{ ( tab ) => {
							if ( tab.name === 'tab-content' ) {
								return (
									<>
										<PanelBody
											title={ __( 'Member Image' ) }
										>
											{ memberImageId && (
												<img
													src={ memberImageURL }
													alt={ memberName }
												/>
											) }
											<MediaUpload
												value={ memberImageId }
												onSelect={ ( newMedia ) => {
													setAttributes( {
														memberImageId:
															newMedia.id,
														memberImageURL:
															newMedia.url,
													} );
												} }
												render={ ( { open } ) => (
													<Button
														variant="secondary"
														onClick={ open }
													>
														{ memberImageId
															? __(
																	'Remove Member Image',
																	'msb'
															  )
															: __(
																	'Upload Member Image',
																	'msb'
															  ) }
													</Button>
												) }
											/>
											<hr />
											<h2>
												{ __(
													'Image Position',
													'msb'
												) }
											</h2>
											<ButtonGroup>
												<IconButton
													isPressed={
														memberImagePosition ===
														'left'
													}
													icon="align-pull-left"
													onClick={ () =>
														setAttributes( {
															memberImagePosition:
																'left',
														} )
													}
												/>
												<IconButton
													isPressed={
														memberImagePosition ===
														'top'
													}
													icon="align-full-width"
													onClick={ () =>
														setAttributes( {
															memberImagePosition:
																'top',
														} )
													}
												/>
												<IconButton
													isPressed={
														memberImagePosition ===
														'right'
													}
													icon="align-pull-right"
													onClick={ () =>
														setAttributes( {
															memberImagePosition:
																'right',
														} )
													}
												/>
											</ButtonGroup>
										</PanelBody>
										<PanelBody
											title={ __( 'Member Info' ) }
											initialOpen={ false }
										>
											<TextControl
												label={ __( 'Name', 'msb' ) }
												placeholder={ __(
													'Member Name',
													'msb'
												) }
												value={ memberName }
												onChange={ ( value ) =>
													setAttributes( {
														memberName: value,
													} )
												}
											/>
											<TextControl
												label={ __(
													'Designation',
													'msb'
												) }
												placeholder={ __(
													'Member Desgination',
													'msb'
												) }
												value={ designation }
												onChange={ ( value ) =>
													setAttributes( {
														designation: value,
													} )
												}
											/>
											<ToggleControl
												label={ __(
													'Description Show / Hide',
													'msb'
												) }
												help={
													hideDescription
														? __(
																'Hide Description.',
																'msb'
														  )
														: __(
																'Show Description.',
																'msb'
														  )
												}
												checked={ hideDescription }
												onChange={ ( value ) => {
													setAttributes( {
														hideDescription: value,
													} );
												} }
											/>
											{ ! hideDescription && (
												<TextControl
													label={ __(
														'Description',
														'msb'
													) }
													placeholder={ __(
														'Member Description',
														'msb'
													) }
													value={ description }
													onChange={ ( value ) =>
														setAttributes( {
															description: value,
														} )
													}
												/>
											) }
										</PanelBody>
										<PanelBody
											title={ __(
												'Social Icons',
												'msb'
											) }
											initialOpen={ false }
										>
											<CardBody>
												{ socialIcons.icons.map(
													( ic ) => {
														const fontPickerProps = {
															dashIcons,
															theme: 'bluegrey',
															renderUsing:
																'class',
															value: ic.icon,
															onChange: () => {},
															isMulti: false,
														};
														return (
															<PanelBody
																key={ ic.id }
																title={ __(
																	'Icon',
																	'msb'
																) }
																initialOpen={
																	false
																}
															>
																<FontIconPicker
																	{ ...fontPickerProps }
																/>
																<TextControl
																	label={ __(
																		'Link',
																		'msb'
																	) }
																	value={
																		ic.link
																	}
																/>
															</PanelBody>
														);
													}
												) }
											</CardBody>
										</PanelBody>
									</>
								);
							}
						} }
					</TabPanel>
				</InspectorControls>
			</>
		</div>
	);
};

export default Edit;
