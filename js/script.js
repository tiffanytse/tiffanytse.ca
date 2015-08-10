$(document).ready(function() {

    console.log('tset');
    // Add Close Button
    $('.contact .wrapper').append('<a class="btn-close button circle light"><i class="i-cancel"></i><span class="element-invisible">Close</span></a>');
    

    //Close Toggle
    $('.btn-close').click(function(e){
      if ($('#page').attr('data-state') == 'slide-open') {
        $('#page').attr('data-state', 'slide-closed');
      }
      else {
        $('#page').attr('data-state', 'slide-open');
      }
      e.preventDefault();
    });

    // Menu Toggle
    $('.contact-btn').click(function(e){
      if ($('#page').attr('data-state') == 'slide-open') {
        $('#page').attr('data-state', 'slide-closed');
      }
      else {
        $('#page').attr('data-state', 'slide-open');
        $('body').animate({
          scrollTop: $("#contact-top").offset().top
        }, 1000);
      }
      e.preventDefault();
    });

    // Animate main menu
    var mainTop = 10;

    // on scroll, 
    $(window).on('scroll',function(){

        // we round here to reduce a little workload
        stop = Math.round($(window).scrollTop());
        if (stop > mainTop) {
            $('.header').addClass('is-solid');
        } else {
            $('.header').removeClass('is-solid');
       }
    });

    // Waypoints

    var waypoint = new Waypoint({
      element: document.getElementById('wp'),
      handler: function(direction) {
        $('.circle-wrap').addClass('run');
      },
      offset: 600
    });

    // Smooth Scroll
    $('a[href^="#"]').on('click', function(event) {

        var target = $( $(this).attr('href') );

        if( target.length ) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });



});


