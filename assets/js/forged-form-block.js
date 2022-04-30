jQuery(document).ready(function($){
    console.log('loaded');
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
});