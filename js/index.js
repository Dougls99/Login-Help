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

let msgErro = document.querySelector('#msgErro')
let msgSucesso = document.querySelector('#msgSucesso')

function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fielPassword = document.getElementById('fiel-password');

    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fielPassword.type = 'text';
    } else {
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

    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.style.display = 'none';
        fielPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
        fielPassword.type = 'password';
    }
};

/*Esconder senha 2*/

function cadastrar() {

    if (validnome && validemail && validsenha && validconfirmsenha) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            { nomeCad: nome.value,
              emailCad: email.value,
              senhaCad: senha.value
            }
        )
        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        Sucesso.setAttribute('style', 'display: block')
        Msgerro.setAttribute('style', 'display: none')
        setTimeout(()=>{ window.history.back() },2000);
    } else {
        Sucesso.setAttribute('style', 'display: none')
        Msgerro.setAttribute('style', 'display: block')
    }

    console.log(`
        validnome=${validnome}\n
        validemail=${validemail}\n
        validsenha=${validsenha}\n
        validconfirmsenha=${validconfirmsenha}
    `);
}

/* Botao cadastrar */

nome.addEventListener('keyup', () => {

    if (nome.value.length <= 2) {
        nome.setAttribute('style', 'background-color: red;')
        labelnome.innerHTML = 'Insira no minimo 3 caracteres'
        validnome = false
    } else {
        nome.setAttribute('style', 'background-color: greenyellow;')
        labelnome.innerHTML = 'Nome:'
        validnome = true
    }
})
/* Valida??ao do Nome*/

email.addEventListener('keyup', () => {

    if (email.value == "" ||
        email.value.indexOf('@') == -1 ||
        email.value.indexOf('.') == -1 ||
        email.value.indexOf('.com') == -1 ||
        email.value.indexOf('hotmail') == -1 &&
        email.value.indexOf('gmail') == -1 &&
        email.value.indexOf('outlook') == -1
    ) {
        email.setAttribute('style', 'background-color: red;')
        labelemail.innerHTML = 'Email invalido'
        validemail = false
    } else {
        email.setAttribute('style', 'background-color: greenyellow;')
        labelemail.innerHTML = 'Email:'
        validemail = true
    }
})

/* Valida????o do email */

senha.addEventListener('keyup', () => {

    if (senha.value.length <= 5) {
        senha.setAttribute('style', 'background-color: red;')
        labelsenha.innerHTML = 'senha invalida'
        validsenha = false

    } else {
        senha.setAttribute('style', 'background-color: greenyellow;')
        labelsenha.innerHTML = 'Senha:'
        validsenha = true
    }
})
/* Valida????o Senha */

