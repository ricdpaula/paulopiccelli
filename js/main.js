$(document).ready(function () {
  $("a.scrollLink").click(function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 150,
      },
      800
    );
  });
  $(".carousel").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: false,
    autoplaySpeed: 3000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});

// Timer
var countDownDate = new Date("May 20, 2021 20:00:00").getTime();

var x = setInterval(function () {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  var divTime = ' : '

  document.getElementById("timer").innerHTML =
    days + "d" + divTime + hours + "h" + divTime + minutes + "m" + divTime + seconds + "s";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "0d : 0h : 0m : 0s";
  }
}, 1000);
