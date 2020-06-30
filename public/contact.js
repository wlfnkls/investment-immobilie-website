import '../src/app.js';
const $ = require("jquery")

const debugging = false;

const $form = $('.contact form');
const $notification = $('.notification');
const $notificationSuccess = $('.notification--success');
const $notificationError = $('.notification--error');

// const dsgvo = $form.find('input[name="dsgvo"]');
// const submitBtn = $form.find('input[type="submit"]');
// const requiredFields = $(':input[required]');

$form.submit(function (event) {
  event.preventDefault();
  submitForm();
});

function submitForm() {
  const $lodaingAnimation = $('.loading');
  const form = $('form')[0];
  const form_data = new FormData(form);
  const requestId = $('input[name="request"]:checked')[0].id;
  const label = $("label[for='" + requestId + "']").text();

  $lodaingAnimation.addClass('active');
  form_data.append('request', label);
  form_data.append('dsgvo_accepted', document.getElementById("dsgvo").checked);

  if (debugging) {
    // Display the key / value pairs
    for (var pair of form_data.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    console.log('SUBMITTING');
  }

  $.ajax({
    type: 'POST',
    url: $form.attr('action'),
    data: form_data,
    processData: false,
    contentType: false
  })
    .done(function (res) {
      let resJSON = JSON.parse(res);

      if (debugging) console.log('RES', resJSON);

      if (resJSON.success) {
        $lodaingAnimation.removeClass('active');
        $('form')[0].reset();
        window.scrollTo(0, 0);
        $notificationSuccess.find('span').text(resJSON.email);
        $notificationSuccess.addClass('visible');
        window.setTimeout(function () {
          $notificationSuccess.removeClass('visible');
        }, 10000)
      } else {
        $lodaingAnimation.removeClass('active');
        resJSON.error.forEach(el => {
          console.log('ERROR', el);

          $notificationError.find('.container ul').append(`<li>${el}</li>`);
          $notificationError.addClass('visible');

          window.setTimeout(function () {
            $notificationError.removeClass('visible');
            $notificationError.find('.container ul').empty();
          }, 10000)
        })
      }
    })
    .fail(function (xhr, status, error) {
      $lodaingAnimation.removeClass('active');
      console.error('ERROR', xhr);
      console.error('ERROR', status);
      console.error('ERROR', error);
      $notificationError.find('.container ul').append(`<li><strong>${xhr.status}</strong>: ${error}</li>`);
      window.scrollTo(0, 0);
      $notificationError.addClass('visible');

      window.setTimeout(function () {
        $notificationError.removeClass('visible');
        $notificationError.find('.container ul').empty();
      }, 10000)
    })
}