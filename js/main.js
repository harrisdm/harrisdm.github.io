$(document).ready(function() {

  /*******************************
    Mobile Menu Toggle
  *******************************/
  $("#toggle-menu").click(function(){
    $(this).toggleClass("menu-is-active");
    $(".mobile-menu").slideToggle();
  });


  /*******************************
    Hide the Mobile Menu if resized
  *******************************/
  $(window).on("resize", function() {
    if(window.innerWidth >= 640) {
      $("#toggle-menu").removeClass("menu-is-active");
      $(".mobile-menu").slideUp();
    }
  });


  /*******************************
    Auto Scrolling the Menu
  *******************************/
  $("a").on("click", function() {

    // check if it has a hash
    if(this.hash) {

      // get rid of the # sign
      var hash = this.hash.substr(1);

      // get the position of the <a name>
      var $toElement = $("a[name="+hash+"]");
      var toPosition = $toElement.position().top - 59;

      // scroll/animate to that element
      $("html,body").animate({
        scrollTop : toPosition
      }, 1000);

      // don't do the jump
      return false;
    }
  });

  // If page is loaded with a hash
  if(location.hash) {
    var hash = location.hash;
    window.scroll(0,0);
    $("a[href="+hash+"]").click();
  }


  /*******************************
    Menu Highlighting on Scroll
  *******************************/
  // Projects Section
  $(".projects").waypoint(function(direction) {
    $("nav li").removeClass("menu-highlight");
    $(".mobile-link").removeClass("menu-highlight");
    if(direction == "down") {
      $(".projects-link").addClass("menu-highlight");
    } else {
      $(".home-link").addClass("menu-highlight");
    }
  }, { offset: "50%" });

  // About Section
  $(".about").waypoint(function(direction) {
    $("nav li").removeClass("menu-highlight");
    $(".mobile-link").removeClass("menu-highlight");
    if(direction == "down") {
      $(".about-link").addClass("menu-highlight");
    } else {
      $(".projects-link").addClass("menu-highlight");
    }
  }, { offset: "50%" });

  // Skills Section
  $(".skills").waypoint(function(direction) {
    $("nav li").removeClass("menu-highlight");
    $(".mobile-link").removeClass("menu-highlight");
    if(direction == "down") {
      $(".skills-link").addClass("menu-highlight");
    } else {
      $(".about-link").addClass("menu-highlight");
    }
  }, { offset: "50%" });

  // Contact Section
  $(".contact").waypoint(function(direction) {
    $("nav li").removeClass("menu-highlight");
    $(".mobile-link").removeClass("menu-highlight");
    if(direction == "down") {
      $(".contact-link").addClass("menu-highlight");
    } else {
      $(".skills-link").addClass("menu-highlight");
    }
  }, { offset: "50%" });


  /*******************************
    Side profile animation
  *******************************/
  var $projects = $(".projects");
  $projects.waypoint(function(direction) {
    var t1 = new TimelineLite();
    if(direction == "down") {
      t1.to($(".side-profile-img, .side-name, .side-tag"), 0, { opacity: 1 })
        .to($(".side-profile-img"), 0.4, { top: "100px" }, "-=0.2")
        .to($(".side-name"), 0.4, { left: "50%" }, "-=0.3")
        .to($(".side-tag"), 0.4, { left: "50%" }, "-=0.3")
        .to($(".side-button"), 0.4, { opacity: 1 }, "-=0.1");
    } else {
      t1.to($(".side-profile-img, .side-name, .side-tag, .side-button"), 0.5, { opacity: 0 })
        .add("move", 1)
        .to($(".side-profile-img"), 0, { top: "-300px" }, "move")
        .to($(".side-button"), 0, { opacity: 0 }, "move")
        .to($(".side-tag"), 0, { left: "-500px" }, "move")
        .to($(".side-name"), 0, { left: "-500px" }, "move");
    }
  }, { offset: "150px" });



  /*******************************
    Contact button bouncing
  *******************************/
  $(".contact").waypoint(function(direction) {
    if(direction == "down") {
      TweenMax.staggerTo(".contact-button", 2, {scale:1, opacity:1, delay:0.2, ease:Elastic.easeOut, force3D:true}, 0.2);
    } else {
      TweenMax.to(".contact-button", 0, {scale:0.5, opacity:0, delay:0.0, ease:Elastic.easeOut, force3D:true}, 0.2);
    }
  }, { offset: "85%" });

  
});