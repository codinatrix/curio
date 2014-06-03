$(window).load(function(){
	
	//Masonry
	$('#posts').imagesLoaded( function(){
	    $('#posts').isotope({
	      itemSelector : '.item',
	      masonry: {
	        cornerStampSelector: '.corner-stamp',
	        columnWidth : 20
	      }
	    });
    });
    
    //Share buttons
    Socialite.load($('#share-buttons'));

});

