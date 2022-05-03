jQuery(document).ready(function($){
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
            var formData = $(this).serialize();
            $.ajax({
                type: 'POST',
                url : forgedFormFrontendObj.ajaxurl,
                data: {
                    formData: formData,
                    nonce: forgedFormFrontendObj.nonce,
                    action: 'submit_forged_contact_form'
                },
                beforeSend: function(){
                    $('.forged-contact-form__group-button').hide();
                }
            })
            .done(function( response ) {
                console.log(response);
                $('.forged-contact-form__group-button').show();
            })
            .fail(function(response){
                console.log(response);
            });
        }
    });
});