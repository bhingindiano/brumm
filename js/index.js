$(function() {
    var $form = $('#survey_form'),

    submitForm = function(e) {
        var reason = $('[name="reason"]:checked').val(),
            num_of_seats = $('[name="num_of_seats"]:checked').val(),
            budget = $('[name="budget"]').val(),
            importance = $('[name="importance"]:checked').val(),
            considerations = $('[name="considerations"]').val(),
            contact_info = $('[name="contact_info"]').val();

        e.preventDefault();

          var baseURL = 'https://docs.google.com/forms/d/1H0hNXPhzfML1uhMHKrWwpyInXzzzdoyUl549Xy2wHYQ/formResponse?';
          var a = 'entry.1023555150=' + reason;
          var b = 'entry.474233524=' + num_of_seats;
          var c = 'entry.249830821=' + budget;
          var d = 'entry.730655057=' + importance;
          var e = 'entry.705807753=' + considerations;
          var f = 'entry.291980293=' + contact_info;
          var submitRef = 'submit=Submit';
          var submitURL = baseURL + [a, b, c, d, e, f, submitRef].join('&');
          var form = document.createElement('form');
          form.action = submitURL;
          form.method = 'POST';
          form.target = 'no-target';
          form.style.display = 'none';
          form.submit(); // OK
          console.log('Submission succes: ');
          form.remove();
    };

    $form.on('submit', submitForm);
});
