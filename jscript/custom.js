$(function() {
    "use strict";
    var rNav = $(".right-nav"),
        hInfo = $(".home .info"),
        home = $(".home"),
        navBtn = $(".slide-nav-btn"),
        navBtnActive = "slide-nav-btn-active",
        nav = $(".slide-nav"),
        navActive = "slide-nav-active",
        rNavSpan = $(".right-nav ul li i"),
        up = $(".up i"),
        body = $("html, body");
    rNav.css("top", (home.height() - rNav.height()) / 2);
    hInfo.css("top", (home.height() - hInfo.height()) / 2);
    navBtn.on("click", function() {
        $(this).toggleClass(navBtnActive);
        nav.toggleClass(navActive)
    });
    $(document).on("scroll", function() {
        var y = $(this).scrollTop();
        if (y > 200) {
            rNavSpan.css("background", "rgba(0, 0, 0, 0.54)");
            navBtn.css("background", "rgba(0, 0, 0, 0.54)");
            nav.css("background", "rgba(0, 0, 0, 0.8)")
        } else {
            rNavSpan.css("background", "rgba(255, 255, 255, 0.05)");
            navBtn.css("background", "rgba(255, 255, 255, 0.05)");
            nav.css("background", "rgba(0, 0, 0, 0.38)")
        }
    });
    $(".carousel").carousel();
    $(".modal").modal();
    body.on("click", function() {
        $(this).css("overflow", "auto")
    });
    up.on("click", function() {
        body.animate({
            scrollTop: -690
        }, 1500)
    });
    $(document).on("scroll", function() {
        var y = $(this).scrollTop();
        if (y > 800) {
            up.css("right", "2%")
        } else {
            up.css("right", "-200px")
        }
    })
});
$(window).on("load", function() {
    $(".preloader").fadeOut(1e3);
    $("body").css("overflow-y", "auto");
    $(".slide-nav-btn").css("right", "2%");
    $(".write").typed({
        strings: [
          "Procesos Ágiles de <br> Desarrollo de Software",
          "Arquitecturas elásticas y <br> escalables de Microservicios",
          "Tecnologías y Herramientas <br> de punta",
          "Modelos de Gestión para <br> Gobierno Digital"],
        typeSpeed: 100,
        loop: true
    });
    $(".typed-cursor").hide()
});
