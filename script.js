<<<<<<< HEAD
=======
/*  - Escopo de Programação:

    Autor: João Paulo
    Auxiliador: Felipe Andriotti

    - Definir Variáveis: Largura, Altura, Espessura, etc...
    - Definir Constantes: (Funções pré Cálculo) Área, Perímetro, Volume, Peso, etc...
    - Definir Funções: Ao clicar no botão; Ao trocar a espessura; etc...
    - Definir Eventos: Se eu inserir um valor errado, me avisar...
    - Definir Saídas: Resultados no sistema SI (Sistema Internacional de Unidades) e em mm, cm, etc...
*/

>>>>>>> 18cfb2af699c56ceb3e9ee88df53c90e2033bbbd
function mostrarMensagem() {
    // Essa parte tive de substituir de Const para Let, pois o valor da variável é alterado a cada clique, e Const não permite isso.
    let largura = parseFloat(document.getElementById('largMM').value) / 1000;
    let altura = parseFloat(document.getElementById('altMM').value) / 1000;

    const area = largura * altura;
    const perimetro = (largura + altura) * 2;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <p>Área da Geometria: ${area.toFixed(2)} m². </p>
    <p>Perímetro da Geometria: ${perimetro.toFixed(2)} m. </p>
    `
<<<<<<< HEAD
}
function array_list() {
    let formas_geometricas = ["triangulo", "quadrado", "circulo", "trapezio", "retangulo"];
    if formas_geometricas = 0
    alert("é um triângulo");
=======
    // Manter em área da geometria, a fins de aprendizado, posteriormente te ensino uma forma bacana de calcular mobiliário em MDF.
>>>>>>> 18cfb2af699c56ceb3e9ee88df53c90e2033bbbd
}