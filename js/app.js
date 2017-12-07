$(document).ready(function(){
  var imgheight = $('.imgarea').height();
  $('.textarea').css('margin-top', imgheight/4);

  $('.front-container').css("margin-top", ( $(window).height() - $('.front-container').height() ) / 2  + "px");

  $('img#snovimgodom').click(function(){
    $('#countdown').addClass('completed');
    $('#interactive-snow').hide();
    $('#fireworks').show();
    $('audio')[0].play();
    $('.gamelink').show('slow');
  });
});
