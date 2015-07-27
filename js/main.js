$(document).ready(function() {

  // Mobile menu toggling
  $('#toggle-menu').click(function(){
    $(this).toggleClass('menu-is-active');
    $(".mobile-menu").slideToggle();
  });


  // Menu click scrolls down the page
  $("a").click(function() {

    // check if it has a hash
    if(this.hash) {

      // get rid of the # sign
      var hash = this.hash.substr(1);
      console.log(hash);

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
  
});