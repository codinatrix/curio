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
			
			
			//Google Maps
			var map_style =	[
			    {
			        "featureType": "water",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#004358"
			            }
			        ]
			    },
			    {
			        "featureType": "landscape",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#1f8a70"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#1f8a70"
			            }
			        ]
			    },
			    {
			        "featureType": "road.highway",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#fd7400"
			            }
			        ]
			    },
			    {
			        "featureType": "road.arterial",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#1f8a70"
			            },
			            {
			                "lightness": -20
			            }
			        ]
			    },
			    {
			        "featureType": "road.local",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#1f8a70"
			            },
			            {
			                "lightness": -17
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.stroke",
			        "stylers": [
			            {
			                "color": "#ffffff"
			            },
			            {
			                "visibility": "on"
			            },
			            {
			                "weight": 0.9
			            }
			        ]
			    },
			    {
			        "elementType": "labels.text.fill",
			        "stylers": [
			            {
			                "visibility": "on"
			            },
			            {
			                "color": "#ffffff"
			            }
			        ]
			    },
			    {
			        "featureType": "poi",
			        "elementType": "labels",
			        "stylers": [
			            {
			                "visibility": "simplified"
			            }
			        ]
			    },
			    {
			        "elementType": "labels.icon",
			        "stylers": [
			            {
			                "visibility": "off"
			            }
			        ]
			    },
			    {
			        "featureType": "transit",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#1f8a70"
			            },
			            {
			                "lightness": -10
			            }
			        ]
			    },
			    {},
			    {
			        "featureType": "administrative",
			        "elementType": "geometry",
			        "stylers": [
			            {
			                "color": "#1f8a70"
			            },
			            {
			                "weight": 0.7
			            }
			        ]
			    }
			]
			
			google.maps.event.addDomListener(window, 'load', function(){
			var map_canvas = document.getElementById('map_canvas');
			var mark = $('marker:first');
			var lat_lng = new google.maps.LatLng(mark.attr('latitude'),mark.attr('longitude'));
		    var map_options = {
		      center: lat_lng,
		      zoom: 15,
		      mapTypeId: google.maps.MapTypeId.ROADMAP,
		      styles: map_style
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

