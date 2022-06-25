<?php
/**
 * Plugin Name:     Member Showcase Block
 * Description:     This is a member showcase block plugin.
 * Author:          Ahsan Habib Shaheen
 * Text Domain:     msb
 * Domain Path:     /languages
 * Version:         1.0.0
 *
 * @package         Member_Showcase
 */

defined( 'ABSPATH' ) || exit;

/**
* Member Showcase Block Class.
*/
final class Member_Showcase_Block {
    /**
     * Plugin Version
     *
     * @var string
     */
    private $version = '0.1.0';

    /**
     * Initialize Member_Showcase_Block class
     *
     * @return Member_Showcase_Block
     */
    public static function instance() {
        static $instance = false;

        if ( ! $instance ) {
            $instance = new self();
        }

        return $instance;
    }

    /**
     * Construtor
     */
    public function __construct() {
	    add_action('init', array( $this, 'register_block_types_init' ));
	    add_action( 'init', array( $this, 'load_textdomain' ));
    }

	/**
	 * Register Block
	 */
	public function register_block_types_init() {
		register_block_type( __DIR__ . '/build/member' );

		if ( function_exists( 'wp_set_script_translations' ) ) {
			wp_set_script_translations( 'member-showcase', 'msb', plugin_dir_path( __FILE__ ) . 'languages' );
		}
	}

	/**
	 * Load all translations for our plugin from the MO file.
	 */
	public function load_textdomain() {
		load_plugin_textdomain( 'msb', false, basename( __DIR__ ) . '/languages' );
	}
}

/**
 * Returns the main instance of Member_Showcase_Block.
 *
 * @return Member_Showcase_Block
 */
function member_showcase_block() {
    return Member_Showcase_Block::instance();
}

member_showcase_block();