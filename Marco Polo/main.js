//Variaveis para o número aleatório, número de tentativas e o jogo estar com limite
let numero;
let tentativas = 3;
let ativo = true;


function inicio(params) {
    numero= Math.round(Math.random()*50 );
    tentativas = 3;
    ativo = true;
    document.getElementById("chances").innerHTML = `Você tem ${tentativas} tentativa(s)`;
    
}

//Reiniciar o jogo quando acabar ou ganhar
function reiniciar(params) {
    numero= Math.round(Math.random()*50 );
    tentativas = 3;
    ativo = true;
    document.getElementById("dica").innerHTML = "";
    document.getElementById("resposta").innerHTML = "";
    document.getElementById("chances").innerHTML = `Você tem ${tentativas} tentativa(s)`;
    document.getElementById("userChoice").value = "";

    
}


//Função principal do jogo
function jogar() {
    //Variaveis das respostas do usuario, das dicas, da resposta de vitoria ou derrota e das chances
    let user = parseInt(document.getElementById("userChoice").value);
    let tip = document.getElementById("dica");
    let resposta = document.getElementById("resposta");
    let chances = document.getElementById("chances");
   
   
    
    
    
    //Caso o usuário coloque maior que o número limite, o programa não irá responder
    if (user > 50) {
        resposta.innerHTML = "Inválido";
        }

        //Código do jogo
        if (ativo) { //Para saber se o jogo está funcionando
            if (tentativas > 0) { //Para saber se o usuario tem tentativas ainda
                if (user <= 50) {//Caso ele coloque menos ou igual ao número maximo, o jogo funciona
                    if (user == numero) {
                        tentativas == 0;
                        resposta.innerHTML = "Você acertou o número!"
                        tip.innerHTML = "";
                        ativo = false;
                        
                       //As regras estão no HTML
                    }else if (user > numero) {
                        tip.innerHTML = "Você está quente";
                        tentativas--;//Toda vez que o usuário erra, ele perde uma tentativa
                        chances.innerHTML = `Você tem ${tentativas} tentativa(s) `;
                        


                    }else if (user < numero) {
                        tip.innerHTML = "Você está frio";
                        tentativas--;
                        chances.innerHTML = `Você tem ${tentativas} tentativa(s) `;
                        


                     }

                  }


              } 
              if(tentativas == 0){
                resposta.innerHTML = "Você não tem mais tentativas. O número era " + numero + ".";
                tip.innerHTML = "";
                ativo = false;
                
                
              }
        }
}

