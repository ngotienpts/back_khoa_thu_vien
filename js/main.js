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

function showMoreCmt() {
  var getHeaderMoreContent = document.querySelectorAll(".cmt-content__header");
  getHeaderMoreContent.forEach(function (value) {
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

function showPopupLogin() {
  var getUserIcon = document.querySelectorAll(".login");
  var closePopupLogin = document.querySelectorAll(".popup-login__close ");
  var showPopup = document.querySelector(".popup-login");

  getUserIcon.forEach(function (el) {
    el.onclick = function () {
      if (showPopup) {
        if (showPopup.classList.contains("open")) {
          showPopup.classList.remove("open");
        } else {
          showPopup.classList.add("open");
        }
      }
    };
  });

  closePopupLogin.forEach(function (clo) {
    clo.onclick = function () {
      if (showPopup) {
        showPopup.classList.remove("open");
      }
    };
  });
}

function showMenu() {
  var getheaderMenu = document.querySelector(".collapse-menu");
  getheaderMenu.onclick = function () {
    var showMenuList = document.querySelector(".collapse-menu-list");
    showMenuList.classList.toggle("open");
  };
}

function start() {
  showMoreCmt();
  showPopupLogin();
  showMenu();
}
start();
