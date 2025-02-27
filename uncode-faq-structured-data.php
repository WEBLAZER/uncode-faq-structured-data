<?php
/**
 * Plugin Name: Uncode FAQ Structured Data
 * Description: Automatically generates Structured Data for FAQs created with the Uncode theme.
 * Version: 1.0
 * Author: WEB LAZER
 */

// Prevent direct access to this file
if (!defined('ABSPATH')) {
    exit;
}

// Enqueue jQuery script
function enqueue_uncode_faq_structured_data_script() {
    // Register the script
    wp_register_script('uncode-faq-structured-data-script', plugins_url('/uncode-faq-structured-data-script.js', __FILE__), array('jquery'), null, true);
    // Enqueue the script
    wp_enqueue_script('uncode-faq-structured-data-script');
}
add_action('wp_enqueue_scripts', 'enqueue_uncode_faq_structured_data_script');