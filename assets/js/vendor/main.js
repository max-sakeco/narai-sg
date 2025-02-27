/**
 * Main JavaScript file for the Narai Sake website
 */

// Document ready function
$(document).ready(function() {
  // Initialize scroll button functionality
  initScrollButton();
});

/**
 * Initialize the fixed button that appears when scrolling
 */
function initScrollButton() {
  // Get the fixed button element
  var btn = $('.fixed-button');

  // Show button when scrolling down 20% of the page
  $(window).on('load scroll', function() {
    if ($(this).scrollTop() > $(document).height() * 0.2) {
      btn.addClass('fixed_btn_active');
    } else {
      btn.removeClass('fixed_btn_active');
    }
  });
}

/**
 * Smooth scroll to anchor links
 */
$('a[href^="#"]').on('click', function(e) {
  e.preventDefault();
  
  var target = $(this.hash);
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
  }
}); 