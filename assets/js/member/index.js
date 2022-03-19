import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { nanoid } from 'nanoid';
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
						id: nanoid(),
						icon: 'dashicons dashicons-facebook-alt',
						link: '#',
					},
					{
						id: nanoid(),
						icon: 'dashicons dashicons-twitter',
						link: '#',
					},
					{
						id: nanoid(),
						icon: 'dashicons dashicons-linkedin',
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
