var headShotText       = document.querySelector("#headshot-phrase");
var headShot           = document.querySelector("#headshot");


var hiddenClass = document.querySelector(".hidden");
var sectionHome        = document.querySelector("#home");
var sectionProgramming = document.querySelector("#programming");
var sectionWriting     = document.querySelector("#writing");
var sectionKindWords   = document.querySelector("#kind-words");
var sectionContact     = document.querySelector("#contact");
var sections = [sectionHome, sectionProgramming, sectionWriting, sectionKindWords, sectionContact];

var navHome = document.querySelector("#nav-home");
var navProgramming = document.querySelector("#nav-programming");
var navWriting = document.querySelector("#nav-writing");
var navKindWords = document.querySelector("#nav-kind-words");
var navContact = document.querySelector("#nav-contact");

// ~*~*~*~*~*~* General *~*~*~*~*~*~ //

function docReady(func) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(func, 1);
  } else {
    document.addEventListener("DOMContentLoaded", func);
  }
}
// TODO uncomment when going live
docReady(function() {
  sectionHome.classList.toggle("hidden");
});

// TODO only for dev pruposes
// docReady(function() {
//   sectionKindWords.classList.toggle("hidden");
// });

navHome.addEventListener("click", function() {
  if (sectionHome.classList.contains("hidden")) {
    hideSections();
    sectionHome.classList.toggle("hidden");
  }
});

navProgramming.addEventListener("click", function () {
  if (sectionProgramming.classList.contains("hidden")) {
    hideSections();
    sectionProgramming.classList.toggle("hidden");
  }
});

navWriting.addEventListener("click", function() {
  if (sectionWriting.classList.contains("hidden")) {
    hideSections();
    sectionWriting.classList.toggle("hidden");
  }
});

navKindWords.addEventListener("click", function() {
  if (sectionKindWords.classList.contains("hidden")) {
    hideSections();
    sectionKindWords.classList.toggle("hidden");
  }
});

navContact.addEventListener("click", function() {
  if (sectionContact.classList.contains("hidden")) {
    hideSections();
    sectionContact.classList.toggle("hidden");
  }
});

function hideSections() {
  for (var i = sections.length - 1; i >= 0; i--) {
    console.log(sections[i]);
    sections[i].classList.add("hidden");
  }
}

// ~*~*~*~*~*~* Sections: Home *~*~*~*~*~*~ //

headShotText.addEventListener("mouseover", mouseOver, false);
headShotText.addEventListener("mouseout", mouseOut, false);

function mouseOver() {
  if (headShot.classList.contains("headshot-initial-state")) {
    headshot.classList.remove("headshot-initial-state");
    headshot.classList.add("headshot-visible");
  }
  if (headShot.classList.contains("headshot-hidden")) {
    headshot.classList.remove("headshot-hidden");
    headshot.classList.add("headshot-visible");
  }
}

function mouseOut() {
  if (headShot.classList.contains("headshot-visible")) {
    headShot.classList.remove("headshot-visible");
    headShot.classList.add("headshot-hidden");
  }
}
