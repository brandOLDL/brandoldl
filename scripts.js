window.onload = function() {
    $('.nudl-text').addClass('bounceIn');
}

$(document).ready(function() {
  $(".burger-nav").on("click", function() {
    $("header nav ul").toggleClass("open");
    $(".burger-nav").toggleClass("change-bg");
  });
});

$(window).bind('scroll', function() {
  var navHeight = $(window).height() - 50;
  if ($(window).scrollTop() > navHeight) {
    $('.second-nav').addClass('fixed');
    $('.logo').addClass('shrink');
  } else {
    $('.second-nav').removeClass('fixed');
    $('.logo').removeClass('shrink');
  }
});

$(".cta-b").click(function() {
  $('html, body').animate({
    scrollTop: $("#cta").offset().top
  }, 650);
});
$(".introscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#intro").offset().top
  }, 650);
});
$(".contactscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#form").offset().top
  }, 650);
});
$(".cta-2").click(function() {
  $('html, body').animate({
    scrollTop: $("#form").offset().top
  }, 650);
});
$(".proscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#processes").offset().top -50
  }, 650);
});
$(".recscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#sites").offset().top -50
  }, 650);
});
$(".dangerscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#cta").offset().top
  }, 650);
});
$(".reviewscroll").click(function() {
  $('html, body').animate({
    scrollTop: $("#reviewers").offset().top - 100
  }, 650);
});
$(".logo").click(function() {
  $('html, body').animate({
    scrollTop: $('html').offset().top
  }, 650);
});


var $intro = $('.intro');
var $process = $('.pro-up');
var $about = $('.about');
var $exp = $('.exp-dude');
var $reec = $('.recunt');
var $rev = $('.rev-cont');




$intro.waypoint(function() {
  $intro.addClass('fade-in-up');
}, {
  offset: '50%'
});
$process.waypoint(function() {
  $process.addClass('fade-in-up');
}, {
  offset: '50%'
});
$about.waypoint(function() {
  $about.addClass('fade-in-up');
}, {
  offset: '50%'
});
$exp.waypoint(function() {
  $exp.addClass('fade-in-up');
}, {
  offset: '50%'
});
$reec.waypoint(function() {
  $reec.addClass('fade-in-up');
}, {
  offset: '50%'
});
$rev.waypoint(function() {
  $rev.addClass('fade-in-up');
}, {
  offset: '50%'
});


var $coffee = $('.coffee');
$coffee.waypoint(function() {
  $coffee.addClass('rotate');
  $coffee.addClass('op');
}, {
  offset: '50%'
});


var $noodle = $('.noodle');
$noodle.waypoint(function() {
  $noodle.addClass('rotate2');
  $noodle.addClass('op');
}, {
  offset: '50%'
});

var $record = $('.record');
$record.waypoint(function() {
  $record.addClass('movein');
  $record.addClass('op');
}, {
  offset: '50%'
});