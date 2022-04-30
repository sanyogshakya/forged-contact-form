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
		}
		function create_block_forged_contact_form_block_block_init() {
			register_block_type( __DIR__ . '/build' );
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
				'contact-form-block-editor-script',
				plugins_url( 'assets/js/forged-form-block-editor.js', __FILE__ ),
				array('jquery')
			);
		}
		
		function create_block_forged_contact_form_block_front_enqueue() {
			wp_enqueue_script(
				'contact-form-block-script',
				plugins_url( 'assets/js/forged-form-block.js', __FILE__ ),
				array('jquery')
			);
		}
	
	} // class close

	$fcfb_obj = new forged_contact_form_block_class();

} // class exists check
