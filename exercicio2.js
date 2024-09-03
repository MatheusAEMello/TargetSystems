const readline = require('readline');

// Configura a interface de leitura do console
const rl = readline.createInterface({
    input: process.stdin,  // Define o input como o console
    output: process.stdout // Define o output como o console
});

function isFibonacci(num) {
    // Inicializa os primeiros valores da sequência de Fibonacci
    let a = 0;
    let b = 1;

    // Imprime os valores iniciais e uma mensagem informando o início do cálculo
    console.log(`Calculando Fibonacci para ${num}:`);
    console.log(`a: ${a}, b: ${b}`);

    // Verifica se o número é 0 ou 1, que são os primeiros números da sequência
    if (num === 0 || num === 1) return true;

    // Inicializa a variável 'next' com a soma dos dois primeiros valores
    let next = a + b;

    // Continua o cálculo da sequência até que 'next' seja maior que o número fornecido
    while (next <= num) {
        // Imprime o valor atual de 'next'
        console.log(`Próximo valor: ${next}`);

        // Se o número fornecido for igual a 'next', o número pertence à sequência
        if (next === num) return true;

        // Atualiza os valores de 'a' e 'b' para os próximos números da sequência
        a = b;
        b = next;

        // Calcula o próximo valor da sequência
        next = a + b;

        // Imprime os novos valores de 'a' e 'b'
        console.log(`a: ${a}, b: ${b}`);
    }

    // Se o loop terminar sem encontrar o número, ele não pertence à sequência
    return false;
}

// Solicita ao usuário que insira um número para verificação
rl.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (answer) => {
    // Converte a entrada do usuário para um número inteiro
    const number = parseInt(answer);

    // Verifica se o número pertence à sequência e imprime a mensagem correspondente
    if (isFibonacci(number)) {
        console.log(`${number} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`${number} não pertence à sequência de Fibonacci.`);
    }

    rl.close();
});
