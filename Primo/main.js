


function findOutNumber(){
    let number = document.getElementById("user").value;
    let resposta = document.getElementById("resposta");
    let div= 0;

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            div++;
        }

        
        
    }

    if (div == 2) {
        resposta.innerHTML= `O número: ${number} é primo`
        
    }else{
        resposta.innerHTML =`O número: ${number} não é primo`
    }
}