var CURIO = function() {
		
		var masonyClass = function() {
			
			this.init = function() {
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
			}
	
		}// End of masonryClass
		
		var mapClass = function() {

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
			
			var googleInit = function() {
				if ($("#map_canvas").length > 0) {
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
					  map: map
					});
				}
			}

			
			this.init = function() {
				google.maps.event.addDomListener(window, 'page:change', googleInit);
				google.maps.event.addDomListener(window, 'load', googleInit);
			}
	
		}// End of mapClass
		
	return {
		init : function() {
			
			var mapObj = new mapClass();
			mapObj.init();
			if ($("#posts").length > 0) {
				//Alert
				$(".alert button.close").click(function (e) {
			    	$(this).parent().slideUp('slow');
				});
				var masonyObj = new masonyClass();
				masonyObj.init();
			}
			else if ($("#map_canvas").length > 0) {			
				//Share buttons
				Socialite.load($('#share-buttons'));
			}
			
		}//End of Init
	}
}();

$(window).bind('page:change', CURIO.init);


