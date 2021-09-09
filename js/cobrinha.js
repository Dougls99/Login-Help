window.onload = function(){
            
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 80); 

    const vel = 1;//quantas casas ela vai andar 

    var vx = vy = 0;//começa com velocidade zero
    var px = 10;//vamos começar nesse ponto sempre
    var py = 15;
    var tp = 30;//tp é tamanho da peça
    var qp = 20;//qp é quantidade de peça
    var ax=ay=15;//posição inicial do ponto vermelho

    var trail = [];//rastro da cobra 
    tail = 5;//tamanho da calda da cobra

    function game(){ //cada vez que a cobra andar um pouco eu tenho que pintar toda a tela de novo
        px += vx;//posição da cabeça da cobra, posição que ela está, mais a velocidade x
        py += vy;

        //se a cobra chega no final do tabuleiro, ela aparece no outro lado (todas as posições)
        if (px < 0) {//se ela chega na borda, ela tem que ir para o final do palco
            px = qp-1;
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

        ctx.fillStyle = "black"; //qual o estilo de preenchimento do palco 

        ctx.fillRect(0,0, stage.width, stage.height); //vai pintar nosso palco, começo do stage 

        ctx.fillStyle = "red";//pintar o lugar onde fica a maça

        ctx.fillRect(ax*tp, ay*tp, tp,tp);//posições que eu quero pintar, tp tamanho da peça

        ctx.fillStyle = "gray";//pintar a cobra e rastro dela, vai mudar um pouco pelo rastro dela!

        for (var i = 0; i < trail.length; i++) {//px e py é sempre o tamanho da cabeça da cobra

            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);//tp-1 para dar um efeito de espaço entre os quadradinhos
           
            if (trail[i].x == px && trail[i].y == py)//se px e py baterem em alguma parte do rastro, então game over
            {
                vx = vy=0;//game over, as velocidades são zero, parar a cobra
                tail =5;//quando bater na calda ele volta a ser 5 que é o inicial
            }
        }

        trail.push({x:px, y:py })//se ela não bateu nela mesma, então ela vai se movimentar

        while (trail.length > tail) {//rastro maior que o tamanho da calda, então
            trail.shift();//tira o primeiro elemento do array
        }

        if (ax==px && ay==py){//se a posição da maçã for igual a posição da cobra
            tail++;//almentar 
            ax = Math.floor(Math.random()*qp);//Posição da maçã 
            ay = Math.floor(Math.random()*qp);
        }
    }
    function keyPush(event){//motimentação da cobra

        switch (event.keyCode) {

            case 37: // Para Esquerda
                vx = -vel;
                vy = 0;
                break;
            case 38: // Para cima
                vx = 0;
                vy = -vel;
                break;

            case 39: // Para a Direita
                vx = vel;
                vy = 0;
                break;
            
            case 40: // Para baixo 
                vx = 0;
                vy = vel;
                break;          
            
                default:
                break;
        }
    }

}