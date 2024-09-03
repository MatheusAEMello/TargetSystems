const faturamentoPorEstado = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calculando o faturamento total
const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Calculando o percentual de representação de cada estado
const percentuais = {};
for (let estado in faturamentoPorEstado) {
    const percentual = (faturamentoPorEstado[estado] / faturamentoTotal) * 100;
    percentuais[estado] = percentual.toFixed(2); // Arredonda para 2 casas decimais
}

// Exibindo os resultados
for (let estado in percentuais) {
    console.log(`${estado}: ${percentuais[estado]}%`);
}
