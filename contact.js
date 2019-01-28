function initMap() {
  var uluru = { lat: 38.6480305, lng: -90.3385605 };
  var map = new google.maps.Map(document.getElementById("contactPgMap"), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
  return marker;
}
//Map hover to remove mapOverlay

let mapGrad = document.querySelector(".mapOverlay");

mapGrad.addEventListener("mouseenter", hideGrad);
function hideGrad() {
  const mapTimeline = anime.timeline();

  mapTimeline.add({
    targets: ".mapOverlay",
    zIndex: 0,
    opacity: 0,
    transition: 0.2
  });
}
mapGrad.addEventListener("mouseleave", showGrad);
function showGrad() {
  const mapTimeline = anime.timeline();

  mapTimeline.add({
    targets: ".mapOverlay",
    zIndex: 99,
    opacity: 0.4,
    transition: 0.2
  });
}
