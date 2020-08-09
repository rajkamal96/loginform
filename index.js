//Listen to form submit
document.getElementById('login-form').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    //get values
    var name = getInputVal('name');
    var email = getInputVal('email');

    //show alert
    document.querySelector('.alert').style.display = 'block';

    //hide after 5 secs
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },5000);

    //clear form
    document.getElementById('login-form').reset();
}

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}