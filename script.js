const f_MAP = {
    // Características do Retângulo
    areaRetangulo: (l, a) => l * a,
    perimetroRetangulo: (l, a) => 2 * (l + a),
    hipotenusaRetangulo: (a, b) => Math.sqrt(a**2 + b**2),
    cantosRetangulo: 4,
    ladosRetangulo: 4,
    somaAngulosRetangulo: 360,

    // Teste de constantes, fórmulas geométricas
}

const constMAP = {
    select: document.getElementById("forms"),
    tipoTriangulo: document.getElementById("triangulos"),
    largura: document.getElementById("largura"),
    altura: document.getElementById("altura"),
    labelLargura: document.getElementById("labelLargura"),
    labelAltura: document.getElementById("labelAltura"),
    resultado: document.getElementById("resultado"),
};

function atualizarLabel() {
    // const select = document.getElementById("forms");
    // const labelA = document.getElementById("labelAltura");
    const forma = constMAP.select.value;
    const labelL = constMAP.labelLargura;
    const labelA = constMAP.labelAltura;

    if (forma) {
        labelL.textContent = `Largura do ${forma}: `;
        labelA.textContent = `Altura do ${forma}: `;
    } else {
        labelL.textContent = 'Largura: ';
        labelA.textContent = 'Altura: ';
    }
}

function areaRetangulo() {
    //const select = document.getElementById("forms");
    //const forma = select.value;
    //let diametro = parseFloat(document.getElementById('diametro').value);

    const forma = constMAP.select.value;

    let largura = parseFloat(document.getElementById('largura').value) / 1000;
    let altura = parseFloat(document.getElementById('altura').value) / 1000;

    let area = largura * altura;
    let perimetro = (largura + altura) * 2;
}

function areaCirculo(){
    // const forma = select.value;
    const select = document.getElementById("forms");
    const forma = constMAP.select.value;

    let raioX = parseFloat(document.getElementById('largura').value)
    let raioY = parseFloat(document.getElementById('altura').value)
    let area = raioX * raioY * Math.PI;
}

function mostrarResultados() {
    const select = document.getElementById("forms");
    const forma = select.value;

    let area = constMAP.largura.value / 1000 * constMAP.altura.value / 1000;
    let perimetro = (constMAP.largura.value / 1000 + constMAP.altura.value / 1000) * 2;

    const resultado = constMAP.resultado;
    resultado.innerHTML = `
    <p>Área do ${forma}: ${area.toFixed(2)} m². </p>
    <p>Perímetro do ${forma}: ${perimetro.toFixed(2)} m. </p>
    `
}
