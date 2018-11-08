

// Open And Close Main Navigation Section
let openNav = document.getElementById("openBtn");
let closeNav = document.getElementById("closeBtn");

openNav.addEventListener("click", Open);
closeNav.addEventListener("click", Close);

function Open(){
  if(document.getElementById("mainNav").style.width = '20vw'){
    document.getElementById("openBtn").style.display = "none";
  }else{
    document.getElementById("openBtn").style.opacity = "";
  }
}

function Close(){
  if(document.getElementById("mainNav").style.width = '0'){
    document.getElementById("openBtn").style.display = "block";
  }else{
    document.getElementById("openBtn").style.display = "";
  }
}

// CONTACT BAR DISPLAY STARTS HERE 
let conButton = document.getElementById("conClick");

let hide = document.getElementById("contactBar");

conButton.addEventListener("click", contact)

function contact(){
  document.getElementById("contactBar").style.opacity = '1';
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
function contentLink(){
  var allContent = document.querySelectorAll("section");
  for (var i = 0; i < allContent.length; i++){
    allContent[i].className = "hidden";
  }
  var contentId = this.attributes["data-type"].value
  var content = document.getElementById(contentId);
  if(content.className === "hidden") {
    content.className = "";
  }else{
    content.className = "hide";
  }
}

//Google Maps start here
function initMap(){
  var options = {
    zoom:8,
    center:{lat:38.6480305, lng:-90.3385605}
  }
  var map = new google.maps.Map(document.getElementById('mapLoc'), options);
}




