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

/*Esconder senha 1*/ 

function showPassword2() {
    const eye = document.getElementById('eye2');
    const eyeSlash = document.getElementById('eye-slash2');
    const fielPassword = document.getElementById('fiel-password2');

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

/*Esconder senha 2*/ 

function cadastrar(){
    alert('Botao clicado')
}

let nome = document.getElementById('#nome')
let email = document.getElementById('#email')
let senha = document.getElementById('#fiel-password')
let confirmsenha = document.getElementById('#fiel-password2')

nome.addEventListener('keyup', ()=> {
    
    if(nome.Value.length <= 2){
        nome.setAttribute('style', 'background-color: greenyellow;')

    } else {

    }
})
