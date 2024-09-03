const faturamentoDiario = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },   // Final de semana/feriado
    { "dia": 5, "valor": 0.0 },   // Final de semana/feriado
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },   // Final de semana/feriado
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },  // Final de semana/feriado
    { "dia": 12, "valor": 0.0 },  // Final de semana/feriado
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },  // Final de semana/feriado
    { "dia": 19, "valor": 0.0 },  // Final de semana/feriado
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },  // Final de semana/feriado
    { "dia": 26, "valor": 0.0 },  // Final de semana/feriado
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
];

// Filtrando dias com faturamento (desconsiderando dias com valor 0)
const diasComFaturamento = faturamentoDiario.filter(dia => dia.valor > 0);

// Calculando o menor valor de faturamento
const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));

// Calculando o maior valor de faturamento
const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

// Calculando a média mensal de faturamento - acc = accumulator (acumulador)
const mediaMensal = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0) / diasComFaturamento.length;

// Contando os dias com faturamento superior à média mensal
const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaMensal).length;

console.log("Menor faturamento em um dia do mês:", menorFaturamento.toFixed(2));
console.log("Maior faturamento em um dia do mês:", maiorFaturamento.toFixed(2));
console.log("Número de dias com faturamento acima da média mensal:", diasAcimaDaMedia);
