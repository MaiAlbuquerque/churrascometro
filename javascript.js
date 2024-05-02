function mudarCor() {
    let botao = document.querySelector('.botao');
    // Salvando a cor original do botão
    let corOriginal = botao.style.backgroundColor;

    // Mudando a cor do botão e do texto quando o mouse passa sobre ele
    botao.style.backgroundColor = 'rgb(241, 19, 19)';
    botao.style.color = 'white';

    // Revertendo para a cor original quando o mouse sair do botão
    botao.onmouseout = function () {
        botao.style.backgroundColor = corOriginal;
        botao.style.color = 'initial';
    };
}

function calcular() {
    let inputAdultos = document.getElementById("adultos");
    let inputCriancas = document.getElementById("crianças");
    let inputTempo = document.getElementById("duração");

    let resultado = document.getElementById("res");

    // Limpar o conteúdo anterior da div
    resultado.innerHTML = "";

    let quantAdultos = parseInt(inputAdultos.value);
    let quantCriancas = parseInt(inputCriancas.value);
    let duracao = inputTempo.valueAsNumber / 3600000; // Convertendo a duração de milissegundos para horas

    // Definindo as quantidades padrão por adulto
    let carnePorAdulto, cervejaPorAdulto, refrigerantePorAdulto;

    // Verificando a duração da festa
    if (duracao > 6) { // Se a duração for maior que 6 horas
        carnePorAdulto = 650; // em gramas
        cervejaPorAdulto = 2000; // em mililitros
        refrigerantePorAdulto = 1500; // em mililitros
    } else {
        carnePorAdulto = 400; // em gramas
        cervejaPorAdulto = 1200; // em mililitros
        refrigerantePorAdulto = 1000; // em mililitros
    }

    // Convertendo a quantidade de crianças para "meias" pessoas
    let quantCriancasMeia = quantCriancas * 0.5;

    // Calculando as quantidades totais necessárias
    let totalCarne = (quantAdultos + quantCriancasMeia) * carnePorAdulto;
    let totalCerveja = quantAdultos * cervejaPorAdulto; // Removido a adição de quantCriancasMeia aqui
    let totalRefrigerante = (quantAdultos + quantCriancasMeia) * refrigerantePorAdulto;

    // Convertendo para kg e litros se for o caso
    if (totalCarne >= 1000) {
        totalCarne /= 1000;
        resultado.innerHTML += "Quantidade total de carne necessária: " + totalCarne + " kg<br>";
    } else {
        resultado.innerHTML += "Quantidade total de carne necessária: " + totalCarne + " gramas<br>";
    }

    if (totalCerveja >= 1000) {
        totalCerveja /= 1000;
        resultado.innerHTML += "Quantidade total de cerveja necessária: " + totalCerveja + " litros<br>";
    } else {
        resultado.innerHTML += "Quantidade total de cerveja necessária: " + totalCerveja + " ml<br>";
    }

    if (totalRefrigerante >= 1000) {
        totalRefrigerante /= 1000;
        resultado.innerHTML += "Quantidade total de refrigerante necessária: " + totalRefrigerante + " litros";
    } else {
        resultado.innerHTML += "Quantidade total de refrigerante necessária: " + totalRefrigerante + " ml";
    }
}

function changePlaceholders() {
    document.getElementById('adultos').setAttribute('placeholder', 'Adultos');
    document.getElementById('crianças').setAttribute('placeholder', 'Crianças');
    document.getElementById('duração').setAttribute('placeholder', 'Duração do evento');
}

// Verifica se a largura da tela é menor ou igual a 524px e chama a função para alterar os placeholders
if (window.matchMedia('(max-width: 524px)').matches) {
    window.onload = changePlaceholders; // Executa a função após a página carregar
}
