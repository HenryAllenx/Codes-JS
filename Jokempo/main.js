let pontosUser = 0;
let pontosBot = 0;
let pontuacaoGeral = 0;
let jogadaBot;
let user;
let bot;
let resposta;
let partidasBot = 0;
let partidasUser = 0;
let ativo = true;
let showPointsUser;
let showPointsBot;
let showMatchesUser;
let showMatchesBot;

function reiniciar(params) {
    let ativo = true;
    jogadaBot = Math.round(Math.random() * 2 + 1);
    pontosUser = 0;
    pontosBot = 0;
    pontuacaoGeral = 0;
    resposta.innerHTML ="";
    bot.innerHTML = "";
    showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
    showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    showMatchesBot.innerHTML = `Partidas Bot: ${partidasBot}`;
    showMatchesUser.innerHTML = `Partidas usuário: ${partidasUser}`;
    
   
}

//1=Pedra, 2= Papel, 3=Tesoura

function jogar(params) {
    jogadaBot = Math.round(Math.random() * 2 + 1);
    user = document.getElementById("user").value;
    bot = document.getElementById("escolhaBot");
    resposta = document.getElementById("resposta");
    showPointsUser = document.getElementById("pontosUser");
    showPointsBot = document.getElementById("pontosBot");
    showMatchesUser = document.getElementById("partidasUser");
    showMatchesBot = document.getElementById("partidasBot");

    if (user > 3) {
        resposta.innerHTML = "Número inválido";
    }
    if (ativo) {
        if (pontuacaoGeral < 3) {
            if (user == 1 && jogadaBot == 1) {
                bot.innerHTML = "O bot jogou pedra";
                resposta.innerHTML = "Empate!";
                showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
                showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    
            }else if (user == 1 && jogadaBot == 2) {
                bot.innerHTML = "O bot jogou Papel"
                resposta.innerHTML = "O bot ganhou essa rodada!";
                pontosBot++;
                pontuacaoGeral++;
                showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
                showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    
            }else if (user == 1 && jogadaBot == 3) {
                bot.innerHTML = "O bot jogou tesoura";
                resposta.innerHTML = "Você ganhou essa rodada!";
                pontosUser++;
                pontuacaoGeral++;
                showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
                showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    
            }else if (user == 2 && jogadaBot == 1) {
                bot.innerHTML = "O bot jogou pedra";
                resposta.innerHTML = "Você ganhou essa rodada!";
                pontosUser++;
                pontuacaoGeral++;
                showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
                showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    
            }else if (user == 2 && jogadaBot == 2) {
                bot.innerHTML = "O bot jogou papel"
                resposta.innerHTML = "Empate!"
                showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
                showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    
            }else if (user == 2 && jogadaBot == 3) {
                bot.innerHTML = "O bot jogou Tesoura"
                resposta.innerHTML = "O bot ganhou essa rodada!"
                pontosBot++;
                pontuacaoGeral++
                showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
                showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    
            }else if (user == 3 && jogadaBot == 1) {
                bot.innerHTML = "O bot jogou pedra";
                resposta.innerHTML = "O bot ganhou essa rodada!";
                pontosBot++;
                pontuacaoGeral++;
                showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
                showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    
    
            }else if (user == 3 && jogadaBot == 2) {
                bot.innerHTML = "O bot jogou papel";
                resposta.innerHTML = "Você ganhou essa rodada!";
                pontosUser++;
                pontuacaoGeral++;
                showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
                showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    
            }else if (user == 3 && jogadaBot == 3) {
                bot.innerHTML = "O bot jogou tesoura";
                resposta.innerHTML = "Empate!";
                showPointsBot.innerHTML = `Pontos bot: ${pontosBot}`;
                showPointsUser.innerHTML = `Pontos usuário: ${pontosUser}`;
    
            }
            if (pontosBot == 2) {
                resposta.innerHTML= "O bot ganhou essa partida!";
                partidasBot++;
                showMatchesBot.innerHTML = `Partidas Bot: ${partidasBot}`;
                
                
            }
            
            if (pontosUser == 2) {
                 resposta.innerHTML= "Você ganhou essa partida!";
                 partidasUser++;
                 showMatchesUser.innerHTML = `Partidas usuário: ${partidasUser}`;
                 
            }
        }
    }
    

    
}

