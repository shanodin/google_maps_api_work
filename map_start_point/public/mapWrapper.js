var mapWrapper = function (container, coords, zoom) {
  this.googleMap = new google.maps.Map(container, {
  center: coords,
    zoom: zoom
  })
  this.markers = [];
  this.bounceMarkers = this.bounceMarkers.bind(this);
  this.setCenter = this.setCenter.bind(this);
}

// mapWrapper.prototype.addMarker = function (coords) {
//   var marker = new google.maps.Marker( {
//     position: coords,
//     map: this.googleMap
//   });
//     marker.addListener('click', function() {
//   });
//   this.markers.push(marker);
// }

mapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  this.markers.push(marker)
  var infowindow = new google.maps.InfoWindow({
    content: "lat" + coords.lat + "   " + "lng" +coords.lng
  });
  marker.addListener('click', function() {
    infowindow.open(marker.map, marker)
  })
}

// mapWrapper.prototype.addMarker = function (coords) {
//   var marker = new google.maps.Marker({
//     position: coords,
//     map: this.googleMap
//   })
//   this.markers.push(marker)
//   var infowindow = new google.maps.InfoWindow({
//     content: "lat" + coords.lat + "   " + "lng" +coords.lng
//   });
//   infowindow.open(marker.map, marker)
// }


mapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function(event) {
    var coords = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    };
    this.addMarker(coords);
  }.bind(this));
};

mapWrapper.prototype.bounceMarkers = function () {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  })
};

mapWrapper.prototype.setCenter = function (coords) {
  this.googleMap.setCenter({lat: 55.9469623, lng: -3.204147})
};

// mapWrapper.prototype.infoBox = function () {
//   this.markers.forEach(function(marker){
//     marker.addListener('click', function(){
//       var infoWindow = new google.maps.InfoWindow({
//         content: "latitude: " + marker.latLng.lat() + " , longitude: " + marker.latLng.lng()
//       })
//       infoWindow.open(this.googleMap, marker)
//     }.bind(this))
//   });
// };
