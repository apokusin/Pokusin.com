(function() {

  $(document).ready(function() {
    var keyCombo, onDown, onUp;
    $.getJSON("https://preserve.io/u/artur.json", function(data) {
      var bookmarks, items, limit;
      items = [];
      limit = 3;
      bookmarks = 0;
      $.each(data.user.bookmarks, function(key, bookmark) {
        if (bookmarks > limit) {
          return false;
        } else {
          bookmarks = bookmarks + 1;
          return items.push("<a target=\"_blank\" href=\"" + bookmark.url + "\">" + bookmark.title + "</a>");
        }
      });
      return $("#bookmarks").html(items.join(""));
    });
    $.jribbble.getShotsByPlayerId("apokusin", (function(playerShots) {
      var html;
      html = [];
      $.each(playerShots.shots, function(i, shot) {
        html.push("<a target=\"_blank\" href=\"" + shot.url + "\">");
        html.push("<img src=\"" + shot.image_teaser_url + "\" ");
        return html.push("alt=\"" + shot.title + "\"></a></li>");
      });
      return $("#dribbble").html(html.join(""));
    }), {
      page: 1,
      per_page: 3
    });
    $("#flickr").jflickrfeed({
      limit: 3,
      qstrings: {
        id: "95116542@N02"
      },
      itemTemplate: "<a target=\"_blank\" href=\"{{image_b}}\"><img alt=\"{{title}}\" src=\"{{image_m}}\" /></a>"
    });
    keyCombo = "j + k + l";
    onDown = function() {
      return $("header div h2").html("Hey! I'm <span>Artur Pokusin</span> <small>and this is Jackass!</small>");
    };
    onUp = function() {
      return $("header div h2").html("Hey! I'm <span>Artur Pokusin</span>.");
    };
    KeyboardJS.on(keyCombo, onDown, onUp);
    return $("a").click(function() {
      if ($(this).data("track")) {
        return mixpanel.track($(this).data("track"));
      } else if ($(this).hasClass("nav")) {
        $("html, body").animate({
          scrollTop: $($.attr(this, "href")).offset().top
        }, 500);
        return false;
      }
    });
  });

}).call(this);
