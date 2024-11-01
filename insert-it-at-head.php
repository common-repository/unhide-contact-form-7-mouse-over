<?php
/**
 * Plugin Name: Unhide Contact Form 7 on Mouse Over
 * Plugin URI: http://wpsoft.com.br
 * Description: Unhide Contact Form 7 on Mouse Over
 * Version: 1.0
 * Author: diegpl, pkelbert
 * Author URI: http://wpsoft.com.br
 * License: GPL2
 */
 

function fancyContactForm7() {
	echo "<script type='text/javascript' src='".plugins_url( 'unhide-contact-form-7.js' , __FILE__ )."'></script>";
	echo "<link rel='stylesheet' id='style-css'  href='".plugins_url( 'style.css' , __FILE__ )."' type='text/css' media='all' />";
	echo "<script type='text/javascript' src='".plugins_url( 'watermark/jquery.watermark.js' , __FILE__ )."'></script>";
}

add_action('wp_footer', 'fancyContactForm7');

?>