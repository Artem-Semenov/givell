"use strict";
const trackers = document.querySelectorAll('[id^="tracker"]');
const hedaderNavAnchors = document.querySelectorAll(".header-anchor");
const locomotiveText = document.getElementById("locomotive-text");
const bottomLocomotiveText = document.getElementById("bottom-locomotive-text");
const headerFormAnchor = document.getElementById("header-form-anchor");
const sliderNav = document.querySelector(".slider-nav");

const sliderAnchors = document.querySelectorAll('[id^="anchor"]');
let deltaLocomotiveTop = -1300;
let deltaLocomotiveBottom = -1300;

/** SMOOTH SCROLL */
/*  class SmoothAnchorScroll {
  init() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    for (const anchor of anchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    }
  }
} 

const smoothAnchorScroll = new SmoothAnchorScroll();
smoothAnchorScroll.init(); */

/** QUCK SCROLL FOR SLIDER ANCHORS*/
/* class SliderQuickScroll {
  init() {
    for (const anchor of sliderAnchors) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({
            behavior: "auto",
          });
        }
      });
    }
  }
}
const sliderQuickScroll = new SliderQuickScroll();
sliderQuickScroll.init(); */

/** LOCOMOTIVE */
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  multiplier: 1,
  smartphone: {
    smooth: true,
    multiplier: 2,
  },
  tablet: {
    smooth: true,
    multiplier: 2,
  },
});

/* $(".slider").on("inview", function (event, isInView) {
  if (isInView) {
   document.getElementById
  } else {
  
  }
}); */

/*   document.addEventListener("wheel", function (event) {
  deltaLocomotiveTop += event.deltaY;
  deltaLocomotiveBottom -= event.deltaY;
  locomotiveText.style.left = deltaLocomotiveTop + "px";
  bottomLocomotiveText.style.left = deltaLocomotiveBottom + "px";
  if (deltaLocomotiveTop > 0) deltaLocomotiveTop = 0;
  if (deltaLocomotiveTop < -1200) {
    locomotiveText.insertAdjacentHTML(
      "beforeend",
      "<p>Give the gift of awesome</p>"
    );
  }
  if (deltaLocomotiveBottom > 0) deltaLocomotiveBottom = -1300;
  if (deltaLocomotiveBottom < -1300) {
    bottomLocomotiveText.insertAdjacentHTML(
      "afterbegin",
      "<p>We make wishes come true</p>"
    );
  }
});  
 */
//////App Scroller/////
$(".first-trigger").on("inview", function (event, isInView) {
  if (isInView) {
    $(".slider-element:not(.first-slide)").fadeOut(0);
    $(".first-slide").fadeIn(300);
    sliderAnchors.forEach((el) => el.classList.remove("active"));
    sliderAnchors[0].classList.add("active");
    /*     trackers.forEach((el) => el.classList.remove("active"));
    trackers[0].classList.add("active"); */
    sliderNav.classList.add("show");
  } else {
    sliderNav.classList.remove("show");
  }
});

$(".second-trigger").on("inview", function (event, isInView) {
  if (isInView) {
    $(".slider-element").fadeOut(0);
    $(".second-slide").fadeIn(300);
    sliderAnchors.forEach((el) => el.classList.remove("active"));
    sliderAnchors[1].classList.add("active");
    /*     trackers.forEach((el) => el.classList.remove("active"));
    trackers[1].classList.add("active"); */
    sliderNav.classList.add("show");
  } else {
  }
});

$(".third-trigger").on("inview", function (event, isInView) {
  if (isInView) {
    $(".slider-element").fadeOut(0);
    $(".third-slide").fadeIn(300);
    sliderAnchors.forEach((el) => el.classList.remove("active"));
    sliderAnchors[2].classList.add("active");
    /*     trackers.forEach((el) => el.classList.remove("active"));
    trackers[2].classList.add("active"); */
    sliderNav.classList.add("show");
  } else {
  }
});
$(".fourth-trigger").on("inview", function (event, isInView) {
  if (isInView) {
    $(".slider-element:not(.fourth-slide)").fadeOut(0);
    $(".fourth-slide").fadeIn(300);
    sliderAnchors.forEach((el) => el.classList.remove("active"));
    sliderAnchors[3].classList.add("active");
    /*     trackers.forEach((el) => el.classList.remove("active"));
    trackers[3].classList.add("active"); */
    sliderNav.classList.add("show");
  } else {
  }
});

/** HEADER NAV - ACTIVE ANCHORS */

$(".main-section").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[0].classList.add("active");
  } else {
  }
});

$(".second-page-text-wrapper").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[1].classList.add("active");
  } else {
  }
});

/* $(".slider-element").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[2].classList.add("active");
  } else {
  }
});
 */
$(".main-third-page-content").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[3].classList.add("active");
  } else {
  }
});
$(".submit-button").on("inview", function (event, isInView) {
  if (isInView) {
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.add("active");
  } else {
  }
});

