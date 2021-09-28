// show menu mobile
$(document).ready(function () {
  $(".show-menu-btn").click(function () {
    $(".menu-mobile").toggleClass("open_nav_mb");
  });
  $(".hide-menu-btn").click(function () {
    $(".menu-mobile").removeClass("open_nav_mb");
  });
  $(".dropdown-list").click(function () {
    $(".dropdown-list").toggleClass("open");
  });
});
// end show menu mobile
// thu vien anh dang tab
function openContent(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function scrollTopFadeFixed() {
  var footerDetail = document.getElementById("footer").offsetTop;
  var scrollFixedBlock = document.getElementById("change-page");
  window.onscroll = function () {
    var currentScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (currentScroll > footerDetail - 1000) {
      scrollFixedBlock.style.display = "none";
      scrollFixedBlock.style.opacity = "0";
    } else {
      scrollFixedBlock.style.display = "block";
      scrollFixedBlock.style.opacity = "1";
    }
  };
}

function showMoreCmt() {
  var getHeaderMoreContent = document.querySelectorAll(".cmt-content__header");
  var output = getHeaderMoreContent.forEach(function (value) {
    value.onclick = function (e) {
      var spanContent = e.target.closest(".cmt-content__span");
      if (spanContent) {
        if (spanContent.nextElementSibling) {
          spanContent.nextElementSibling.classList.toggle("show");
        }
      }
    };
  });
}

function start() {
  scrollTopFadeFixed();
  showMoreCmt();
}
start();
