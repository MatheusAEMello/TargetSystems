const readline = require('readline');

// Criando a interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitando ao usuário que insira uma palavra, frase ou texto para ser invertido
rl.question('Insira uma palavra, frase ou texto para ser invertido: ', (stringOriginal) => {
    
    // Inicializando uma variável para armazenar a string invertida
    let stringInvertida = "";

    // Percorrendo a string original de trás para frente
    for (let i = stringOriginal.length - 1; i >= 0; i--) {
        stringInvertida += stringOriginal[i];
    }

    // Exibindo o resultado
    console.log("String original:", stringOriginal);
    console.log("String invertida:", stringInvertida);

    rl.close();
});
