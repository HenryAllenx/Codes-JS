let numero= Math.round(Math.random()*50 );
console.log(numero);
let tentativas = 3;
let ativo = true;

function reiniciar(params) {
    numero= Math.round(Math.random()*50 );
    console.log(numero);
    tentativas = 3;
    ativo = true;
    document.getElementById("dica").innerHTML = "";
    document.getElementById("resposta").innerHTML = "";
    document.getElementById("chances").innerHTML = `Você tem ${tentativas} tentativa(s)`;
    document.getElementById("userChoice").value = "";

    
}



function jogar() {
    let user = parseInt(document.getElementById("userChoice").value);
    let tip = document.getElementById("dica");
    let resposta = document.getElementById("resposta");
    let chances = document.getElementById("chances");
   
   
    
    
    
  
    if (user > 50) {
        resposta.innerHTML = "Inválido";
        }

        
        if (ativo) {
            if (tentativas > 0) {
                if (user <= 50) {
                    if (user == numero) {
                        tentativas == 0;
                        resposta.innerHTML = "Você acertou o número!"
                        tip.innerHTML = "";
                        ativo = false;
                        
                       
                    }else if (user > numero) {
                        tip.innerHTML = "Você está quente";
                        tentativas--;
                        chances.innerHTML = `Você tem ${tentativas} tentativa(s) `;
                        resposta.innerHTML = "";


                    }else if (user < numero) {
                        tip.innerHTML = "Você está frio";
                        tentativas--;
                        chances.innerHTML = `Você tem ${tentativas} tentativa(s) `;
                        resposta.innerHTML = "";


                     }

                  }

              } else if(tentativas == 0){
                resposta.innerHTML = "Você não tem mais tentativas. O número era " + numero + ".";
                tip.innerHTML = "";
                ativo = false;
                
                
              }
        }
           
       
           
        
          
        
    
        
        

}

