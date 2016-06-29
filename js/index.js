$(function() {
    var $form = $('#survey_form'),

    submitForm = function(e) {
        var baseURL = 'https://docs.google.com/forms/d/1H0hNXPhzfML1uhMHKrWwpyInXzzzdoyUl549Xy2wHYQ/formResponse?',
            a = 'entry.1023555150=' + $('[name="reason"]:checked').val(),
            b = 'entry.474233524=' + $('[name="num_of_seats"]:checked').val(),
            c = 'entry.249830821=' + $('[name="budget"]').val(),
            d = 'entry.730655057=' + $('[name="importance"]:checked').val(),
            e = 'entry.705807753=' + $('[name="considerations"]').val(),
            f = 'entry.291980293=' + $('[name="contact_info"]').val(),
            submitRef = 'submit=Submit',
            submitURL = baseURL + [a, b, c, d, e, f, submitRef].join('&'),
            form = document.createElement('form');

        e.preventDefault();

        form.action = submitURL;
        form.method = 'POST';
        form.target = 'no-target';
        form.style.display = 'none';
        form.submit(); // OK
        form.remove();

        console.log('Submission succes!');
    };

    $form.on('submit', submitForm);
});
