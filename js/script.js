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
      }
      e.preventDefault();
    });

});