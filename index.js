const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');
const passwordErrorMessage = document.querySelector('.sign-up-form-password-error-message');

passwordInput.addEventListener("input",(event)=>{
    if (checkPasswordIsConfirmed(passwordInput.value,confirmPasswordInput.value) === false){
        passwordErrorMessage.style.visibility = "visible";
    }else{
        passwordErrorMessage.style.visibility = "hidden";
    }
})

confirmPasswordInput.addEventListener("input",(event)=>{
    if (checkPasswordIsConfirmed(passwordInput.value,confirmPasswordInput.value) === false){
        passwordErrorMessage.style.visibility = "visible";
    }else{
        passwordErrorMessage.style.visibility = "hidden";
    }
})

function checkPasswordIsConfirmed(password,confirmPassword){
    if (password === confirmPassword){
        // console.log('password is confirmed!');
        return true;
    }else{
        // console.log('password is not confirmed');
        return false;
    }
}