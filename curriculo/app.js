// =========================================
// PEGANDO OS ELEMENTOS DO HTML
// =========================================


// Pegamos o elemento que contém os projetos
const portfolio = document.querySelector(".portfolio");


// Pegamos todas as bolinhas
const bolinhas = document.querySelectorAll(".bolinha");


// Pegamos todos os projetos
const projetos = document.querySelectorAll(".projeto");



// =========================================
// VARIÁVEL DO PROJETO ATUAL
// =========================================


// Começamos no primeiro projeto
// O JavaScript começa a contar pelo número 0

let projetoAtual = 0;



// =========================================
// FUNÇÃO PARA ATUALIZAR O PORTFÓLIO
// =========================================
function atualizarPortfolio() {
    // Usamos exatamente 710 que é a largura do seu projeto no CSS
    const larguraProjeto = 850;

    const movimento = projetoAtual * larguraProjeto;

    portfolio.style.transform = `translateX(-${movimento}px)`;

    // =====================================
    // ATUALIZANDO AS BOLINHAS
    // =====================================
    bolinhas.forEach(function(bolinha, indice) {
        bolinha.classList.remove("ativa");

        if (indice === projetoAtual) {
            bolinha.classList.add("ativa");
        }
    });
}

    // =====================================
    // ATUALIZANDO AS BOLINHAS
    // =====================================


    bolinhas.forEach(function(bolinha, indice) {


        // Primeiro removemos a classe ativa
        bolinha.classList.remove("ativa");


        // Depois colocamos no projeto atual
        if (indice === projetoAtual) {

            bolinha.classList.add("ativa");

        }

    });





// =========================================
// FUNÇÃO PRÓXIMO
// =========================================

function proximo() {


    // Aumenta o número do projeto
    projetoAtual++;



    /*
        Se chegar depois do último projeto,
        volta para o primeiro.
    */

    if (projetoAtual >= projetos.length) {

        projetoAtual = 0;

    }



    // Atualiza a tela
    atualizarPortfolio();

}



// =========================================
// FUNÇÃO ANTERIOR
// =========================================

function anterior() {


    // Diminui o número do projeto
    projetoAtual--;



    /*
        Se passar antes do primeiro projeto,
        vai para o último.
    */

    if (projetoAtual < 0) {

        projetoAtual = projetos.length - 1;

    }



    // Atualiza a tela
    atualizarPortfolio();

}



// =========================================
// TECLADO
// =========================================


// Também podemos usar as setas do teclado

document.addEventListener("keydown", function(event) {


    // Se apertar a seta direita
    if (event.key === "ArrowRight") {

        proximo();

    }


    // Se apertar a seta esquerda
    if (event.key === "ArrowLeft") {

        anterior();

    }

});
