<?php
/**
 * Plugin Name:     Member Showcase Block
 * Description:     This is a member showcase block plugin.
 * Author:          Ahsan Habib Shaheen
 * Author URI:      https://wp-cli.org
 * Text Domain:     msb
 * Domain Path:     /languages
 * Version:         0.1.0
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
        add_action('enqueue_block_editor_assets', array($this, 'block_editor_scripts'));
        add_action('enqueue_block_assets', array($this, 'block_styles'));
    }

    /**
     * Scripts for Block Editor
     *
     * @return void
     */
    public function block_editor_scripts() {
        $dependencies = include plugin_dir_path( __FILE__ ) . 'build/blocks.asset.php';

        wp_enqueue_script('member-showcase-block', plugin_dir_url(__FILE__) . 'build/blocks.js', $dependencies['dependencies'], $dependencies['version'], true);
    }

    public function block_styles() {
        wp_enqueue_style('member-showcase-block', plugin_dir_url(__FILE__) . 'build/blocks.css');
    }
}


function member_showcase_block() {
    return Member_Showcase_Block::instance();
}

member_showcase_block();