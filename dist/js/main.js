$(document).ready(function ()  {
// =======================================================================
// Hamburger -----------------------------------------
  const HamburgerMenu = $('.hamburger-btn');
  const McButton = $(".McButton");
  const McBar1 = McButton.find("b:nth-child(1)");
  const McBar2 = McButton.find("b:nth-child(2)");
  const McBar3 = McButton.find("b:nth-child(3)");
  
  HamburgerMenu.click(function () {
    $(McButton).toggleClass("active");
    
    if (McButton.hasClass("active")) {
      McBar1.velocity({top: "50%"}, {duration: 200, easing: "swing"});
      McBar3.velocity({top: "50%"}, {duration: 200, easing: "swing"})
        .velocity({rotateZ: "90deg"}, {duration: 800, delay: 200, easing: [500, 20]});
      McButton.velocity({rotateZ: "135deg"}, {duration: 800, delay: 200, easing: [500, 20]});
    } else {
      McButton.velocity("reverse");
      McBar3.velocity({rotateZ: "0deg"}, {duration: 800, easing: [500, 20]})
        .velocity({top: "100%"}, {duration: 200, easing: "swing"});
      McBar1.velocity("reverse", {delay: 800});
    }
  });
//-------------------------------------------------------------------------
//Hamburger меню ----------------------------------------------------------
  (function () {
    var menu;
    var menuBtn;
    var menuItems;
    
    function toggleActive() {
      menuBtn.toggleClass('active');
      menu.toggleClass('active');
    }
    
    $(document).ready(function () {
      menu = $('.hamburger-menu');
      menuBtn = $('.hamburger-btn');
      menuItems = menu.find('a');
      
      menuBtn.click(toggleActive);
      menuItems.click(toggleActive);
    });
  }());
  
  // (function () {
  //   $('.hamburger').on('click', function() {
  //     $('.bar').toggleClass('active');
  //   })
  // })();
//----------------------------------------------------------
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


// ==============================================================
});














