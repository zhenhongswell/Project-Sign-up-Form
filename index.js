let passwordInput = document.querySelector('#password');
let confirmPasswordInput = document.querySelector('#confirm-password');

passwordInput.addEventListener("input",(event)=>{
    checkPasswordIsConfirmed(passwordInput.value,confirmPasswordInput.value);
})

confirmPasswordInput.addEventListener("input",(event)=>{
    checkPasswordIsConfirmed(passwordInput.value,confirmPasswordInput.value);
})

function checkPasswordIsConfirmed(password,confirmPassword){
    if (password === confirmPassword){
        console.log('password is confirmed!');
        return false
    }else{
        console.log('password is not confirmed');
        return true
    }
}


