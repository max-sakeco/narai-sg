$(document).ready(function() {
  var btn = $('.fixed-button');
  $(window).on('load scroll', function() {
    // Show button after scrolling 20% of page
    var scrollPosition = $(this).scrollTop();
    var documentHeight = $(document).height();
    var windowHeight = $(this).height();
    
    // Show button after scrolling 20% down the page
    var showThreshold = documentHeight * 0.2;
    
    // Hide button when near the bottom of the page (where the static button is)
    var hideThreshold = documentHeight - windowHeight - 200; // 200px before bottom
    
    if (scrollPosition > showThreshold && scrollPosition < hideThreshold) {
      btn.addClass('fixed_btn_active');
    } else {
      btn.removeClass('fixed_btn_active');
    }
  });
}); 