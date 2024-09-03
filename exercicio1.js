let INDICE = 13;
let SOMA = 0;
let K = 0;

// Inicia um loop while que continuará enquanto K for menor que o valor de INDICE
while (K < INDICE) {
    // Incrementa K em 1 a cada iteração
    K = K + 1;
    
    // Adiciona o valor atual de K à variável SOMA
    SOMA = SOMA + K;
    
    // Exibe o valor atual de K e a soma acumulada no console para cada iteração
    console.log(`Iteração ${K}: K = ${K}, SOMA = ${SOMA}`);
}

console.log(`Valor final de SOMA: ${SOMA}`);

