const formulasMAP = {
    areaRetangulo: (l, a) => l * a,
    perimetroRetangulo: (l, a) => 2 * (l + a)

    // Teste de constantes, fórmulas geométricas
}

const constMAP = {
    select: document.getElementById("forms"),
    largura: document.getElementById("largura"),
    altura: document.getElementById('altura'),
    labelLargura: document.getElementById("labelLargura"),
    labelAltura: document.getElementById("labelAltura"),
    resultado: document.getElementById("resultado")
};

function atualizarLabel() {
    // const select = document.getElementById("forms");
    const forma = constMAP.select.value;
    const labelA = document.getElementById("labelAltura");
    const labelL = document.getElementById("labelLargura");

    if (forma) {
        labelA.textContent = `Altura do ${forma}: `;
        labelL.textContent = `Largura do ${forma}: `;

    } else {
        labelA.textContent = 'Altura: ';
        labelL.textContent = 'Largura: ';
    }
}
function mostrarResultados() {
    const select = document.getElementById("forms");
    const forma = select.value;
}
function areaRetangulo() {

    const forma = constMAP.select.value;
    //const select = document.getElementById("forms");
    //const forma = select.value;

    let largura = parseFloat(document.getElementById('largura').value) / 1000;
    let altura = parseFloat(document.getElementById('altura').value) / 1000;
    /*let diametro = parseFloat(document.getElementById('diametro').value);*/

    let area = largura * altura;
    let perimetro = (largura + altura) * 2;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <p>Área do ${forma}: ${area.toFixed(2)} m². </p>
    <p>Perímetro do ${forma}: ${perimetro.toFixed(2)} m. </p>
    `
}
function areaCirculo(){
    const select = document.getElementById("forms");
    // const forma = select.value;
    const forma = constMAP.select.value;

    let raioX = parseFloat(document.getElementById('largura').value)
    let raioY = parseFloat(document.getElementById('altura').value)

    let area = raioX * raioY * Math.PI;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <p>Área do ${forma}: ${area.toFixed(2)} m². </p>
    `
}
function areaTriangulo(){
    const select = document.getElementById("forms");
}
