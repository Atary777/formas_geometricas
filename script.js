/*  - Escopo de Programação:

    Autor: João Paulo
    Auxiliador: Felipe Andriotti

    - Definir Variáveis: Largura, Altura, Espessura, etc...
    - Definir Constantes: (Funções pré Cálculo) Área, Perímetro, Volume, Peso, etc...
    - Definir Funções: Ao clicar no botão; Ao trocar a espessura; etc...
    - Definir Eventos: Se eu inserir um valor errado, me avisar...
    - Definir Saídas: Resultados no sistema SI (Sistema Internacional de Unidades) e em mm, cm, etc...*/

function atualizarLabel() {
    const select = document.getElementById("forms");
    const labelA = document.getElementById("labelAltura");

    const forma = select.value;

    if (forma) {
        labelA.textContent = `Altura do ${forma}:`;
    } else {
        labelA .textContent = 'Altura:';
    }
}

function mostrarMensagem() {

    const select = document.getElementById("forms");
    const forma = select.value;

    let largura = parseFloat(document.getElementById('largura').value) / 1000;
    let altura = parseFloat(document.getElementById('altura').value) / 1000;

    const area = largura * altura;
    const perimetro = (largura + altura) * 2;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <p>Área da ${forma}: ${area.toFixed(2)} m². </p>
    <p>Perímetro da Geometria: ${perimetro.toFixed(2)} m. </p>
    `
}