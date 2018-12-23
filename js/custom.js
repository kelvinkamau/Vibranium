/*====================================================*/
/*  CHRISTMAS TEXT EFFECTS                            */
/*====================================================*/

function christmas(){
  var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };

  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 300 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function() {
      that.tick();
    }, delta);
  };

  date = new Date();
  if(date.getMonth() == 11 && date.getDate() > 15 && date.getDate() <= 31){
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
    console.log("Season greetings:)");
    document.getElementById("christmaslights").classList.add("lightrope");
    document.getElementById("christmaslights").classList.remove("hidden");
  }
}
window.onload = function() {
  christmas();
};
// END OF CHRISTMAS TEXT EFFECTS


$(window).on('load', function() {
  'use strict';
  $('#loading').addClass('hidden');
});

var $iframe = $('iframe'),
    src = $iframe.data('src');

if (window.matchMedia("(min-width: 720px)").matches) {
    $iframe.attr('src', src);
}else{
    $iframe.css('display', 'none');
}

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

(function($) {
  'use strict';

  /*====================================================*/
  /* VARIABLES                                           */
  /*====================================================*/
  var navBar = $('.custom-menu'),
    navbarLinks = $('.custom-menu .nav-link');

  /*====================================================*/
  /* STICKY NAVBAR                                      */
  /*====================================================*/
  $(window).on('scroll', function() {
    if ($(this).scrollTop() > 50) {
      $(navBar).addClass('navbar-is-sticky');
    } else {
      $(navBar).removeClass('navbar-is-sticky');
    }
  });

  $('.navbar-toggler').on('click', function(e) {
    $(this).toggleClass('menu-is-expanded');
  });

  $(document).on('click', '.navbar-collapse.show', function(e) {
    if ($(e.target).is('a')) {
      $(this).collapse('hide');
      $('.navbar-toggler').toggleClass('menu-is-expanded');
      // $('.Menu-Icon--Circle').css('transform', 'translateX(-50%) translateY(-50%) scale(1)');
    }
  });

  /*====================================================*/
  /* NAVBAR ON SCROLL EASING                            */
  /*====================================================*/
  $(navbarLinks).on('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });

  /*====================================================*/
  /* team SLIDER                                 */
  /*====================================================*/


  var $ClientsSlider = $('.team-slider');
  if ($ClientsSlider.length > 0) {
    $ClientsSlider.owlCarousel({
      loop: true,
      center: true,
      margin: 0,
      items: 1,
      nav: false,
      dots: true,
      lazyLoad: true,
      dotsContainer: '.dots'
    })
    $('.owl-dot').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active');
      $ClientsSlider.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
  }

  var swiper = new Swiper('.screen-slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 1,
    parallax: true,
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /*====================================================*/
  /* TABS INIT                                   */
  /*====================================================*/
  $('.js-tabs a').on('click', function(e) {
    e.preventDefault();
    $(this).tab('show');
  });

  /*====================================================*/
  /* TOOLTIPS                                           */
  /*====================================================*/
  $('[data-toggle="tooltip"]').tooltip();

  /*====================================================*/
  /* VIDEO MODALS                                           */
  /*====================================================*/

  $('.js-video-modal-trigger').magnificPopup({
    type: 'iframe',
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: function(url) {
            var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
            if (!m || !m[1]) return null;
            return m[1];
          },
          src: '//www.youtube.com/embed/%id%?autoplay=1'
        },
        vimeo: {
          index: 'vimeo.com/',
          id: function(url) {
            var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
            if (!m || !m[5]) return null;
            return m[5];
          },
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      }
    }
  });

})(jQuery);