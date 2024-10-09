// input value variables

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-input');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const buttonGeneral = document.getElementById('general-enquiry-input');
const buttonSupport = document.getElementById('support-enquiry-input');
const messageArea = document.querySelector('textarea');
// const messageLeft = (messageArea.value.length) - 60;
const consentCheckbox = document.getElementById('consent-input');
const submitButton = document.getElementById('submit-button');
const inputContainer = document.getElementsByTagName('input');

//error messages variables

const firstNameError = document.getElementById('errorfirstname');
const lastNameError = document.getElementById('errorlastname');
const emailError = document.getElementById('erroremail');
const queryError = document.getElementById('errorquery');
const messageAreaError = document.getElementById('errormessage');
const consentCheckboxError = document.getElementById('errorconsent');
const submitButtonError = document.getElementById('errorsubmit');
const submitButtonMessage = 'fix all errors'

firstName.addEventListener('focus', function () {
    if (firstName.value.length == 0) {
        firstNameError.innerHTML = 'This field is required';
        inputContainer[0].style.border = '1px solid red';
    } else {
        firstNameError.innerHTML = '';
        inputContainer[0].style.border = "";
    }
    setTimeout(() => {
        inputContainer[0].style.border = '';
        setTimeout(() => {
            firstNameError.innerHTML = '';
        }, 3000);
    }, 3000)
});

lastName.addEventListener('focus', function () {
    if (lastName.value.length == 0) {
        lastNameError.innerHTML = 'This field is required';
        inputContainer[1].style.border = '1px solid red';
    } else {
        lastNameError.innerHTML = '';
        inputContainer[1].style.border = "";
    }
    setTimeout(() => {
        lastNameError.innerHTML = '';
        setTimeout(() => {
            inputContainer[1].style.border = '';
        }, 3000);
    }, 3000);
});

email.addEventListener('focus', function emailValidator() {
    if (email.value.length == 0 || email.value != emailRegex) {
        emailError.innerHTML = 'Enter a valid email';
        inputContainer[2].style.border = '1px solid red';
    } else {
        emailError.innerHTML = '';
        inputContainer[2].style.border = "";
    }
    setTimeout(() => {
        emailError.innerHTML = '';
        setTimeout(() => {
            inputContainer[2].style.border = '';
        }, 3000);
    }, 3000);
});

messageArea.addEventListener('input', () => {
    if (messageArea.value.length < 60) {
        messageAreaError.innerHTML = 'This field requires 60 characters';
        messageArea.style.border = '1px solid red';
    } else {
        messageAreaError.innerHTML = '';
        messageArea.style.border = "";
    }
    setTimeout(() => {
        messageArea.style.border = '';
        setTimeout(() => {
            messageAreaError.innerHTML = '';
        }, 3000);
    }, 3000);
});

submitButton.addEventListener('click', (e) => {
    if (firstName.value.length == 0) {
        submitButtonError.innerHTML = submitButtonMessage
        firstNameError.innerHTML = 'This field is required';
        inputContainer[0].style.border = '1px solid red';
      }
      setTimeout(() => {
          firstNameError.innerHTML = '';
          setTimeout(() => {
              inputContainer[0].style.border = '';
          }, 3000);
          setTimeout(() => {
              submitButtonError.innerHTML = '';
          }, 3000)
      }, 3000);

    if (lastName.value.length == 0) {
        submitButtonError.innerHTML = submitButtonMessage
        lastNameError.innerHTML = 'This field is required';
        inputContainer[1].style.border = '1px solid red';
      }
      setTimeout(() => {
          lastNameError.innerHTML = '';
          setTimeout(() => {
              inputContainer[1].style.border = '';
          }, 3000);
          setTimeout(() => {
              submitButtonError.innerHTML = '';
          }, 3000)
      }, 3000);

    if (email.value.length == 0 || email.value != emailRegex) {
      submitButtonError.innerHTML = submitButtonMessage
      emailError.innerHTML = 'Enter a valid email';
      inputContainer[2].style.border = '1px solid red';
    }
    setTimeout(() => {
        emailError.innerHTML = '';
        setTimeout(() => {
            inputContainer[2].style.border = '';
        }, 3000);
        setTimeout(() => {
            submitButtonError.innerHTML = '';
        }, 3000)
    }, 3000);

    if (messageArea.value.length == 0) {
        submitButtonError.innerHTML = submitButtonMessage
        messageAreaError.innerHTML = 'This field is required';
        messageArea.style.border = '1px solid red';
      }
      setTimeout(() => {
          messageAreaError.innerHTML = '';
          setTimeout(() => {
              messageArea.style.border = '';
          }, 3000);
          setTimeout(() => {
              submitButtonError.innerHTML = '';
          }, 3000)
      }, 3000);

      if (!consentCheckbox.checked) {
        consentCheckboxError.innerHTML = 'To submit this form please consent to being contacted'
        submitButtonError.innerHTML = submitButtonMessage;
      }
      setTimeout(() => {
        consentCheckboxError.innerHTML = ''
        setTimeout(() =>{
            submitButtonError.innerHTML = '';
        }, 3000)
      }, 3000)

    if (!buttonGeneral.checked || !buttonSupport.checked) {
        queryError.innerHTML = 'please select a query type'
        submitButtonError.innerHTML = submitButtonMessage;
    }
    setTimeout(() => {
        queryError.innerHTML = '';
        setTimeout(() => {
            submitButtonError.innerHTML = '';
        }, 3000)
    },3000)
    e.preventDefault()
});