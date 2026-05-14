const f_MAP = {
    // Características do Retângulo
    areaRetangulo: (l, a) => l * a,
    perimetroRetangulo: (l, a) => 2 * (l + a),
    hipotenusaRetangulo: (a, b) => Math.sqrt(a**2 + b**2),
    areaCirculo: (raioX, raioY) => (raioX * raioY) * Math.PI,
    areaTriangulo: (a, b, c) => a + b + c,
    areaTrapezio: (base1, base2, alt) => 1/2 (base1 + base2) * alt,
    areaQuadrado: (a, b) => a * b,
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
    raioX: document.getElementById("raioX"),
    raioY: document.getElementById("raioY"),
    labelRX: document.getElementById("labelRX"),
    labelRY: document.getElementById("labelRY"),
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

    const forma = constMAP.select.value;

    let largura = parseFloat(document.getElementById('largura').value) / 1000;
    let altura = parseFloat(document.getElementById('altura').value) / 1000;

    let area = largura * altura;
    let perimetro = (largura + altura) * 2;
    
}

function areaCirculo(){
    //const raioX = parseFloat(document.getElementById("raioX").value)
    //const raioY = parseFloat(document.getElementById("raioY").value)
                                                    //EU SEI QUE TA ERRADO//
}

function areaTriangulo(){
    //const tipo = constMAP.tipoTriangulo;
    //const select = constMAP.select;
                                                    //EU SEI QUE TA ERRADO//
}

function areaTrapezio(){
    //const tipo = constMAP.tipoTriangulo;
    //const select = constMAP.select;
                                                    //EU SEI QUE TA ERRADO//
}

function areaQuadrado(){
    //const tipo = constMAP.tipoTriangulo;
    //const select = constMAP.select;
                                                    //EU SEI QUE TA ERRADO//
}

function mostrarResultados() {
    const select = document.getElementById("forms");
    const forma = select.value;

    let area = constMAP.largura.value / 1000 * constMAP.altura.value / 1000;
    let perimetro = (constMAP.largura.value / 1000 + constMAP.altura.value / 1000) * 2;
d
    const resultado = constMAP.resultado;
    resultado.innerHTML = `
    <p>Área do ${forma}: ${area.toFixed(2)} m². </p>
    <p>Perímetro do ${forma}: ${perimetro.toFixed(2)} m. </p>
    `
}
