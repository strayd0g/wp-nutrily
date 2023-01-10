<?php

/**
 * Plugin Name: WP Nutrily
 * Author: TVS
 * Author URI: https://tugasvirtualsolutions.com/
 * Version: 1.0.6
 * Description: Nutritional Plan Software.
 * Text-Domain: nutrily.de
 * 
 */

if( ! defined( 'ABSPATH' ) ) : exit(); endif; // No direct access allowed.

/**
 * Define plugin constants
 */

define( 'WPRK_PATH', trailingslashit( plugin_dir_path( __FILE__ ) ) );
define( 'WPRK_URL', trailingslashit( plugins_url('/', __FILE__) ) );

/**
 * Loading Necessary Scripts
 */

add_action( 'admin_enqueue_scripts', 'load_scripts' );
function load_scripts() {
    // wp_enqueue_style( 'wp-react-chart-admin', WPRK_URL . 'css/app.css', array(), wp_rand(), 'all' ); // phpcs:ignore
    wp_enqueue_script( 'wp-react-chart-admin', WPRK_URL . 'dist/bundle.js', array( 'jquery', 'wp-element' ), wp_rand(), true ); // phpcs:ignore
    wp_localize_script( 'wp-react-chart-admin', 'appLocalizer', [
        'apiUrl' => home_url( '/wp-json' ),
        'nonce'  => wp_create_nonce( 'wp_rest' ),
    ] );
}

require 'plugin-update-checker/plugin-update-checker.php';
$myUpdateChecker = Puc_v4_Factory::buildUpdateChecker(
	'https://github.com/strayd0g/wp-nutrily',
	__FILE__,
	'wp-diet-diet-app'
);

require_once WPRK_PATH . 'classes/class-create-admin-menu.php';
require_once WPRK_PATH . 'classes/class-create-settings-routes.php';
require_once WPRK_PATH . 'lib/interface.php';
require_once WPRK_PATH . 'helpers/components.php';
