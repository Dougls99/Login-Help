function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fielPassword = document.getElementById('fiel-password');

    if(eye.style.display === 'none') { 
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fielPassword.type = 'text';
    } else{
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fielPassword.type = 'password';
    }
};

document.getElementById('btn-login').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Algo Está Errado !');
});