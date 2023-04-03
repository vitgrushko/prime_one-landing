//=ANIMATION MENU BURGER==============================================================================================================================================

const iconMenu = document.querySelector(".header__burger");
const menuBody = document.querySelector(".header-menu");
if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle("lock");
    iconMenu.classList.toggle("active");
    menuBody.classList.toggle("active");
  });

  document.body.querySelectorAll(".menu_link").forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("lock");
      iconMenu.classList.remove("active");
      menuBody.classList.remove("active");
    });
  });
}

//=ANIMATION-SCROLL====================================================================================================================================================

const animItems = document.querySelectorAll("._anim-items");
if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll() {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        scrollY > animItemOffset - animItemPoint &&
        scrollY < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_activeAnime");
      } else {
        if (!animItem.classList.contains("_anim-no-hide")) {
          animItem.classList.remove("_activeAnime");
        }
      }
    }
  }
  function offset(el) {
    const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 300);
}

//=ADAPTIVE-FUNCTIONS==============================================================================================================================================================

$(window).resize(function (event) {
  adaptive_function();
});
function adaptive_header(w, h) {
  const headerMenu = $(".header-menu");
  const headerLang = $(".header-top-lang");
  if (w < 767) {
    if (!headerLang.hasClass("done")) {
      headerLang.addClass("done").appendTo(headerMenu);
    }
  } else {
    if (headerLang.hasClass("done")) {
      headerLang.removeClass("done").prependTo($(".header-top"));
    }
  }
  if (w < 767) {
    if (!$(".header-bottom-menu").hasClass("done")) {
      $(".header-bottom-menu").addClass("done").appendTo(headerMenu);
    }
  } else {
    $.each($(".header-bottom-menu"), function (index, val) {
      if ($(this).hasClass("header-bottom-menu__right")) {
        if ($(this).hasClass("done")) {
          $(this)
            .removeClass("done")
            .prependTo($(".header-bottom__column").eq(2));
        }
      } else {
        if ($(this).hasClass("done")) {
          $(this)
            .removeClass("done")
            .prependTo($(".header-bottom__column").eq(0));
        }
      }
    });
  }
}
function adaptive_function() {
  let w = $(window).outerWidth();
  let h = $(window).outerHeight();
  adaptive_header(w, h);
}
adaptive_function();

//=FUNCTION IBG==============================================================================================================================================================

function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (let i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

//=GOOGLE-MAP==============================================================================================================================================================

function map(n) {
  google.maps.Map.prototype.setCenterWithOffset = function (
    latlng,
    offsetX,
    offsetY
  ) {
    var map = this;
    var ov = new google.maps.OverlayView();
    ov.onAdd = function () {
      var proj = this.getProjection();
      var aPoint = proj.fromLatLngToContainerPixel(latlng);
      aPoint.x = aPoint.x + offsetX;
      aPoint.y = aPoint.y + offsetY;
      map.panTo(proj.fromContainerPixelToLatLng(aPoint));
      //map.setCenter(proj.fromContainerPixelToLatLng(aPoint));
    };
    ov.draw = function () {};
    ov.setMap(this);
  };
  var markers = new Array();
  var infowindow = new google.maps.InfoWindow({
    // pixelOffset: new google.maps.Size(-230, 250),
  });
  var locations = [[new google.maps.LatLng(40.742728, -73.926116)]];
  var options = {
    zoom: 10,
    panControl: false,
    mapTypeControl: false,
    center: locations[0][0],
    scrollwhell: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById("map"), options);
  var icon = {
    url: "img/icons/map.svg",
    scaledSize: new google.maps.Size(18, 20),
    anchor: new google.maps.Point(9, 10),
  };
  for (var i = 0; i < locations.length; i++) {
    var marker = new google.maps.Marker({
      //icon:icon,
      position: locations[i][0],
      map: map,
    });
    markers.push(marker);
  }
}
if ($("#map").length > 0) {
  map();
}

//=FORMS-INPUT-TEXTAREA==============================================================================================================================================================

("use strict");

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);

    if (error === 0) {
      location.reload();
      // form.reset();
      // alert("Data sent successfully!");
    } else {
      // alert("Error! Fill in required fields");
    }
  }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (
        input.getAttribute("type") === "checkbox" &&
        input.checked === false
      ) {
        formAddError(input);
        error++;
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }
    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }

  // =email-test-function

  function emailTest(input) {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
});
