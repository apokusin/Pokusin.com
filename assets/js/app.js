$(document).ready(function(){


 // Loading the latest profile JSON from Preserve.
 $.getJSON('https://preserve.io/u/artur.json', function(data){
  var items = [];
    // How many bookmarks are we going to display?
    var limit = 3;
    var bookmarks = 0;
    $.each(data.user.bookmarks, function(key, bookmark){
      if(bookmarks > limit) {
        return false;
      }
      else {
        bookmarks = bookmarks + 1;
        items.push('<a target="_blank" href="'+ bookmark.url +'">'+ bookmark.title +'</a>');
      }
    });
    $('#bookmarks').html(items.join(''));
  });

  // API Ref: http://api.dribbble/players/:id/shots
  $.jribbble.getShotsByPlayerId('apokusin', function (playerShots) {
    var html = [];
    $.each(playerShots.shots, function (i, shot) {
      html.push('<a target="_blank" href="' + shot.url + '">');
      html.push('<img src="' + shot.image_teaser_url + '" ');
      html.push('alt="' + shot.title + '"></a></li>');
    });

    $('#dribbble').html(html.join(''));
  }, {page: 1, per_page: 3});

  // Flickr Photos
  $('#flickr').jflickrfeed({
    limit: 3,
    qstrings: {
      id: '95116542@N02'
    },
    itemTemplate: '<a target="_blank" href="{{image_b}}"><img alt="{{title}}" src="{{image_m}}" /></a>'
  });

  var keyCombo = 'j + k + l';
  onDown = function() {
    $('header div h2').html("Hey! I'm <span>Artur Pokusin</span> <small>and this is Jackass!</small>");
  };
  onUp = function() {
    $('header div h2').html("Hey! I'm <span>Artur Pokusin</span>.");
  };

  KeyboardJS.on(keyCombo, onDown, onUp);

  $('a').click(function(){
    if ($(this).data('track')) {
      mixpanel.track($(this).data('track'));
    } else if ($(this).hasClass('nav')) {
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 500);
      return false;
    }
  });


});
