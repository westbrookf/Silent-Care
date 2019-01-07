// Open And Close Main Navigation Section
let openNav = document.getElementById("openBtn");
let closeNav = document.getElementById("closeBtn");

openNav.addEventListener("click", Open);
closeNav.addEventListener("click", Close);

function Open() {
  let NavTimeline = anime.timeline();
  NavTimeline.add({
    targets: "#openBtn",
    opacity: 0,
    duration: 300
  })
    .add({
      targets: ".showLogo",
      opacity: ["1", "0"],
      duration: 500,
      easing: "easeInSine"
    })
    .add({
      targets: "#mainNav",
      opacity: ["0", ".5", "1"],
      width: "300px",
      duration: 600,
      easing: "easeInSine"
    })
    .add({
      targets: ".logo",
      opacity: ["0", "1"],
      delay: 2,
      duration: 600,
      easing: "linear"
    });
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
    .add({
      targets: ".block",
      opacity: ["0", "1"],
      easing: "easeInOutSine",
      boxshadow: ["10px", "10px", "30px", "#303030"]
    })
    .add({
      targets: ".blockOne",
      duration: 600
    })
    .add({
      targets: ".blockTwo",
      duration: 900
    })
    .add({
      targets: ".blockThree",
      duration: 1000
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
let about = document.querySelector("#aboutBtn");
let approach = document.querySelector("#approachBtn");
let offer = document.querySelector("#weOfferBtn");
let work = document.querySelector("#weWorkBtn");

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
  var options = {
    zoom: 8,
    center: { lat: 38.6480305, lng: -90.3385605 }
  };
  var map = new google.maps.Map(document.getElementById("mapLoc"), options);
}
