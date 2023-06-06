
/*
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
  
  $(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      $('.background-image').each(function() {
        var imageTop = $(this).offset().top;
        
        if (imageTop < scrollTop + windowHeight && imageTop + $(this).height() > scrollTop) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    });
  });
  
*/



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
  
  $(document).ready(function() {
    $(window).scroll(function() {
      var scrollTop = $(window).scrollTop();
      var windowHeight = $(window).height();
  
      $('.background-image').each(function() {
        var imageTop = $(this).offset().top;
        var imageHeight = $(this).height();
        
        if (imageTop + imageHeight > scrollTop && imageTop < scrollTop + windowHeight) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    });
  });
  