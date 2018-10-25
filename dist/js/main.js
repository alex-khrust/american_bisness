$(document).ready(function ()  {
// =======================================================================
// Hamburger -----------------------------------------
  (function () {
    $('#search-hamburger').on('click', function() {
      $('#search-hamburger>.bar').toggleClass('animate');
      $('.hamburger-menu').toggleClass('down');
    });
    $('.hamburger-menu a').on('click', function() {
      $('#search-hamburger>.bar').toggleClass('animate');
      $('.hamburger-menu').toggleClass('down');
    })
  })();
  
  // drop down the menu, and swap the icon to the close icon ----------
  $('#nav-menu').click(function(){
    $('#nav-menu>.bar').toggleClass('animate');
    $('nav').toggleClass('down');
    $('.search-bar').removeClass('down');
  });
  //Make sure the menu icon behaves correctly when the menu is open
  $('nav li a').click(function(){
    $('#nav-menu>.bar').removeClass('animate');
    $('nav').toggleClass('down');
  });
//show and hide the search bar, also make sure if the menu is open to hide the menu, and ensure the menu icon state is correct
  $('#search-btn').click(function(){
    $('.search-bar').toggleClass('down');
    $('#nav-menu>.bar').removeClass('animate');
    $('nav').removeClass('down');
    $('#search-hamburger>.bar').removeClass('animate');
    $('.hamburger-menu').removeClass('down');
  });
//-------------------------------------------------------------------------
//Добавление и удаление классов по ширене экрана  ----------
  var windowWidth = $(window).width();
  if (windowWidth < 1070) $("header").addClass("mob-menu");
  else $("header").removeClass("mob-menu");
  
  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 1070) $("header").addClass("mob-menu");
    else $("header").removeClass("mob-menu");
  });
//----------------------------------------------------------
// Animated Counter Bootstrap ------------------------------
  $('.num').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
 
//----------------------------------------------------------




// ==============================================================
});














