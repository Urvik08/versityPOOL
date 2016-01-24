var myLatLng = new google.maps.LatLng(17.74033553, 83.25067267);

var MYMAP = {
  map: null,
	bounds: null
}

MYMAP.init = function(selector, latLng, zoom) {
  var myOptions = {
    zoom:zoom,
    center: latLng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  this.map = new google.maps.Map($(selector)[0], myOptions);
	this.bounds = new google.maps.LatLngBounds();
}

MYMAP.placeMarkers = function(filename) {
			// create a new LatLng point for the marker
			var lat = 28.600626;//$(this).find('lat').text();
			var lng = -81.189907//$(this).find('lng').text();
			var point = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));
			
			// extend the bounds to include the new point
			MYMAP.bounds.extend(point);
			
			var marker = new google.maps.Marker({
				position: point,
				map: MYMAP.map
			});
			
			var infoWindow = new google.maps.InfoWindow();
			infoWindow.setContent(html);
		//		infoWindow.open(MYMAP.map, marker);
			//var html='<strong>'+name+'</strong.><br />'+address;
			google.maps.event.addListener(marker, 'load', function() {
				infoWindow.setContent(html);
				infoWindow.open(MYMAP.map, marker);
			});
			MYMAP.map.fitBounds(MYMAP.bounds);
//		});
	});
}