confirmsenha.addEventListener('keyup', () => {

    if (senha.value != confirmsenha.value ||
        confirmsenha.value.length <= 5) {
        confirmsenha.setAttribute('style', 'background-color: red;')
        labelconfirmsenha.innerHTML = 'As Senhas n??o Conferem'
        validconfirmsenha = false
    } else {
        confirmsenha.setAttribute('style', 'background-color: greenyellow;')
        labelconfirmsenha.innerHTML = 'Confirme Senha:'
        validconfirmsenha = true
    }
})
/*corfirma??ao da senha*/
function entrar(){
    let emailLogin = document.querySelector('#emailLogin')
    let senhaLogin = document.querySelector('#fiel-password')
    let listaUser = []
    let userValid = { nome: 'null', email:'null', senha:'null'}

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
        if(emailLogin.value == item.emailCad && senha.value == item.senhaCad ){

            userValid = {
                nome: item.nomeCad,
                email: item.emailCad,
                senha: item.senhaCad
          }
        }
    });
    
    if(emailLogin.value == userValid.email && 
        senhaLogin.value == userValid.senha != []){
        window.location.href = 'cobrinha.html'
    } else{
        msgErro.setAttribute('style', 'display: block')
        emailLogin.focus()      
    }
}
//Jogo da cobrinha
window.onload = function(){//p??gina vai carregar e tudo vai come??ar
            
    var stage = document.getElementById('stage');//declarar nosso palco
    var ctx = stage.getContext("2d");//context, Id que eu defini em cima, parte gr??fica que vai aparecer no jogo, desenhos
    document.addEventListener("keydown", keyPush);//esperando por um evento, (cobra), dispara a fun????o keypush
    setInterval(game, 80); //chamando uma fun????o no nosso jogo em milisegundos, velocidade, quando maior mais lento a cobra

    const vel = 1;//quantas casas ela vai andar cada vez que a l??gica passar por dentro

    var vx = vy = 0;//come??a com velocidade zero
    var px = 10;//vamos come??ar nesse ponto sempre
    var py = 15;
    var tp = 30;//cada quadradinho tem 20x20, tp ?? tamanho da pe??a
    var qp = 20;//quantidade de pe??as no tabuleiro, qp ?? quantidade de pe??a
    var ax=ay=15;//posi????o inicial do ponto vermelho (apple), applex e appley

    var trail = [];//rastro, vai come??ar com o array vazio, elementos que tenho no rastro da cobra (trail ?? rastro)
    tail = 5;//tamanho da calda da cobra

    function game(){ //cada vez que a cobra andar um pouco eu tenho que pintar toda a tela de novo
        px += vx;//posi????o da cabe??a da cobra, posi????o que ela est??, mais a velocidade x
        py += vy;

        //se a cobra chega no final do tabuleiro, ela aparece no outro lado (todas as posi????es)
        if (px < 0) {//se ela chega na borda, ela tem que ir para o final do palco
            px = qp-1;//qp ?? quantidade de pe??as
        }
        if (px > qp-1) {
            px = 0;
        }
        if (py < 0) {
            py = qp-1;
        }
        if (py > qp-1) {
            py = 0;
        }
        //vamos colocar cor em tudo!
        ctx.fillStyle = "black"; //qual o estilo de preenchimento do palco (context)
        ctx.fillRect(0,0, stage.width, stage.height); //vai pintar nosso palco, come??o do stage (palco)

        ctx.fillStyle = "red";//pintar o lugar onde fica a ma??a
        ctx.fillRect(ax*tp, ay*tp, tp,tp);//posi????es que eu quero pintar, tp tamanho da pe??a

        ctx.fillStyle = "gray";//pintar a cobra e rastro dela, vai mudar um pouco pelo rastro dela!
        for (var i = 0; i < trail.length; i++) {//px e py ?? sempre o tamanho da cabe??a da cobra
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);//tp-1 para dar um efeito de espa??o entre os quadradinhos
            //verifica????o, se a cabe??a bater em alguma parte do rabo, tem que dar game over
            if (trail[i].x == px && trail[i].y == py)//se px e py baterem em alguma parte do rastro, ent??o game over
            {
                vx = vy=0;//game over, as velocidades s??o zero, parar a cobra
                tail =5;//quando bater na calda ele volta a ser 5 que ?? o inicial
            }
        }

        trail.push({x:px, y:py })//se ela n??o bateu nela mesma, ent??o ela vai se movimentar
        while (trail.length > tail) {//rastro maior que o tamanho da calda, ent??o
            trail.shift();//tira o primeiro elemento do array
        }

        if (ax==px && ay==py){//se a posi????o da ma???? for igual a posi????o da cobra
            tail++;//colocar mais um elemento na calda
            ax = Math.floor(Math.random()*qp);//reposicionar a ma???? para outro lugar do tabuleiro
            ay = Math.floor(Math.random()*qp);//
        }
    }
    function keyPush(event){//definir a nossa motimenta????o, como controlar a cobra

        switch (event.keyCode) {//qual tecla foi pressionada, c??digo do meu evento
            case 37: // Left
                vx = -vel;//de uma em uma casa a velocidade de vel
                vy = 0;
                break;
            case 38: // up (subir velocidade negativa, e subir positiva)
                vx = 0;
                vy = -vel;
                break;
            case 39: // right
                vx = vel;
                vy = 0;
                break;
            case 40: // down
                vx = 0;
                vy = vel;
                break;          
            default:
                break;
        }
    }

}