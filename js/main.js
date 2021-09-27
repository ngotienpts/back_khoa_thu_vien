$(document).ready(function() {
	$(".dropdown-list__icon").click(function() {
		$(this).parents('.dropdown-list').siblings().removeClass("open");
		$(this).parents('.dropdown-list').toggleClass("open");
	});
	$(".dropdown-list__iconMobile").click(function() {
		$(this).parents('.dropdown-list').siblings().removeClass('open');
		if($(this).parents('.dropdown-list').hasClass('open')) {
			$(this).parents('.dropdown-list').removeClass('open');
			$(this).children('i').removeClass('fa-minus');
			$(this).children('i').addClass('fa-plus');
		}else {
			$(this).parents('.dropdown-list').addClass('open');
			$(this).children('i').removeClass('fa-plus');
			$(this).children('i').addClass('fa-minus');
		}
	});
});
 
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



//slide 
 $('.carousel').carousel({
    interval: false
  });

/* show-comment*/
$(document).ready(function() {
  $(".dropdown-iconComment").click(function() {
    $(this).parents('.dropdown-comment').toggleClass("open");
  });
});
 


/* icon-fade*/
$(window).scroll(function(){
  var window_top = $(window).scrollTop();
  var div_top = $('#tab_barscroll').offset().top;
  var content_top = $('.intro-img2').offset().top;
  var floating_bar_height = $(".floating-bar").height();

  if(div_top - window_top<=0){
      $(".floating-bar").addClass("sticked");

      if(window_top  > content_top - floating_bar_height - 20){
          $(".floating-bar").hide();
      }else{
          $(".floating-bar").show();
      }
  }
}); 