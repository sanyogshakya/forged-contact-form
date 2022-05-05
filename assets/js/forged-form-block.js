jQuery(document).ready(function($){
    "use strict";
    $('body').on('focus', '.forged-contact-form__group-input', function(){
        $(this).closest('.forged-contact-form__group').addClass('in-focus');
    });
    $('body').on('focus', '.forged-contact-form__group-textarea', function(){
        $(this).closest('.forged-contact-form__group').addClass('in-focus');
    });
    $('body').on('focusout', '.forged-contact-form__group-input', function(){
        if($(this).val() === '')
            $(this).closest('.forged-contact-form__group').removeClass('in-focus');
    });
    $('body').on('focusout', '.forged-contact-form__group-textarea', function(){
        if($(this).val() === '')
            $(this).closest('.forged-contact-form__group').removeClass('in-focus');
    });

    $('body').on('submit', '.forged-contact-form', function(e){
        e.preventDefault();
        var name = $(this).find('.forged-contact-form__group-input_name').val().trim();
        var email = $(this).find('.forged-contact-form__group-input_email').val().trim();
        var message = $(this).find('.forged-contact-form__group-input_message').val().trim();
        var emailRegExp = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
        var errorFlag = 0;
        if( name === '' ){
            alert("name field cannot be empty");
            errorFlag = 1;
        }
        if( email === ''){
            alert("email field cannot be empty");
            errorFlag = 1;
        }
        else if(!emailRegExp.test(email)){
            alert("email validation failed");
            errorFlag = 1;
        }
        if( message === '' ) {
            alert("message field cannot be empty");
            errorFlag = 1;
        }
        console.log($(this > '.forged-contact-form__group-button'));
        if( errorFlag === 0 ) {
            var formId = $(this).attr('id');
            var checkmark = $('body #forged-checkmark-svg').drawsvg({
                stagger: 2000, // Break is set to 2 seconds
                duration: 1000
            });
            var forgedForm = document.getElementById(formId);
            var formData = new FormData(forgedForm);
            formData.append('action', 'submit_forged_contact_form');
            formData.append('nonce', forgedFormFrontendObj.nonce);
            $.ajax({
                type: 'POST',
                url : forgedFormFrontendObj.ajaxurl,
                data: formData,
                processData: false,
                contentType: false,
                beforeSend: function(){
                    $('#'+formId + ':submit').attr('disabled', 'disabled');
                    $('.forged-contact-form__group-button').prop('disabled', true);
                    $('#'+formId).parent().addClass('submit-in-progress');
                }
            })
            .done(function( response ) {
                // $('.forged-contact-form__group-button').show();
                console.log(formId);
                $('#'+formId).parent().removeClass('submit-in-progress');
                $('#'+formId).parent().addClass('submit-complete');
                checkmark.drawsvg('animate');
            })
            .fail(function(response){
                console.log(response);
            });
        }
    });
});