"use strict";

const trackers = document.querySelectorAll('[id^="tracker"]');
const hedaderNavAnchors = document.querySelectorAll(".header-anchor");
const locomotiveText = document.getElementById("locomotive-text");
const bottomLocomotiveText = document.getElementById("bottom-locomotive-text");
const headerFormAnchor = document.getElementById("header-form-anchor");
const sliderNav = document.querySelector(".slider-nav");

const sliderAnchors = document.querySelectorAll('[id^="anchor"]');
let deltaLocomotiveTop = -550;
let deltaLocomotiveBottom = -550;

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
class SmoothAnchorScroll {
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
smoothAnchorScroll.init();
/** LOCOMOTIVE */
/* 
if (!navigator.userAgent.includes("Chrome")) {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.07,
    multiplier: 1.1,
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 1,
    smartphone: {
      lerp: 0.2,
      smooth: true,
      breakpoint: 640,
    },
    tablet: {
      smooth: true,
      breakpoint: 1024,
    },
  });
} else {
  document.querySelector("header").style.transform = "none";
 

  locomotiveText.style.transition = "all ease 1.2s";
  bottomLocomotiveText.style.transition = "all ease 1.2s";
  document.addEventListener("wheel", function (event) {
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
    if (deltaLocomotiveBottom < -1300) deltaLocomotiveBottom = -550;
    if (deltaLocomotiveBottom > 0) {
      bottomLocomotiveText.insertAdjacentHTML(
        "beforeend",
        "<p>We make wishes come true</p>"
      );
    }
  }); */

  /**
   * mobile locomotive in chrome
   */

  /* let x1 = null;
  let y1 = null;

  document.addEventListener("touchstart", function (e) {
    const firstTouch = e.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
  });

  document.addEventListener("touchmove", function (event) {
    // console.log(event.touches[0].clientY);
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;
    locomotiveText.style.transition = "all ease 0s";
    bottomLocomotiveText.style.transition = "all ease 0s";

    if (Math.abs(yDiff) > Math.abs(xDiff)) {
      if (yDiff <
         0) {
        console.log('>0');
        deltaLocomotiveTop -= 2;
        deltaLocomotiveBottom += 2;
      } else {
        console.log('<0');
        deltaLocomotiveTop += 2;
        deltaLocomotiveBottom -= 2;
      }

      locomotiveText.style.left = deltaLocomotiveTop + "px";
      bottomLocomotiveText.style.left = deltaLocomotiveBottom + "px";
      if (deltaLocomotiveTop > 0) deltaLocomotiveTop = 0;
      if (deltaLocomotiveTop < -1200) {
        locomotiveText.insertAdjacentHTML(
          "beforeend",
          "<p>Give the gift of awesome</p>"
        );
      }
      if (deltaLocomotiveBottom < -700) deltaLocomotiveBottom = -700;
      if (deltaLocomotiveBottom > 100) {
        bottomLocomotiveText.insertAdjacentHTML(
          "beforeend",
          "<p>We make wishes come true</p>"
        );
      }
      x1 = null;
      y1 = null;
    } else {
      return;
    }
  });
  ////
} */

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
    test = sizePoint;
    svgRender(sizePoint);
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
    test = 8 * sizePoint - 50;
    svgRender(test);
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
    test = 16 * sizePoint - 110;
    svgRender(test);
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
    test = 24 * sizePoint - 180;
    svgRender(test);
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

/** 

 console.log(document.body.clientHeight);

 console.log((svgTracker.attributes.height.value = 33)); //height of SVG
console.log((svgTracker.attributes.viewBox.textContent = "0 0 20 33")); // length of viewbox
console.log((svgTracker.childNodes[1].attributes.height.value = 25)); // length of track
console.log(
  (svgTracker.childNodes[3].attributes.d.textContent =
    "M10 33L1.33974 18H18.6603L10 33Z")
); */

const sizePoint = document.body.clientHeight / 23;

function svgRender(num) {
  svgTracker.attributes.height.value = document.body.clientHeight / 1.05;
  svgTracker.attributes.viewBox.textContent = `0 0 20 ${svgTracker.attributes.height.value}`;
  svgTracker.childNodes[1].attributes.height.value = num - 8;
  svgTracker.childNodes[3].attributes.d.textContent = `M10 ${
    num + 10
  }L1.33974 ${num - 5}H18.6603L10 ${num + 10}Z`;
}

svgRender(sizePoint);

let test = sizePoint + 10;
function scrollFn(e) {
  if (e.deltaY > 0) {
    test += sizePoint - 10;
  } else if (e.deltaY < 0) {
    test -= sizePoint - 10;
  }
  if (test < sizePoint + 10) test = sizePoint + 10;
  if (test > document.body.clientHeight / 1.26)
    test = document.body.clientHeight / 1.26;
  // svgTracker.attributes.height.value = test;
  // svgTracker.attributes.viewBox.textContent = `0 0 20 ${test+20}`;
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

window.addEventListener('scroll', function(event) {
  if (window.pageYOffset === 0 ) {
    document.getElementById("header").classList.remove("unstick")
  } else {
    document.getElementById("header").classList.add("unstick")
  }
})

