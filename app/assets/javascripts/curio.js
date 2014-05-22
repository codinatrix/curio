$(window).load(function(){ 
	$('#posts').imagesLoaded( function(){
	    $('#posts').isotope({
	      itemSelector : '.item',
	      masonry: {
	        cornerStampSelector: '.corner-stamp',
	        columnWidth : 20
	      }
	    });
  });

});

