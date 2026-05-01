function mostrarMensagem() {
    const largura = parseFloat(document.getElementById('largMM').value) / 1000;
    const altura = parseFloat(document.getElementById('altMM').value) / 1000;

    const area = largura * altura;
    const perimetro = ( largura + altura ) * 2 ;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <p>Chapa: ${area.toFixed(2)} m². </p>
    <p>Fita de borda: ${perimetro.toFixed(2)} m. </p>
    `
}
function array_list() {
    let formas_geometricas = ["triangulo", "quadrado", "circulo", "trapezio", "retangulo"];
    if formas_geometricas = 0
    alert("é um triângulo");
}