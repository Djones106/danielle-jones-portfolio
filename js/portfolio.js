/*var form = document.getElementById('form');

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
const form = document.getElementById('form');

form.addEventListener('submit'), function(event){
    event.preventDefault();

    const username = getElementById('user_name').value;
    console.log(form.username);

    const email = document.getElementById('user_email').value;
    console.log(form.email);

    const message = document.getElementById('msg').value;
    console.log(form.message);

};
*/
/*let input = [];
 Everything listed in form converted to array 

/* Capturing person data the put into form 
const contactForm = (ev) =>{
    ev.preventDefault();
    let form = {
        name: document.getElementById('user_name').value,
        email:  document.getElementById('user_email').value;
        message: document.getElementById('msg').value,
    }
    if 
});

/* Calling the information to display in message 
function myFunction(form){
    document.getElementById('result-msg').innerHTML = `Thank you ${form.name}! Now that I have your email - ${form.email} and have read your message: ${form.message} - I'll be in touch soon.`
for (let i = 0; i < input.length; i += 1){

};

document.addEventListener('click', contactForm);
*/

var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var msg = document.getElementById('msg');
var button = document.getElementById('button');



    button.addEventListener('click', function() => {
        
        var form = {
            name: document.getElementById('userName').value,
            email: document.getElementById('userEmail').value,
            message: document.getElementById('msg').value,
        }
        
        form.innerHTML = `Thank you ${form.name}! Now that I have your email - ${form.email} and have read your message: ${form.message} - I'll be in touch soon.`
        
        return formResult;
        
    });

    
/*
    function myFunction(){
        document.getElementById('result').innerHTML = `Thank you ${form.name}! Now that I have your email - ${form.email} and have read your message: ${form.message} - I'll be in touch soon.`};

        document.getElementById('result') = `Thank you ${form.name}! Now that I have your email - ${form.email} and have read your message: ${form.message} - I'll be in touch soon.`
event.preventDefault();
*/