import '../src/app.js';
const $ = require("jquery")

const $form = $('.contact form');
const $notification = $('.notification');
const $notificationSuccess = $('.notification--success');

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

  // Display the key/value pairs
  // for (var pair of form_data.entries()) {
  //   console.log(pair[0] + ', ' + pair[1]);
  // }
  // console.log('SUBMITTING');

  $.ajax({
    type: 'POST',
    url: $form.attr('action'),
    data: form_data,
    processData: false,
    contentType: false
  })
    .done(function (res) {
      let resJSON = JSON.parse(res);
      console.log('RES', resJSON);

      if (resJSON.success) {
        // TODO empty form!
        $notificationSuccess.find('span').text(resJSON.email);
        $notification.addClass('visible');
        window.setTimeout(function () {
          $notification.removeClass('visible');
        }, 10000)
      } else {
        let err = $.parseJSON(res);
        err.forEach(el => {
          console.log('ERROR', el);

          // errorList.append(`<ul>${el}</ul>`);
          // that.errorBox.show();
        })
      }
    })
}