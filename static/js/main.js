! function(e) {
  skel.breakpoints({
    xlarge: "(max-width: 1680px)",
    large: "(max-width: 1280px)",
    medium: "(max-width: 980px)",
    small: "(max-width: 736px)",
    xsmall: "(max-width: 480px)"
  }), e(function() {
    var i = e(window),
      s = e("body"),
      l = (e("#page-wrapper"), e("#banner")),
      a = e("#header");
    s.addClass("is-loading"), i.on("load", function() {
      window.setTimeout(function() {
        s.removeClass("is-loading")
      }, 100)
    }), skel.vars.mobile ? s.addClass("is-mobile") : skel.on("-medium !medium", function() {
      s.removeClass("is-mobile")
    }).on("+medium", function() {
      s.addClass("is-mobile")
    }), e("form").placeholder(), skel.on("+medium -medium", function() {
      e.prioritize(".important\\28 medium\\29", skel.breakpoint("medium").active)
    }), e(".scrolly").scrolly({
      speed: 1500,
      offset: a.outerHeight()
    }), e("#menu").append('<a href="#menu" class="close"></a>').appendTo(s).panel({
      delay: 500,
      hideOnClick: !0,
      hideOnSwipe: !0,
      resetScroll: !0,
      resetForms: !0,
      side: "right",
      target: s,
      visibleClass: "is-menu-visible"
    }), skel.vars.IEVersion < 9 && a.removeClass("alt"), l.length > 0 && a.hasClass("alt") && (i.on("resize", function() {
      i.trigger("scroll")
    }), l.scrollex({
      bottom: a.outerHeight() + 1,
      terminate: function() {
        a.removeClass("alt")
      },
      enter: function() {
        a.addClass("alt")
      },
      leave: function() {
        a.removeClass("alt")
      }
    }))
  })
}(jQuery);

$(window).resize(function () {

  if ($(window).width() >= 736) {
    $(".menuToggle").attr("href", index);
  }

  else if ($(window).width() < 736) {
    $(".menuToggle").attr("href", "#menu");
    $("section").removeClass("loginmargin")
  }
})

$(document).ready(function() {
  if ($(window).width() >= 736) {
    $(".menuToggle").attr("href", index);
  }
  else {
    $("section").removeClass("loginmargin")
  }
})
