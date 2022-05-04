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
			if( isset( $_POST['nonce'] ) && wp_verify_nonce( $_POST['nonce'] , 'forged-contact-form_submit' ) ){
				$subject = 'Mail recieved from your website.';
				$to = 'shakyasanyog01@gmail.com';
				$headers = array('From: '.get_bloginfo('name').' <admin@sanyogshakya.com.np>', 'Content-Type: text/html; charset=UTF-8');
				$message = '<h3>You have recieved a message from a visitor.</h3>
							<p>Name: '.sanitize_text_field($_POST['name']) . '<br>
							Email: '.sanitize_email($_POST['email']). '<br>
							Message: '.sanitize_textarea_field($_POST['message']) .'</p><br>
							<a href=\'http://sanyogshakya.com.np\'>http://sanyogshakya.com.np</a>';
				if(wp_mail( $to, $subject, $message, $headers )){
					wp_send_json_success( 'Your message has been recieved. I will get to you shortly.', 200, 0 );
				} else {
					wp_send_json_error( 'There was an error sennding the message. Please use the alternatives below to contact me.', 500, 0 );
				}
			} else {
				wp_send_json_error( 'The submission source could not be verified.', 400, 0 );
			}
		}

		function send_email_from_forged_contact_form($data){
			$data_arr = array();
			parse_str($data, $data_arr);
			$subject = 'Mail recieved from your website. From: '. $data_arr['email'];
			$to = 'shakyasanyog01@gmail.com';
			$headers = array('From: admin@sanyogshakya.com.np', 'Content-Type: text/html; charset=UTF-8');
			$message = '<h3>You have recieved a message from a visitor.<h3><br><br>
						Name: '.$data_arr['name'] . '<br>
						Email: '.$data_arr['email']. '<br>
						Message: '.($data_arr['message']) .'<br><br>
						<a href=\'http://sanyogshakya.com.np\'>http://sanyogshakya.com.np</a>';
			if(wp_mail( $to, $subject, $message, $headers )){
				wp_send_json_success( 'Your message has bbeen recieved. I will get to you shortly.', 200, 0 );
			} else {
				wp_send_json_error( 'There was an error sennding the message. Please use the alternatives below to contact me.', 500, 0 );
			}
			
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
			wp_enqueue_script('forged-draw-svg', plugins_url( 'assets/js/jquery.drawsvg.js', __FILE__ ), array('jquery'));
		}

		function print_array($arr) {
			echo "<pre>";
			print_r($arr);
			echo "</pre>";
		}
	
	} // class close

	$fcfb_obj = new forged_contact_form_block_class();

} // class exists check
