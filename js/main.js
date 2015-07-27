$(document).ready(function() {

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
  
});