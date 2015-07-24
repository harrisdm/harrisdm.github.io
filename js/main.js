$(document).ready(function() {


    //caches a jQuery object containing the header element
    var profile = $(".side-profile");
    var profile_pos = profile.offset();

    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= profile_pos.top) {
            // profile.addClass("fixed md-show md-col md-col-3");
        } else {
            // profile.removeClass("fixed md-show md-col md-col-3");
        }
    });


  $('#toggle-menu').click(function(){
    $(this).toggleClass('menu-is-active')
  });
  
});