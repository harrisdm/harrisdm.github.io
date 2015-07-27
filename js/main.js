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



  // TweenMax.staggerFrom("header li", 1, { top:"-200px", opacity:0, delay:0.5, ease:Power4 }, 0.2);

  /*******************************
    Menu Scrolling the Page
  *******************************/
  $("a").click(function() {

    // check if it has a hash
    if(this.hash) {

      // get rid of the # sign
      var hash = this.hash.substr(1);
      // console.log(hash);

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


  if(location.hash) {
    var hash = location.hash;
    window.scroll(0,0);
    $("a[href="+hash+"]").click();
  }



  /*******************************
    Menu Section Highlighting
  *******************************/
  $(".projects").waypoint(function(direction) {
    $("nav li").removeClass("menu-highlight");
    $(".mobile-link").removeClass("menu-highlight");
    if(direction == "down") {
      $(".projects-link").addClass("menu-highlight");
    } else {
      $(".home-link").addClass("menu-highlight");
    }
  }, { offset: "50%" });

  $(".about").waypoint(function(direction) {
    $("nav li").removeClass("menu-highlight");
    $(".mobile-link").removeClass("menu-highlight");
    if(direction == "down") {
      $(".about-link").addClass("menu-highlight");
    } else {
      $(".projects-link").addClass("menu-highlight");
    }
  }, { offset: "50%" });

  $(".skills").waypoint(function(direction) {
    $("nav li").removeClass("menu-highlight");
    $(".mobile-link").removeClass("menu-highlight");
    if(direction == "down") {
      $(".skills-link").addClass("menu-highlight");
    } else {
      $(".about-link").addClass("menu-highlight");
    }
  }, { offset: "50%" });

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
      t1.to($(".side-profile-img"), 0.5, { top: "100px" })
        .to($(".side-name"), 0.5, { left: "50%" }, "-=0.3")
        .to($(".side-tag"), 0.5, { left: "50%" }, "-=0.3")
        .to($(".side-button"), 0.5, { opacity: 1 }, "-=0.3");
    } else {
      t1.to($(".side-profile-img"), 0.5, { top: "-300px" })
        .to($(".side-button"), 0.5, { opacity: 0 }, "-=0.5")
        .to($(".side-tag"), 0.5, { left: "-500px" }, "-=1.0")
        .to($(".side-name"), 0.5, { left: "-500px" }, "-=1.5");
    }
  }, { offset: "150px" });



  /*******************************
    Contact button bouncing
  *******************************/
  $(".contact").waypoint(function(direction) {
    if(direction == "down") {
      TweenMax.staggerTo(".contact-button", 2, {scale:1, opacity:1, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
    } else {
      TweenMax.to(".contact-button", 0, {scale:0.5, opacity:0, delay:0.0, ease:Elastic.easeOut, force3D:true}, 0.2);
    }
  }, { offset: "85%" });

  
});