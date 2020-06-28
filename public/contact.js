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
  // const form_data = form.serialize();
  const form = $('form')[0];
  const form_data = new FormData(form);
  const requestId = $('input[name="request"]:checked')[0].id;
  const label = $("label[for='" + requestId + "']").text();

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
        // TODO empty form!
        $notificationSuccess.find('span').text(resJSON.email);
        $notificationSuccess.addClass('visible');
        window.setTimeout(function () {
          $notificationSuccess.removeClass('visible');
        }, 10000)
      } else {
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
      console.log('ERROR', xhr);
      console.log('ERROR', status);
      console.log('ERROR', error);
    })
}