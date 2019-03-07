// Open And Close Main Navigation Section
let openNav = document.querySelector("#openBtn");
let closeNav = document.querySelector("#closeBtn");

openNav.addEventListener("click", Open);
closeNav.addEventListener("click", Close);

function Open() {
  // openNav.style.width = "0";
  openNav.style.opacity = "0";
  const mainNav = document.querySelector(".navSet");
  mainNav.style.width = "30%";
  mainNav.style.opacity = "1";
  const showLogo = document.querySelector(".hmeLink");
  showLogo.style.opacity = "0";
  const menNav = document.querySelector(".navSet");
  menNav.style.opacity = "1";
}

function Close() {
  openNav.style.opacity = "1";
  const mainNav = document.querySelector(".navSet");
  mainNav.style.width = "0%";
  mainNav.style.opacity = "0";
  const showLogo = document.querySelector(".hmeLink");
  showLogo.style.opacity = "1";
  const menNav = document.querySelector(".navSet");
  menNav.style.opacity = "0";
}
// CONTACT BAR DISPLAY STARTS HERE
let conButton = document.getElementById("conClick");

let hide = document.getElementById("contactBar");

conButton.addEventListener("click", contact);

function contact() {
  const conBar = document.querySelector("#contactBar");
  conBar.style.display = "flex";
  const careContent = document.querySelector(".bestCareContain");
  careContent.style.marginTop = "90px";
  conBar.style.opacity = "1";
}

// About our company Slide starts here
//variables
let about = document.getElementById("aboutBtn");
let approach = document.getElementById("approachBtn");
let offer = document.getElementById("weOfferBtn");
let work = document.getElementById("weWorkBtn");

//Event Listeners
about.addEventListener("click", contentLink);
approach.addEventListener("click", contentLink);
offer.addEventListener("click", contentLink);
work.addEventListener("click", contentLink);

//Function
function contentLink() {
  var allContent = document.querySelectorAll("section");
  for (var i = 0; i < allContent.length; i++) {
    allContent[i].className = "hidden";
  }
  var contentId = this.attributes["data-type"].value;
  var content = document.getElementById(contentId);
  if (content.className === "hidden") {
    content.className = "";
  } else {
    content.className = "hide";
  }
}

//Google Maps start here
function initMap() {
  var uluru = { lat: 38.6480305, lng: -90.3385605 };
  var map = new google.maps.Map(document.getElementById("mapLoc"), {
    zoom: 10,
    center: uluru
  });
  var marker = new google.maps.Marker({ position: uluru, map: map });
  return marker;
}
