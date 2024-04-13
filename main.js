// Dados fornecidos na tabela
const personagens = [
    { nome: "He-man", arma: "Lâmina", transformacao: true, idade: "Adulto", classe: "Herói" },
    { nome: "Seiya", arma: "Magia", transformacao: false, idade: "Novo", classe: "Herói" },
    { nome: "Mun-ra", arma: "Magia", transformacao: true, idade: "Velho", classe: "Vilão" },
    { nome: "Bob Esponja", arma: "Não-usa", transformacao: false, idade: "Novo", classe: "Herói" },
    { nome: "Magneto", arma: "Não-usa", transformacao: false, idade: "Adulto", classe: "Vilão" }
];

// Função de aptidão
function calcularAptidao(individuo) {
    let aptidao = 0;
    for (let crit in individuo) {
        if (individuo[crit] === "Lâmina") {
            aptidao += 2;
        } else if (individuo[crit] === "Magia") {
            aptidao += 3;
        } else if (individuo[crit] === true) {
            aptidao += 1;
        } else if (individuo[crit] === "Adulto") {
            aptidao += 1;
        } else if (individuo[crit] === "Herói") {
            aptidao += 2;
        }
    }
    return aptidao;
}

// Função para gerar indivíduos (cromossomos)
function gerarIndividuo() {
    return {
        arma: ["Lâmina", "Magia", "Não-usa"][Math.floor(Math.random() * 3)],
        transformacao: Math.random() < 0.5,
        idade: ["Novo", "Adulto", "Velho"][Math.floor(Math.random() * 3)],
        classe: ["Herói", "Vilão"][Math.floor(Math.random() * 2)]
    };
}

// Função de crossover
function crossover(individuo1, individuo2) {
    const pontoCorte = Math.floor(Math.random() * 3) + 1;
    const novoIndividuo = {};
    let i = 0;
    for (let crit in individuo1) {
        novoIndividuo[crit] = i < pontoCorte ? individuo1[crit] : individuo2[crit];
        i++;
    }
    return novoIndividuo;
}