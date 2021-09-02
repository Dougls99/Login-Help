let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
let validnome = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
let validemail = false

let senha = document.querySelector('#fiel-password')
let labelsenha = document.querySelector('#labelsenha')
let validsenha = false

let confirmsenha = document.querySelector('#fiel-password2')
let labelconfirmsenha = document.querySelector('#labelconfirmsenha')
let validconfirmsenha = false

let Msgerro = document.querySelector('#Msgerro')
let Sucesso = document.querySelector('#Sucesso')

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
    if(validnome && validemail && validsenha && validconfirmsenha){

        window.history.back()
        Sucesso.setAttribute('style', 'display: block')
        Msgerro.setAttribute('style', 'display: none')
           
    }else{
        Msgerro.setAttribute('style', 'display: block')
        Sucesso.setAttribute('style', 'display: none')
        
    }

    console.log (`
        validnome=${validnome}\n
        validemail=${validemail}\n
        validsenha=${validsenha}\n
        validconfirmsenha=${validconfirmsenha}
    `);
}

/* Botao cadastrar */

nome.addEventListener('keyup', () => {
    
    if(nome.value.length <= 2 ){
        nome.setAttribute('style', 'background-color: red;')
        labelnome.innerHTML='Insira no minimo 3 caracteres'
        validnome = false
    } else {
        nome.setAttribute('style', 'background-color: greenyellow;')
        labelnome.innerHTML='Nome:'
        validnome = true
    }
})
/* Validaçao do Nome*/

email.addEventListener('keyup', () => {
    
    if(email.value == "" ||
       email.value.indexOf('@')==-1 ||
       email.value.indexOf('.')==-1 ||
       email.value.indexOf('.com')==-1 ||
       email.value.indexOf('hotmail')==-1 &&
       email.value.indexOf('gmail')==-1 &&
       email.value.indexOf('outlook')==-1 
       ){
        email.setAttribute('style', 'background-color: red;')
        labelemail.innerHTML='Email invalido'
        validemail = false
    } else {
        email.setAttribute('style', 'background-color: greenyellow;')
        labelemail.innerHTML='Email:'
        validemail = true
    }
})

/* Validação do email */

senha.addEventListener('keyup', () => {
    
    if(senha.value.length <= 5 ){
        senha.setAttribute('style', 'background-color: red;')
        labelsenha.innerHTML='senha invalida'
        validsenha = false
       
    } else {
        senha.setAttribute('style', 'background-color: greenyellow;')
        labelsenha.innerHTML='Senha:'
        validsenha = true
    }
})
/* Validação Senha */

confirmsenha.addEventListener('keyup', () => {
    
    if(senha.value != confirmsenha.value ||
        confirmsenha.value.length <=5 ){
        confirmsenha.setAttribute('style', 'background-color: red;')
        labelconfirmsenha.innerHTML='As Senhas não Conferem'
        validconfirmsenha = false
    } else {
        confirmsenha.setAttribute('style', 'background-color: greenyellow;')
        labelconfirmsenha.innerHTML='Confirme Senha:'
        validconfirmsenha = true
    }
})
/*corfirmaçao da senha*/