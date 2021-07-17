var form = document.getElementById('form');

form.addEventListener('sumbit), function(event) => {
    event.preventDefault();

    var username = document.getElementById('name').value;
        console.log('name');
    
    var email = document.getElementById('email').value;
        console.log('email');

    request.open('post', 'result.html');
}

function myFunction(){
    document.getElementById("result-msg").innerHTML = "Thank you `${name}`! Now that I have your email - `${email}` and have read your message: `${message}` - I'll be in touch soon."
}