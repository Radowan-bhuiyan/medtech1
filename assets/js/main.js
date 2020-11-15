
  $(window).on('scroll', function () {
    var wscroll = $(this).scrollTop();
    //fixed-nav
    wscroll > 1 ? $(".navbar").addClass("fixed") : $(".navbar").removeClass("fixed");


  });
