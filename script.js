document.getElementById('submit-button').addEventListener('click',function(){

    const userEmailField = document.getElementById('user-email');

    const userEmail = userEmailField.value;

    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    

    if (userEmail == 'shorif@shah.com' && userPassword == 'ShorifVhi') {
        window.location.href = "banking.html"
    }
})