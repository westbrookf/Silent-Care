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
