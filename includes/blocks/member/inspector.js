import { InspectorControls, MediaUpload } from '@wordpress/block-editor';
import {
	Button,
	ButtonGroup,
	CardBody,
	PanelBody,
	RangeControl,
	TabPanel,
	TextareaControl,
	TextControl,
	ToggleControl,
	ColorPalette,
	FontSizePicker,
	SelectControl,
	__experimentalUnitControl as UnitControl,
	__experimentalBorderControl as BorderControl,
	__experimentalGrid as Grid,
	__experimentalBoxControl as BoxControl,
} from '@wordpress/components';
import { __, _x } from '@wordpress/i18n';
import { nanoid } from 'nanoid';
import FontIconPicker from '@fonticonpicker/react-fonticonpicker';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.base-theme.react.css';
import '@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.material-theme.react.css';
import '@icon/dashicons/dashicons.css';
import { dashIcons } from './icons';

const { __experimentalTextTransformControl: TextTransformControl } =
	wp.blockEditor;

const Inspector = ( { attributes, setAttributes } ) => {
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
	} = attributes;

	const FONT_WEIGHTS = [
		{
			label: _x( 'Thin', 'font weight' ),
			value: '100',
		},
		{
			label: _x( 'Extra Light', 'font weight' ),
			value: '200',
		},
		{
			label: _x( 'Light', 'font weight' ),
			value: '300',
		},
		{
			label: _x( 'Regular', 'font weight' ),
			value: '400',
		},
		{
			label: _x( 'Medium', 'font weight' ),
			value: '500',
		},
		{
			label: _x( 'Semi Bold', 'font weight' ),
			value: '600',
		},
		{
			label: _x( 'Bold', 'font weight' ),
			value: '700',
		},
		{
			label: _x( 'Extra Bold', 'font weight' ),
			value: '800',
		},
		{
			label: _x( 'Black', 'font weight' ),
			value: '900',
		},
	];

	const FONT_STYLES = [
		{
			label: _x( 'Normal', 'font style' ),
			value: 'normal',
		},
		{
			label: _x( 'Italic', 'font style' ),
			value: 'Italic',
		},
	];

	const FONT_SIZES = [
		{
			name: __( 'Small', 'msb' ),
			slug: 'small',
			size: 14,
		},
		{
			name: __( 'Base', 'msb' ),
			slug: 'Base',
			size: 16,
		},
		{
			name: __( 'Large', 'msb' ),
			slug: 'large',
			size: 18,
		},
		{
			name: __( 'Extra Large', 'msb' ),
			slug: 'extra-large',
			size: 24,
		},
	];

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
										title={ __( 'Member Image', 'msb' ) }
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
													memberImageId: newMedia.id,
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
											{ __( 'Image Position', 'msb' ) }
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
											label={ __( 'Designation', 'msb' ) }
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
										title={ __( 'Social Icons', 'msb' ) }
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
						if ( tab.name === 'tab-style' ) {
							return (
								<>
									<PanelBody
										title={ __( 'Member Image', 'msb' ) }
									>
										<RangeControl
											label={ __( 'Image Width', 'msb' ) }
											value={ imageWidth }
											onChange={ ( newValue ) =>
												setAttributes( {
													imageWidth: newValue,
												} )
											}
											min={ 100 }
											max={ 200 }
										/>
										<BorderControl
											label={ __( 'Border', 'msb' ) }
											value={ imageBorder }
											enableStyle={ false }
											onChange={ ( newValue ) =>
												setAttributes( {
													imageBorder: newValue,
												} )
											}
										/>
									</PanelBody>

									<PanelBody
										title={ __( 'Member Name', 'msb' ) }
										initialOpen={ false }
									>
										<div>
											<h4>{ __( 'Color', 'msb' ) }</h4>
											<ColorPalette
												value={ nameColor }
												onChange={ ( newValue ) =>
													setAttributes( {
														nameColor: newValue,
													} )
												}
											/>
										</div>

										<hr />

										<div>
											<h4>
												{ __( 'Typography', 'msb' ) }
											</h4>
											<FontSizePicker
												fontSizes={ FONT_SIZES }
												value={ nameFontSize }
												onChange={ ( newValue ) => {
													setAttributes( {
														nameFontSize: newValue,
													} );
												} }
											/>
											<SelectControl
												label={ __(
													'Font Weight',
													'msb'
												) }
												value={ nameFontWeight }
												onChange={ ( newValue ) => {
													setAttributes( {
														nameFontWeight:
															newValue,
													} );
												} }
												options={ FONT_WEIGHTS }
											/>
											<SelectControl
												label={ __(
													'Font Style',
													'msb'
												) }
												value={ nameFontStyle }
												onChange={ ( newValue ) => {
													setAttributes( {
														nameFontStyle: newValue,
													} );
												} }
												options={ FONT_STYLES }
											/>
											<Grid
												style={ {
													marginBottom: '24px',
												} }
												column={ 2 }
											>
												<UnitControl
													label={ __(
														'Letter spacing',
														'msb'
													) }
													value={ nameLetterSpacing }
													onChange={ ( newValue ) => {
														setAttributes( {
															nameLetterSpacing:
																newValue,
														} );
													} }
												/>
												<UnitControl
													label={ __(
														'Line Height',
														'msb'
													) }
													value={ nameLineHeight }
													onChange={ ( newValue ) => {
														setAttributes( {
															nameLineHeight:
																newValue,
														} );
													} }
												/>
											</Grid>
											<TextTransformControl
												value={ nameTextTransform }
												onChange={ ( newValue ) => {
													setAttributes( {
														nameTextTransform:
															newValue,
													} );
												} }
											/>
										</div>

										<hr />

										<div>
											<BoxControl
												label={ __( 'Margin', 'msb' ) }
												values={ nameMargin }
												onChange={ ( newValue ) => {
													setAttributes( {
														nameMargin: newValue,
													} );
												} }
											/>
										</div>
									</PanelBody>
								</>
							);
						}
					} }
				</TabPanel>
			</InspectorControls>
		</>
	);
};

export default Inspector;
