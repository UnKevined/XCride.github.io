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
  var backgroundImages = $('.background-image');
  var totalImages = backgroundImages.length;
  var activeImageIndex = 0;

  function switchBackgroundImage() {
    backgroundImages.removeClass('active');
    $(backgroundImages[activeImageIndex]).addClass('active');
    activeImageIndex = (activeImageIndex + 1) % totalImages;
  }

  var scrollThreshold = 0.8; // Adjust the scroll threshold as needed
  var scrollFlag = false;

  $('#comment-form').submit(function(e) {
    e.preventDefault();
    var name = $('#name').val();
    var comment = $('#comment').val();

    // Füge den Kommentar der Liste hinzu
    $('#comment-list').append('<li><strong>' + name + ':</strong> ' + comment + '</li>');

    // Zurücksetzen der Formularfelder
    $('#name').val('');
    $('#comment').val('');
  });

  $(window).scroll(function() {
    if (!scrollFlag) {
      scrollFlag = true;
      setTimeout(function() {
        var scrollTop = $(window).scrollTop();
        var windowHeight = $(window).height();
        var scrollBottom = scrollTop + windowHeight;

        if (scrollBottom >= $(document).height() * scrollThreshold) {
          switchBackgroundImage();
        }

        scrollFlag = false;
      }, 200);
    }
  });
});


