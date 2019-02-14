function initMap() {
  var uluru = { lat: 38.6480305, lng: -90.3385605 };
  var map = new google.maps.Map(document.getElementById("contactPgMap"), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
  return marker;
}
