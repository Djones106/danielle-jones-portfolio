
function validateForm(){
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const msg = document.getElementById('msg').value;

    const validEmail = userEmail.includes('@') && userEmail.length > 5;
    const validuserName = userName.length > 5;
    const validMsg = msg.length > 0;

    if (validEmail && validuserName && validMsg) {
        return true
    } else{
        alert('Please check to make sure you have provided a valid email address and your full name with a short message.')
        return false
    }
}
