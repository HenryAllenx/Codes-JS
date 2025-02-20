function findOutNumber(){
    const number = parseInt(document.getElementById("user").value); // Converter para número
    const resposta = document.getElementById("resposta");

    // Validação do número
    if (isNaN(number) || number < 2) {
        resposta.innerHTML = "Por favor, insira um número válido maior que 1.";
        return;
    }

    // Verificação de número primo
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) { // Verificar até a raiz quadrada
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resposta.innerHTML = `O número: ${number} é primo.`;
    } else {
        resposta.innerHTML = `O número: ${number} não é primo.`;
    }
}
