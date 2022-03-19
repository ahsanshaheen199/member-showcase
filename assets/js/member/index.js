import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

registerBlockType( 'ahsan03/member-showcase', {
	title: __( 'Member Showcase', 'msb' ),
	save: Save,
	edit: Edit,
	attributes: {
		memberImagePosition: {
			type: 'string',
			default: 'top',
		},
		memberImageId: {
			type: 'number',
		},
		memberImageURL: {
			type: 'string',
		},
		memberName: {
			type: 'string',
			default: 'Adam Smith',
		},
		designation: {
			type: 'string',
			default: 'CEO at automattic',
		},
		hideDescription: {
			type: 'boolean',
			default: true,
		},
		socialIcons: {
			type: 'object',
			default: {
				icons: [
					{
						id: '12346',
						icon: 'dashicons dashicons-facebook-alt',
						link: '#',
					},
					{
						id: '12347',
						icon: 'dashicons dashicons-twitter',
						link: '#',
					},
					{
						id: '12348',
						icon: 'dashicons dashicons-menu',
						link: '#',
					},
				],
			},
		},
		description: {
			type: 'string',
			default: '',
		},
	},
} );
