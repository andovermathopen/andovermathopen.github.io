$(document).ready(function() {
  if ($(window).width() < 736) {
    $("#horizontal").removeClass("horizontal");
  }
})

$(window).resize(function () {
  if ($(window).width() < 736) {
    $("#horizontal").removeClass("horizontal");
  } else {
    $("#horizontal").addClass("horizontal");
  }
})

// var start1 = 1602280800000;  // oct 9, 6:00 pm est
// var start2 = 1602280800000;
// var start3 = 1602280800000;

var start1 = 1602342900000;  // oct 10, 11:15 am est
var start2 = 1602346500000;  // oct 10, 12:15 pm est
var start3 = 1602360000000;  // oct 10, 4:00 pm est

function getServerTime() {
  return $.ajax();
}

getServerTime().then(function (output, status, xhr) {
  const current = new Date(xhr.getResponseHeader( "Date" )).getTime();

  setButtons(current, start1, "button1", "link1", "General Round", url1);
  setButtons(current, start2, "button2", "link2", "Theme Round", url2);
  setButtons(current, start3, "button3", "link3", "Gunga Bowl", url3);
});

function setButtons(current, start, button, link, round_name, url) {
  var distance = start - current;

  var clock = setInterval(function () {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(button).innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";

    distance -= 1000;
  }, 1000);

  setTimeout(function () {
    document.getElementById(link).setAttribute("href", url);
    document.getElementById(link).classList.remove("disabled");
    clearInterval(clock);
    document.getElementById(button).removeAttribute("disabled");
    document.getElementById(button).innerHTML = round_name;
  }, distance);
}
