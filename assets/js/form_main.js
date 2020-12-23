/*global $, document, window, setTimeout, navigator, console, location*/
$(document).ready(function () {
    'use strict';

    var firstnameError = true,
        middlenameError = true,
        lastnameError = true,
        emailError    = true,
        contactError = true,
        years_of_experienceError = true,
        websitelinkError = true,
        patentsError = true

    var name_validation_expression = /^[a-z A-Z]+$/;
    var email_validation_expression = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    var contact_validation_expression = /^[0-9]+$/;

    // Detect browser for css purpose
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        $('.form form label').addClass('fontSwitch');
    }

    // Label effect
    // $('input').focus(function () {
    //     $(this).siblings('label').addClass('active');
    // });

    // Label effect
    $('.focus').focus(function () {
        $(this).siblings('label').addClass('active');
    });

    // Form validation
    $('.focus').blur(function () {
        // First Name
        if ($(this).prop('id')=='f_name') {
            if ($(this).val().trim().length === 0) {
                $(this).siblings('span.error').text('Please type your first name').fadeIn().parent('.form-group').addClass('hasError');
                firstnameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 4) {
                $(this).siblings('span.error').text('Please type at least 4 characters').fadeIn().parent('.form-group').addClass('hasError');
                firstnameError = true;
            } else if ($(this).val().length > 7 && name_validation_expression.test($(this).val())==false) {
                $(this).siblings('span.error').text('Please type name in alphabets only').fadeIn().parent('.form-group').addClass('hasError');
                firstnameError = true;
            }else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                firstnameError = false;
            }
        }
        // Middle Name
        if ($(this).prop('id')=='m_name') {
            if ($(this).val().trim().length === 0) {
                $(this).siblings('span.error').text('Please type your middle name').fadeIn().parent('.form-group').addClass('hasError');
                middlenameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 4) {
                $(this).siblings('span.error').text('Please type at least 4 characters').fadeIn().parent('.form-group').addClass('hasError');
                middlenameError = true;
            } else if ($(this).val().length > 7 && name_validation_expression.test($(this).val())==false) {
                $(this).siblings('span.error').text('Please type name in alphabets only').fadeIn().parent('.form-group').addClass('hasError');
                middlenameError = true;
            }else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                middlenameError = false;
            }
        }
        // Last Name
        if ($(this).prop('id')=='l_name') {
            if ($(this).val().trim().length === 0) {
                $(this).siblings('span.error').text('Please type your last name').fadeIn().parent('.form-group').addClass('hasError');
                lastnameError = true;
            } else if ($(this).val().length > 1 && $(this).val().length <= 4) {
                $(this).siblings('span.error').text('Please type at least 4 characters').fadeIn().parent('.form-group').addClass('hasError');
                lastnameError = true;
            } else if ($(this).val().length > 7 && name_validation_expression.test($(this).val())==false) {
                $(this).siblings('span.error').text('Please type name in alphabets only').fadeIn().parent('.form-group').addClass('hasError');
                lastnameError = true;
            }else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                lastnameError = false;
            }
        }
        // Email
        if ($(this).prop('id')=='email') {
            if ($(this).val().length == '') {
                $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
                emailError = true;
            } else if (email_validation_expression.test($(this).val())==false) {
                $(this).siblings('span.error').text('Please type email in correct format').fadeIn().parent('.form-group').addClass('hasError');
                emailError = true;
            }else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                emailError = false;
            }
        }

        // Contact No.
        if ($(this).prop('id')=='phone') {
            if ($(this).val().length == 0) {
                $(this).siblings('span.error').text('Please enter your contact number').fadeIn().parent('.form-group').addClass('hasError');
                contactError = true;
            } else if (contact_validation_expression.test($(this).val())==false ) {
                $(this).siblings('span.error').text('The contact number should be comprised of only numbers').fadeIn().parent('.form-group').addClass('hasError');
                contactError = true;
            } else if ($(this).val().length < 10) {
                $(this).siblings('span.error').text('Please enter a valid contact number').fadeIn().parent('.form-group').addClass('hasError');
                contactError = true;
            }else {
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                contactError = false;
            }
        }
        // Years of Experience
        if ($(this).prop('id')=='yof') {
            if($(this).val()=="") {
                $(this).siblings('span.error').text('Please enter your years of experience').fadeIn().parent('.form-group').addClass('hasError');
                years_of_experienceError = true;
            } else{
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                years_of_experienceError = false;
            }
        }
        // Website Link
        if ($(this).prop('id')=='wl') {
            if($(this).val()=="") {
                $(this).siblings('span.error').text('Please provide us the website link').fadeIn().parent('.form-group').addClass('hasError');
                websitelinkError = true;
            } else{
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                websitelinkError = false;
            }
        }
        // Number of patents
        if ($(this).prop('id')=='patents') {
            if($(this).val()=="") {
                $(this).siblings('span.error').text('Please provide us with the number of patents').fadeIn().parent('.form-group').addClass('hasError');
                patentsError = true;
            } else{
                $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
                patentsError = false;
            }
        }


        // label effect
        if ($(this).val().length > 0) {
            $(this).siblings('label').addClass('active');
        } else {
            $(this).siblings('label').removeClass('active');
        }
    });


    // form switch
    $('a.switch').click(function (e) {
        $(this).toggleClass('active');
        e.preventDefault();

        if ($('a.switch').hasClass('active')) {
            // $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
            $(this).parents('.form-peice').addClass('switched').siblings('.form-peice').removeClass('switched');
        } else {
            $(this).parents('.form-peice').removeClass('switched').siblings('.form-peice').addClass('switched');
            
        }
    });


    // Form submit
    // $('form.signup-form').submit(function (event) {
    //     event.preventDefault();

    //     if (usernameError == true || emailError == true || passwordError == true || passConfirm == true) {
    //         $('#f_name, #m_name, #l_name, #email, #phone, #yof, #wl, #patents').blur();
    //         if (document.getElementById('exampleFormControlTextarea3').value==""){
    //             alert ()
    //         }

    //     } else {
    //         $('.signup, .login').addClass('switched');

    //         setTimeout(function () { $('.signup, .login').hide(); }, 700);
    //         setTimeout(function () { $('.brand').addClass('active'); }, 300);
    //         setTimeout(function () { $('.heading').addClass('active'); }, 600);
    //         setTimeout(function () { $('.success-msg p').addClass('active'); }, 900);
    //         setTimeout(function () { $('.success-msg a').addClass('active'); }, 1050);
    //         setTimeout(function () { $('.form').hide(); }, 700);
    //     }
    // });

    // Reload page
    $('a.profile').on('click', function () {
        location.reload(true);
    });


});
function viewPassword(){
    var password_type = document.getElementById("password");
    var password_eye = document.getElementById("eye");
    if (password_type.type=='password'){
        password_type.type='text';
        password_eye.className = 'fa fa-eye-slash';
    }else{
        password_type.type='password';
        password_eye.className = 'fa fa-eye';
    }
}