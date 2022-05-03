<?php
/**
 * Plugin Name:       Forged Contact Form
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       forged-contact-form
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
if(!class_exists('forged_contact_form_block_class')){
	class forged_contact_form_block_class {

		function __construct(){
			add_action( 'init', array($this, 'create_block_forged_contact_form_block_block_init') );
			add_action( 'init', array($this, 'create_block_forged_contact_form_block_styles_init') );
			add_action( 'enqueue_block_editor_assets', array($this, 'create_block_forged_contact_form_block_enqueue') );
			add_action( 'wp_enqueue_scripts', array($this, 'create_block_forged_contact_form_block_front_enqueue') );
			add_action( 'wp_ajax_submit_forged_contact_form', array($this, 'submit_forged_contact_form') );
		}

		function submit_forged_contact_form() {
			$formData = $_POST['formData'];
			$formData = json_encode($formData);
			wp_send_json_success( $formData, 200, 0 );
		}

		function create_block_forged_contact_form_block_block_init() {
			register_block_type( __DIR__ . '/build', array(
				'api_version' => 2
			) );
		}
		
		function create_block_forged_contact_form_block_styles_init() {
			register_block_style('create-block/forged-contact-form', [
				'name' => 'nimbus-nine',
				'label' => __('Nimbus Nine', 'forged-contact-form'),
				'is_default' => true
			]);
			register_block_style('create-block/forged-contact-form', [
				'name' => 'default',
				'label' => __('Default', 'forged-contact-form'),
			]);
		}
		
		function create_block_forged_contact_form_block_enqueue() {
			wp_enqueue_script(
				'forged-form-block-editor-script',
				plugins_url( 'assets/js/forged-form-block-editor.js', __FILE__ ),
				array('jquery')
			);
		}
		
		function create_block_forged_contact_form_block_front_enqueue() {
			wp_register_script(
				'forged-form-block-script',
				plugins_url( 'assets/js/forged-form-block.js', __FILE__ ),
				array('jquery')
			);

			wp_localize_script( "forged-form-block-script", "forgedFormFrontendObj", array(
				"ajaxurl" => admin_url( "admin-ajax.php" ),
				"nonce" => wp_create_nonce( "forged-contact-form_submit" ),
			) );
			wp_enqueue_script('forged-form-block-script');
		}

		function print_array($arr) {
			echo "<pre>";
			print_r($arr);
			echo "</pre>";
		}
	
	} // class close

	$fcfb_obj = new forged_contact_form_block_class();

} // class exists check
