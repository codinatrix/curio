$(window).load(function(){ 
	var $posts = $('#posts').imagesLoaded( function() {
		$posts.isotope({
		  itemSelector: '.item',
		  masonry: {
		    columnWidth: 330,
		    cornerStampSelector: '.corner-stamp'
		  }
		});
	});
	

});

