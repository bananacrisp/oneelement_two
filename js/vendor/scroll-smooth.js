$(document).ready(function() {

  $('a').smoothScroll();

  $('p.subnav a').click(function(event) {
    event.preventDefault();
    var link = this;
    $.smoothScroll({
      scrollTarget: link.hash
    });
  });

  $('#change-speed').on('click', function() {
    var $p1 = $('ul.mainnav a').first(),
        p1Opts = $p1.smoothScroll('options') || {};

    p1Opts.speed = p1Opts.speed === 1400 ? 400 : 1400;
    $p1.smoothScroll('options', p1Opts);
  });

  $('button.scrollsomething').click(function() {
    $.smoothScroll({
      scrollElement: $('div.scrollme'),
      scrollTarget: '#findme'
    });
    return false;
  });
  $('button.scrollhorz').click(function() {
    $.smoothScroll({
      direction: 'left',
      scrollElement: $('div.scrollme'),
      scrollTarget: '.horiz'
    });
    return false;
  });

});