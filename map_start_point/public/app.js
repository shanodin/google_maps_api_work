var initialize = function() {
  var mapDiv = document.getElementById("main-map");
  var center = {lat: 51.767953, lng: -4.370176};
  var mainMap = new mapWrapper(mapDiv, center, 6);

  mainMap.addMarker(center);

  var infowindow = new google.maps.InfoWindow({
  content:"This is Ferryside, the small coastal village where Alice grew up"
  });

  google.maps.event.addListener(mainMap.markers[0], 'click', function() {
    infowindow.open(mainMap, mainMap.markers[0]);
  });

  mainMap.addMarker({lat: 55.946962, lng: -3.201958});
  mainMap.addMarker({lat: 54.010394, lng: -2.787729});
  // mainMap.addMarker({lat: 45.015212, lng: -93.184092});

  mainMap.addClickEvent();

  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers);

  var codeClanButton = document.querySelector('#button-go-code-clan');
  codeClanButton.addEventListener('click', mainMap.setCenter);
};




window.addEventListener('load', initialize);
