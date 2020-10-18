var subscribe_button = document.querySelector(".subscribe_button");

subscribe_button.addEventListener('click', function(){
	var subscribing = document.querySelector(".subscribing");
	var thanks = document.querySelector(".thanks");
	var login = document.querySelector(".login");

	subscribing.classList.add("subscribing_active");
	subscribe_button.classList.add("subscribe_button_active");
	setTimeout(function(){
		login.classList.add("login_active");
	}, 1200);
	setTimeout(function(){
		thanks.classList.add("thanks_active");
	}, 1400);

	setTimeout(function(){
		thanks.classList.remove("thanks_active");
		login.classList.remove("login_active");
		subscribing.classList.remove("subscribing_active");
		subscribe_button.classList.remove("subscribe_button_active");
	}, 4000);
});

(function($) { // Begin jQuery
	$(function() { // DOM ready
	  // If a link has a dropdown, add sub menu toggle.
	  $('nav ul li a:not(:only-child)').click(function(e) {
		$(this).siblings('.nav-dropdown').toggle();
		// Close one dropdown when selecting another
		$('.nav-dropdown').not($(this).siblings()).hide();
		e.stopPropagation();
	  });
	  // Clicking away from dropdown will remove the dropdown class
	  $('html').click(function() {
		$('.nav-dropdown').hide();
	  });
	  // Toggle open and close nav styles on click
	  $('#nav-toggle').click(function() {
		$('nav ul').slideToggle();
	  });
	  // Hamburger to X toggle
	  $('#nav-toggle').on('click', function() {
		this.classList.toggle('active');
	  });
	}); // end DOM ready
  })(jQuery); // end jQuery