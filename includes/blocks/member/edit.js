import {
	InspectorControls,
	MediaUpload,
	useBlockProps,
} from '@wordpress/block-editor';
import {
	Button,
	ButtonGroup,
	CardBody,
	PanelBody,
	TabPanel,
	TextControl,
	ToggleControl,
	TextareaControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './editor.scss';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import '@icon/dashicons/dashicons.css';
import { dashIcons } from './icons';
import { nanoid } from 'nanoid';

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

	const setSocialIconsData = ( iconValue ) => {
		setAttributes( {
			socialIcons: {
				icons: [
					...socialIcons.icons.map( ( ic ) => {
						return ic.id === iconValue.id ? iconValue : ic;
					} ),
				],
			},
		} );
	};

	const addSocialIcons = () => {
		setAttributes( {
			socialIcons: {
				icons: [
					...socialIcons.icons,
					{
						id: nanoid(),
						icon: 'dashicons dashicons-facebook-alt',
						link: '#',
					},
				],
			},
		} );
	};

	const removeSocialIcons = ( iconId ) => {
		setAttributes( {
			socialIcons: {
				icons: [
					...socialIcons.icons.filter( ( ic ) => {
						return ic.id !== iconId;
					} ),
				],
			},
		} );
	};

	return (
		<div { ...blockProps }>
			{ memberImageId && (
				<div className="member-img">
					<img src={ memberImageURL } alt={ memberName } />
				</div>
			) }

			<div className="member-details">
				<h4>{ memberName }</h4>
				<h6>{ designation }</h6>
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
				<InspectorControls>
					<TabPanel
						className="member-showcase-tab-panel"
						activeClass="active-tab"
						tabs={ [
							{
								name: 'tab-content',
								title: __( 'Content', 'msb' ),
								className: 'tab-content',
							},
							{
								name: 'tab-style',
								title: __( 'Style', 'msb' ),
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
												<Button
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
												<Button
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
												<Button
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
													'Hide Description',
													'msb'
												) }
												checked={ hideDescription }
												onChange={ ( value ) => {
													setAttributes( {
														hideDescription: value,
													} );
												} }
											/>
											{ ! hideDescription && (
												<TextareaControl
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
													( ic, index ) => {
														return (
															<PanelBody
																key={ nanoid() }
																title={ `Icon ${
																	index + 1
																}` }
																initialOpen={
																	false
																}
															>
																<FontIconPicker
																	icons={
																		dashIcons
																	}
																	theme="bluegrey"
																	renderUsing="class"
																	value={
																		ic.icon
																	}
																	onChange={ (
																		value
																	) => {
																		setSocialIconsData(
																			{
																				...ic,
																				icon: value,
																			}
																		);
																	} }
																	isMulti={
																		false
																	}
																/>
																<TextControl
																	type="url"
																	label={ __(
																		'Link',
																		'msb'
																	) }
																	onChange={ (
																		value
																	) =>
																		setSocialIconsData(
																			{
																				...ic,
																				link: value,
																			}
																		)
																	}
																	value={
																		ic.link
																	}
																/>
																<Button
																	isDestructive
																	variant="secondary"
																	onClick={ () =>
																		removeSocialIcons(
																			ic.id
																		)
																	}
																>
																	{ __(
																		'Remove Icon',
																		'msb'
																	) }
																</Button>
															</PanelBody>
														);
													}
												) }
											</CardBody>
											<hr />
											<div
												style={ {
													textAlign: 'center',
												} }
											>
												<Button
													variant="primary"
													onClick={ addSocialIcons }
												>
													{ __( 'Add Icons', 'msb' ) }
												</Button>
											</div>
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
