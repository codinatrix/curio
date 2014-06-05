var CURIO = function() {
	
	return {

		init : function() {
			//Masonry
			posts = $('#posts');
			posts.imagesLoaded( function(){
			posts.isotope({
			  itemSelector : '.item',
			  masonry: {
			    cornerStampSelector: '.corner-stamp',
			        columnWidth : 20
			      }
			   });
			   posts.isotope('layout');
			});
			
			//Share buttons
			Socialite.load($('#share-buttons'));
			
			google.maps.event.addDomListener(window, 'load', function(){
			var map_canvas = document.getElementById('map_canvas');
			var mark = $('marker:first');
			var lat_lng = new google.maps.LatLng(mark.attr('latitude'),mark.attr('longitude'));
		    var map_options = {
		      center: lat_lng,
		      zoom: 15,
		      mapTypeId: google.maps.MapTypeId.ROADMAP
		    }
		    var map = new google.maps.Map(map_canvas, map_options);
		    var marker = new google.maps.Marker({
			  position: lat_lng,
			  map: map,
			  title: 'Hello World!'
			});
			});
		}
	}
}();

$(window).bind('page:change', CURIO.init);

