// Função para formatar o valor monetário no input
function formatarValor() {
    const input = document.getElementById("valor");
    let valor = input.value.replace(/\D/g, ''); // Remove tudo que não for número
    valor = (valor / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }); // Formata para moeda brasileira
    input.value = valor;
}

// Função para formatar a porcentagem no input
function formatarPorcentagem() {
    const input = document.getElementById("porcentagem");
    let porcentagem = input.value.replace(/\D/g, ''); // Remove tudo que não for número
    if (porcentagem) {
        porcentagem = `${parseInt(porcentagem, 10)}%`; // Garante o formato numérico com %
    }
    input.value = porcentagem;
}

// Função para calcular o valor do desconto
function calcularDesconto() {
    // Obtém os valores e remove formatações
    const valorInput = document.getElementById("valor").value.replace(/[R$\s]/g, "").replace(/\./g, "").replace(",", ".");
    const porcentagemInput = document.getElementById("porcentagem").value.replace("%", "").replace(",", ".");

    // Verifica se ambos os campos foram preenchidos corretamente
    if (!valorInput || isNaN(valorInput) || !porcentagemInput || isNaN(porcentagemInput)) {
        alert("Por favor, preencha ambos os campos com valores válidos!");
        return;
    }

    const valor = parseFloat(valorInput);
    const porcentagem = parseFloat(porcentagemInput);

    // Calcula o desconto
    const desconto = (valor * porcentagem) / 100;
    const valorComDesconto = valor - desconto;

    // Atualiza os resultados na interface
    document.getElementById("valorDesconto").innerText = `Valor Descontado: R$ ${formatarValorCalculado(desconto)}`;
    document.getElementById("valorComDesconto").innerText = `Valor com Desconto: R$ ${formatarValorCalculado(valorComDesconto)}`;

    // Mostra a seção de resultados
    document.getElementById("result").style.display = "block";
}

// Função para formatar valores calculados
function formatarValorCalculado(valor) {
    return valor
        .toFixed(2) // Define 2 casas decimais
        .replace(".", ",") // Troca ponto por vírgula
        .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Adiciona ponto a cada milhar
}

// Função para simular a consulta da tabela no SharePoint
function consultarTabela() {
    const link = 'https://seulink.com/tabela'; // Substitua pelo seu link real
    window.open(link, '_blank');
}
