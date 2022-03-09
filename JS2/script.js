let jogadaUsuario =0;
let jogadaPC=0;
let fimDeJogo = 0;
let pontuacao=0;
let pontuacaoFinal =0;

function main(){
    console.log("Escolha sua jogada:");
    console.log("1 - Papel");
    console.log("2 - Pedra");
    console.log("3 - Tesoura");

    jogadaUsuario = parseInt(prompt()) //Faz a leitura da entrada;
    
    if(checarJogada(jogadaUsuario)){ // Checa se a jogada do usuário é válida 
        jogadaPC=gerarJogada();
        converteJogada(jogadaUsuario,jogadaPC); //Gera a jogada do PC e faz a comparação
    }else{
        derrota(pontuacaoFinal);
        fimDeJogo=1;
        return fimDeJogo;
    }
}

function checarJogada(jogada){ //Verifica se é uma jogada válida
    if (jogada>0 && jogada <4){
        return jogada;
    }else{
        fimDeJogo=1;
        return 0;
    }
}

function gerarJogada(){
    return Math.floor(Math.random() * 3 + 1);//Gera um inteiro aleatório entre 1 e 3
}


function pedra(jogadaUsuario){
    switch(jogadaUsuario){
        case 3:                               //Usuário jogou tesoura e o PC jogou pedra
            derrota(pontuacao);
            return pontuacao;
            break;
        case 1:                             //Usuário jogou papel e o PC jogou pedra
            console.log("Você ganhou!");    
            pontuacao++;
            return pontuacao;
            break;
        default:
            console.log("A rodada empatou"); //Ambos jogaram pedra
            return pontuacao;
    }   
}

function papel(jogadaUsuario){
    switch(jogadaUsuario){
        case 2:                 //Usuário jogou pedra e o PC jogou papel
            derrota(pontuacao);
            return pontuacao;
            break;
        case 3:                 //Usuário jogou tesoura e o PC jogou papel
            console.log("Você ganhou!");
            pontuacao++;
            return pontuacao;
            break;
        default:                //Ambos jogaram papel
            console.log("A rodada empatou");
            return pontuacao;
    }
}

function tesoura(jogadaUsuario){
    switch(jogadaUsuario){
        case 1:                           //Usuário jogou papel e o PC jogou tesoura 
            derrota(pontuacao);
            return pontuacao;
            break;
        case 2:                            //Usuário jogou pedra e o PC jogou tesoura
            console.log("Você ganhou!");
            pontuacao++;
            return pontuacao;
            break;
        default:                            //Ambos jogaram tesoura
            console.log("A rodada empatou");
            return pontuacao;
    }
}


function converteJogada(jogadaUsuario, jogadaPC){ //Funcao para escrever qual foi a jogada do computador e fazer as comparaçoes da jogada do PC com as jogadas do usuário
    switch(jogadaPC){
        case 1:
            console.log("O computador jogou Papel");
            pontuacaoFinal= papel(jogadaUsuario);
            break;
        case 2:
            console.log("O computador jogou Pedra");
            pontuacaoFinal= pedra(jogadaUsuario);
            break;
        case 3:
            console.log("O computador jogou Tesoura");
            pontuacaoFinal=tesoura(jogadaUsuario);
            break;
        default:
            console.log("O computador jogou o valor:",jogadaPC);
    }
}


function derrota(pontuacaoFinal){
    console.log("Você perdeu! A sua pontuação foi de ",pontuacaoFinal);
    fimDeJogo=1;
}

while(fimDeJogo == 0){
    main();
};

document.write("<h2>Pontuacao final: ",pontuacaoFinal," </h1>");

