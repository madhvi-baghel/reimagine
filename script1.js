

document.addEventListener('DOMContentLoaded', function() {
const modelOverlay = document.querySelector(".model_overlay");
const modalBox = document.querySelector(".modal-box");
const close = document.querySelector(".close");
const submitButton = document.querySelector(".submit-button");
const usernameError = document.querySelector("#username-error");
const passwordError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const charError = document.querySelector(".error-img");
const charDefault = document.querySelector(".default-img");
const loginButton = document.querySelector(".login");
const signupButton = document.querySelector(".signup");
const loginModal = document.querySelector(".login-overlay");
const closeLogin = document.querySelector(".close-login");
const signupModal = document.querySelector(".signup-overlay");
// const closeSignup = document.querySelector(".close-signup");
const closeIcon = document.querySelector('.close-signup');

let usernameInput = document.querySelector(".username-input");
let emailInput = document.querySelector(".email-input");
let passwordInput = document.querySelector(".password-input");

// window.onload = () => {
    let e = gsap.timeline();
    // Animation setup for login modal
    e.from(loginModal, {
        duration: 0.5,
        backgroundColor: "rgba(0,0,0,0)",
        ease: "expo.out"
    })
   .from(".login-outer-box", {
        duration: 0.5,
        scaleY: 0,
        ease: "expo.out"
    })
   .from(".fade-animation", {
        duration: 0.5,
        opacity: 0,
        ease: "power4.out"
    })
   .from(".chibi-container", {
        duration: 1,
        yPercent: 100,
        ease: "power4.out"
    }, 1.3);

    closeLogin.onclick = () => {
        e.reverse();
    };
    // closeIcon.onclick = function() {
    //     console.log('Close icon clicked');
    
    // };

    function updateSubmit() {
        if (usernameInput.value.length > 0 && passwordInput.value.length > 0 && emailInput.value.length > 0) {
            submitButton.classList.add("active");
        } else {
            submitButton.classList.remove("active");
        }
    }

    function handleBlur(input, errorElement, errorMessage) {
        if (input.value.length > 0) {
            errorElement.innerText = "";
            charError.classList.remove("active");
            charDefault.classList.add("active");
        } else {
            errorElement.innerText = errorMessage;
            submitButton.disabled = true;
            charError.classList.add("active");
            charDefault.classList.remove("active");
        }
        updateSubmit();
    }

    usernameInput.onblur = () => handleBlur(usernameInput, usernameError, "Account cannot be empty");
    passwordInput.onblur = () => handleBlur(passwordInput, passwordError, "Password cannot be empty");
    emailInput.onblur = () => handleBlur(emailInput, emailError, "Email cannot be empty");

    let el = gsap.timeline();
    // Animation setup for signup modal
    el.from(signupModal, {
        duration: 0.5,
        backgroundColor: "rgba(0,0,0,0)",
        ease: "expo.out"
    })
   .from(".signup-outer-box", {
        duration: 0.5,
        scaleY: 0,
        ease: "expo.out"
    })
   .from(".fade-animation", {
        duration: 0.5,
        opacity: 0,
        ease: "power4.out"
    })
   .from(".chibi-container", {
        duration: 1,
        yPercent: 100,
        ease: "power4.out"
    }, 1.3);
// };
});

