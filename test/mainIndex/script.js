// ---------Responsive-navbar-active-animation-----------
function test() {
  var tabsNewAnim = $("#navbarSupportedContent");
  var selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  var activeItemNewAnim = tabsNewAnim.find(".active");
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    top: itemPosNewAnimTop.top + "px",
    left: itemPosNewAnimLeft.left + "px",
    height: activeWidthNewAnimHeight + "px",
    width: activeWidthNewAnimWidth + "px",
  });
  $("#navbarSupportedContent").on("click", "li", function (e) {
    $("#navbarSupportedContent ul li").removeClass("active");
    $(this).addClass("active");
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  });
}
$(document).ready(function () {
  setTimeout(function () {
    test();
  });
});
$(window).on("resize", function () {
  setTimeout(function () {
    test();
  }, 500);
});
$(".navbar-toggler").click(function () {
  $(".navbar-collapse").slideToggle(300);
  setTimeout(function () {
    test();
  });
});

// --------------add active class-on another-page move----------
jQuery(document).ready(function ($) {
  // Get current path and find target link
  var path = window.location.pathname.split("/").pop();

  // Account for home page with empty path
  if (path == "") {
    path = "index.html";
  }

  var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
  // Add active class to target link
  target.parent().addClass("active");
});

const card = [
  '<a href="../events/',
  '.html" class="card"><div class="imgBx"><img src="',
  '" alt="image_profile"></div><div class="content"><div class="details"><h2>',
  '</h2><div class="data"><h3>',
  "<br><span>",
  "</span></h3><h3>",
  "<br> <span>",
  "</span></h3><h3>",
  "<br> <span>",
  "</span></h3></div></div></div></a>",
];
const cardBox = document.querySelector(".cardBox");
let events;

fetch("../../events.json")
  .then((response) => response.json())
  .then((json) => {
    events = json.events;
    printEvents("all");
  });

function printEvents(tag) {
  events.forEach((element) => {
    console.log(element.seasonTag);
    if ((tag == "all" || element.seasonTag == tag)) {
      let currentCard = "".concat(card[0]);
      currentCard = currentCard.concat(element.token);
      currentCard = currentCard.concat(card[1]);

      currentCard = currentCard.concat(element.imgURL);
      currentCard = currentCard.concat(card[2]);
      currentCard = currentCard.concat(element.eventName);

      currentCard = currentCard.concat(card[3]);
      currentCard = currentCard.concat(card[4]);
      currentCard = currentCard.concat(card[5]);
      currentCard = currentCard.concat(card[6]);
      currentCard = currentCard.concat(card[7]);
      currentCard = currentCard.concat(card[8]);
      currentCard = currentCard.concat(card[9]);
      cardBox.innerHTML += currentCard;
    }
  });
}

const buttons = document.querySelectorAll("button");
buttons.forEach((element) => {
  addEventListener("click", (event) => {
    clickedBtn(event.target);
  });
});

function clickedBtn(element) {
  // if(element.innerHTML == "Всичко"){
  //   console.log(element.innerHTML);

  // }
}
