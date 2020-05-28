(function($){
	$(document).ready(function(){

		// Google Maps
		//-----------------------------------------------
		if ($("#map-canvas").length>0) {
			var map, myLatlng, myZoom, marker;
			// Set the coordinates of your location
			myLatlng = new google.maps.LatLng(40.7499248,-73.9814436);
			myZoom = 16;
			function initialize() {
				var mapOptions = {
					zoom: myZoom,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					mapTypeControl: false,
					center: myLatlng,
					draggable: false,					
					scrollwheel: false,
					styles: [ { "stylers": [ { "hue": "#ee8700" }, { "gamma": .4 } ] } ]					
				};
				map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);
				marker = new google.maps.Marker({
					map:map,
					draggable:true,
					animation: google.maps.Animation.DROP,
					position: myLatlng
				});
				google.maps.event.addDomListener(window, "resize", function() {
					map.setCenter(myLatlng);
				});
			}
			google.maps.event.addDomListener(window, "load", initialize);
		}
	}); // End document ready

})(this.jQuery);		