/** FORM VALIDATION */
const popup = document.getElementById("pop-up-window");
const popupCloseButtons = document.querySelectorAll(".popup-close-button");
const overlay = document.getElementById("overAll");
const popupFail = document.getElementById("popup-fail");
const form = document.forms.form;
const firstName = form.firstname;
const lastName = form.lastname;
const textarea = form.message;
const email = form.email;
const emailPlaceholder = email.placeholder;
const textareaPlaceholder = textarea.placeholder;
const firstNamePlaceholder = firstName.placeholder;
const lastNamePlaceholder = lastName.placeholder;
// const falseValidation = document.getElementById("")
const submitButton = document.getElementById("submitButton");

form.addEventListener("input", function (event) {
  if (firstName.value || lastName.value) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
    console.log("closed");
  }
});

firstName.addEventListener("focus", function (f) {
  firstName.placeholder = "";
  firstName.classList.remove("_error");
  /* if (firstName.nextElementSibling) {
    firstName.nextElementSibling.remove();
  } 
  firstName.classList.remove("input_error");
  */
});

firstName.addEventListener("blur", function (f) {
  firstName.placeholder = firstNamePlaceholder;
});

lastName.addEventListener("focus", function (f) {
  lastName.placeholder = "";
  lastName.classList.remove("_error");
  /* if (lastNameShow.nextElementSibling) {
    lastNameShow.nextElementSibling.remove();
  } 
  lastName.classList.remove("input_error");
  */
});

lastName.addEventListener("blur", function (f) {
  lastName.placeholder = lastNamePlaceholder;
});

textarea.addEventListener("focus", function (f) {
  textarea.placeholder = "";
});

textarea.addEventListener("blur", function (f) {
  textarea.placeholder = textareaPlaceholder;
});

email.addEventListener("focus", function (f) {
  email.placeholder = "";
  email.classList.remove("_error");
});

email.addEventListener("blur", function (f) {
  email.placeholder = emailPlaceholder;
});

function emailTest(input) {
  const testEmail =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return testEmail.test(input.value);
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formData = new FormData(form);
  if (!firstName.value?.trim().match(/^[A-Za-z]+$/)) {
    // event.preventDefault()
    firstName.classList.add("_error");
    alert("Please enter your name(without numbers)");
    console.log("please enter your name(without numbers)");
  } else if (!lastName.value?.trim().match(/^[A-Za-z]+$/)) {
    // event.preventDefault()
    lastName.classList.add("_error");
    alert("Please enter your last name(without numbers)");
    console.log("Please enter your last name(without numbers)");
  } else if (!email.value.trim()) {
    email.classList.add("_error");
    alert("Enter email please");
  } else if (!emailTest(email)) {
    // event.preventDefault()
    email.classList.add("_error");
    alert("Enter your real email please");
    console.log("email not valid");
  } else {
    form.classList.add("_sending");
    let response = await fetch("sendmail.php", {
      method: "POST",
      body: formData,
    });
    if (response.ok) {
      let result = await response.json();
      form.reset();
      form.classList.remove("_sending");

      popup.classList.add("show");
      overlay.classList.add("show");
      document.addEventListener("click", function (event) {
        if (event.target.id === "overAll") {
          popup.classList.remove("show");
          overlay.classList.remove("show");
          return;
        }
      });
    } else {
      popupFail.classList.add("show");
      overlay.classList.add("show");
      document.addEventListener("click", function (event) {
        if (event.target.id === "overAll") {
          popupFail.classList.remove("show");
          overlay.classList.remove("show");
          return;
        }
      });

      form.classList.remove("_sending");
    }
  }
});

popupCloseButtons.forEach((el) => {
  el.addEventListener("click", function (event) {
    console.log("tra");
    popupFail.classList.remove("show");
    popup.classList.remove("show");
    overlay.classList.remove("show");
  });
});

const svgTracker = document.getElementById("tracker-svg");

/* console.log((svgTracker.attributes.height.value = 33)); //height of SVG
console.log((svgTracker.attributes.viewBox.textContent = "0 0 20 33")); // length of viewbox
console.log((svgTracker.childNodes[1].attributes.height.value = 25)); // length of track
console.log(
  (svgTracker.childNodes[3].attributes.d.textContent =
    "M10 33L1.33974 18H18.6603L10 33Z")
);
 */
let test = 33;
function scrollFn(e) {
  if (e.deltaY > 0) {
    test += 23;
  } else if (e.deltaY < 0) {
    test -= 23;
  }
  if (test < 33) test = 33;
  if (test > 600) test = 600;
  svgTracker.attributes.height.value = test;
  svgTracker.attributes.viewBox.textContent = `0 0 20 ${test}`;
  svgTracker.childNodes[1].attributes.height.value = test - 10;
  svgTracker.childNodes[3].attributes.d.textContent = `M10 ${test}L1.33974 ${
    test - 13
  }H18.6603L10 ${test}Z`;
}

$(".slider-content-wrapper").on("inview", function (event, isInView) {
  if (isInView) {
    document.addEventListener("wheel", scrollFn);
    hedaderNavAnchors.forEach((el) => el.classList.remove("active"));
    headerFormAnchor.classList.remove("active");
    hedaderNavAnchors[2].classList.add("active");
  } else {
    document.removeEventListener("wheel", scrollFn);
  }
});

/* setInterval(() => {
  console.log(document.querySelector(".slider").offsetTop);
  console.log(window.body.scr);
}, 1000
  */
