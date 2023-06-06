$(window).on('resize load', function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var aspectRatio = windowWidth / windowHeight;
    
    if (aspectRatio > 1) {
      $('.background-image').css({
        'width': '100%',
        'height': 'auto'
      });
    } else {
      $('.background-image').css({
        'width': 'auto',
        'height': '100%'
      });
    }
  });
  