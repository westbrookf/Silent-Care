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
}

function Close() {
  let CloseTimeline = anime.timeline();

  CloseTimeline.add({
    targets: ".logo",
    opacity: ["1", "0"],
    duration: 400,
    delay: 2,
    easing: "easeInSine"
  })
    .add({
      targets: "#mainNav",
      opacity: ["1", "0"],
      width: ["0px"],
      duration: 700,
      easing: "easeOutSine"
    })
    .add({
      targets: "#openBtn",
      opacity: 1,
      duration: 300
    })
    .add({
      targets: ".showLogo",
      opacity: ["0", "1"],
      duration: 500,
      easing: "linear"
    })
    .add({
      targets: ".showLogo, .hmeLink",
      height: "150px",
      opacity: ["0", "1"],
      duration: 500,
      easing: "easeInSine"
    })
    .add({
      targets: "#introHead",
      paddingTop: "280px",
      delay: 2,
      duration: 600,
      easing: "linear"
    });
}
// CONTACT BAR DISPLAY STARTS HERE
let conButton = document.getElementById("conClick");

let hide = document.getElementById("contactBar");

conButton.addEventListener("click", contact);

function contact() {
  const opnTimeline = anime.timeline();
  opnTimeline
    // .add({
    //   targets: ".block",
    //   opacity: ["0", "1"],
    //   easing: "easeInOutSine",
    //   duration: 400
    // })
    // .add({
    //   targets: ".block",
    //   opacity: ["0", "1"],
    //   easing: "easeInOutSine",
    //   boxshadow: ["10px", "10px", "30px", "#303030"]
    // })
    .add({
      targets: ".bestCareContain",
      marginTop: "-20px",
      easing: "linear"
    })
    .add({
      targets: ".blockOne",
      opacity: ["0", "1"],
      duration: 300,
      easing: "easeInSine"
    })
    .add({
      targets: ".blockTwo",
      opacity: ["0", "1"],
      duration: 600,
      easing: "easeInSine"
    })
    .add({
      targets: ".blockThree",
      opacity: ["0", "1"],
      duration: 800,
      easing: "easeInSine"
    });
}
// let conBlock = document.getElementById("conBlock");
// conBlock.addEventListener("mouseover", conChange);
// function conChange() {
//   let contactTimeline = anime.timeline();
//   contactTimeline
//     .add({
//       targets: ".block",
//       backgroundColor: "#00a2e8",
//       easing: "linear",
//       duration: 300
//       // opacity: 0.8
//     })
//     .add({
//       targets: ".conRowIcon",
//       color: "#ff4500",
//       opacity: ".6",
//       border: "#ff4500"
//     });
// }

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
