function getServerTime() {
  return $.ajax();
}

function queue() {
  $('input[type="number"]').prop('readonly', true);
  $('input[type="number"]').each(function(index) {
    if (!$(this)[0].validity.valid) {
      $(this).val(null);
    }
  });
  $('#button-submit').prop('disabled', true);
  $('#queue').html('Your submission is now queued. It will be submitted in: '
    + '<span id="timer2"></span>. PLEASE DO NOT CLOSE OR RELOAD THE PAGE, OR '
    + 'YOU WILL LOSE YOUR ANSWERS.')
  var wait = Math.random() * 1000 * 60 * 2;

  setTimeout(function () {
    $('#form-submit').submit();
  }, wait);

  setInterval(function () {
    var minutes = Math.floor((wait % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((wait % (1000 * 60)) / 1000);

    $('#timer2').html(minutes + 'm ' + seconds + 's');

    if (wait > 0) {
      wait -= 1000;
    }
  }, 1000);
  submitNow = true;
}

getServerTime().then(function (output, status, xhr) {
  const current = new Date(xhr.getResponseHeader( 'Date' )).getTime();
  var distance = end - current;
  submitNow = false;

  setTimeout(function () {
    queue();
  }, distance);

  setInterval(function () {
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $('#timer').html(minutes + 'm ' + seconds + 's');

    if (distance > 0) {
      distance -= 1000;
    }
  }, 1000);

  $('#form-submit').submit(function(event) {
    if (!submitNow) {
      event.preventDefault();
      queue();
    }
  });
});
