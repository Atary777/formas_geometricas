/*  - Escopo de Programação:

    Autor: João Paulo
    Auxiliador: Felipe Andriotti

    - Definir Variáveis: Largura, Altura, Espessura, etc...
    - Definir Constantes: (Funções pré Cálculo) Área, Perímetro, Volume, Peso, etc...
    - Definir Funções: Ao clicar no botão; Ao trocar a espessura; etc...
    - Definir Eventos: Se eu inserir um valor errado, me avisar...
    - Definir Saídas: Resultados no sistema SI (Sistema Internacional de Unidades) e em mm, cm, etc...*/

function mostrarMensagem() {// Essa parte tive de substituir de Const para Let, pois o valor da variável é alterado a cada clique, e Const não permite isso.
    let largura = parseFloat(document.getElementById('largura').value) / 1000;
    let altura = parseFloat(document.getElementById('altura').value) / 1000;

    const area = largura * altura;s
    const perimetro = (largura + altura) * 2;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <p>Área da Geometria: ${area.toFixed(2)} m². </p>
    <p>Perímetro da Geometria: ${perimetro.toFixed(2)} m. </p>
    `
}
    // Manter em área da geometria, a fins de aprendizado, posteriormente te ensino uma forma bacana de calcular mobiliário em MDF.