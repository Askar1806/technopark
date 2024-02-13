// burger-menu
$(document).ready(function () {
  $(".burger-open").click(function () {
    $(".burger").stop().slideToggle();
  });

  $(".burger-close").click(function () {
    $(".burger").stop().slideUp();
  });
});

// swiper
$(document).ready(function () {
  var mySwiper = new Swiper(".product__slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        var index = this.activeIndex;
        var width = 100 / 4;
        $(".swiper-progress-bar-active")
          .css("width", width + "%")
          .css("left", index * width + "%");
      },
    },
  });
});

// scale
$(document).ready(function () {
  var value = $(".product-descr__scale-indicator").text();
  var percentage = Math.min(Math.max(value, 1), 100);
  $(".product-descr__scale-progress").width(percentage + "%");
});

// timer
$(document).ready(function () {
  var totalTime = 24 * 60 * 60;

  function updateTimer() {
    totalTime--;
    var hours = Math.floor(totalTime / 3600);
    var minutes = Math.floor((totalTime % 3600) / 60);
    var seconds = totalTime % 60;

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    $("#timer").text(hours + ":" + minutes + ":" + seconds);

    if (totalTime <= 0) {
      clearInterval(timerInterval);
      $("#timer").text("00:00:00");
    }
  }

  var timerInterval = setInterval(updateTimer, 1000);
});

// accordion
$(document).ready(function () {
  $('.product-shipping__button').click(function () {
    $('.product-shipping__accordion').slideToggle();

    $(this).toggleClass('rotated');
  });
});

// payment-window
$(document).ready(function() {
  $('.product-descr__button').on('click', function() {
      $('.payment').css('display', 'block');
  });

  $('.payment__button-close').on('click', function() {
      $('.payment').css('display', 'none');
  });
});

// read less (footer)
$(document).ready(function() {
  $('.footer__button.less').click(function() {
    $('.footer__text').addClass('collapsed');
    $(this).hide();
    $('.footer__button.more').css('display', 'block');
  });

  $('.footer__button.more').click(function() {
    $('.footer__text').removeClass('collapsed');
    $(this).hide();
    $('.footer__button.less').show();
  });
});