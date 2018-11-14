
function main() {

(function () {
   'use strict';
   
  //  Smooth Scroll between nav links
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 900);
            return false;
          }
        }
      });


      // ScrollSpy config
    $('body').scrollspy({ 
        target: '.navbar-default',
        offset: 80
    });

// Element animation on page scroll.
$(window).scroll(function() {
  $(".waypoint").each(function(){
      var pos = $(this).offset().top;
  
      var winTop = $(window).scrollTop();
      if (pos < winTop + 500) {
        $(this).addClass("animated fadeInUp");
        $(this).css('visibility',"visible");
      }
    });
  });

  
	// Hide navbar on link click
  $(".navbar-nav li a").click(function (event) {
    // check if window is small enough so dropdown is created
    var toggle = $(".navbar-toggle").is(":visible");
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
  });
	
	
    // Nivo Lightbox 
    $('.portfolio-item a').nivoLightbox({
            effect: 'slideDown',  
            keyboardNav: true,                            
        });
		
}());


$(document).ready(function(){
  //  Navbar resize on scroll
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
    
    if (scrollTop >= 50) {
      $('.navbar').addClass('scrolled-nav');
    } else if (scrollTop < 50) {
      $('.navbar').removeClass('scrolled-nav');
    } 
    
  }); 
  // ==============GOOGLE MAPS INTEGRATION============= //
  var myCenter = new google.maps.LatLng(28.459545135498047,77.04367065429688);

		function initialize() {
		var mapProp = {
		center:myCenter,
		zoom:15,
		scrollwheel:false,
		draggable:true,
		mapTypeId:google.maps.MapTypeId.ROADMAP
		};

		var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

		var marker = new google.maps.Marker({
		position:myCenter,
		});

		marker.setMap(map);
		}
		google.maps.event.addDomListener(window, 'load', initialize);
// ======================/GOOGLE MAPS INTEGRATION======================= //
  
});

}
main();