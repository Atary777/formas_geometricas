const f_MAP = {
    // Características do Retângulo
    areaRetangulo: (l, a) => l * a,
    perimetroRetangulo: (l, a) => 2 * (l + a),
    hipotenusaRetangulo: (a, b) => Math.sqrt(a ** 2 + b ** 2),
    cantosRetangulo: 4,
    ladosRetangulo: 4,
    somaAngulosRetangulo: 360,

    areaCirculo: (raioX, raioY) => (raioX * raioY) * Math.PI,
    perimetroCirculo: (raioX, raioY) => 2 * Math.PI * Math.sqrt((raioX ** 2 + raioY ** 2) / 2),
    cantosCirculo: 0,

    areaTriangulo: (a, b, c) => a + b + c,

    areaTrapezio: (base1, base2, alt) => 1 / 2(base1 + base2) * alt,

    areaQuadrado: (a, b) => a * b,
    // Teste de constantes, fórmulas geométricas
}

const constMAP = {
    select: document.getElementById("forms"),
    tipoTriangulo: document.getElementById("triangulos"),
    largura: document.getElementById("largura"),
    altura: document.getElementById("altura"),
    raioX: document.getElementById("raioX"),
    raioY: document.getElementById("raioY"),
    angulo1: document.getElementById("angulo_1"),
    angulo2: document.getElementById("angulo_2"),
    angulo3: document.getElementById("angulo_3"),
    baseInferior: document.getElementById("baseinf"),
    baseSuperior: document.getElementById("basesup"),
    alturaTrapezio: document.getElementById("alt"),

    labelLargura: document.getElementById("labelLargura"),
    labelAltura: document.getElementById("labelAltura"),
    labelRX: document.getElementById("labelRX"),
    labelRY: document.getElementById("labelRY"),
    labelinf: document.getElementById("labelinf"),
    labelsup: document.getElementById("labelsup"),
    labelalt: document.getElementById("labelalt"),
    labelang1: document.getElementById("labelang1"),
    labelang2: document.getElementById("labelang2"),
    labelang3: document.getElementById("labelang3"),
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
    const select = document.getElementById("forms");
    const forma = select.value;

    const forma = constMAP.select.value;

    let largura = parseFloat(document.getElementById('largura').value) / 1000;
    let altura = parseFloat(document.getElementById('altura').value) / 1000;

    let area = largura * altura;
    let perimetro = (largura + altura) * 2;

}

//function areaCirculo() {
//}

//function areaTriangulo() {
//}

//function areaTrapezio() {
//}

//function areaQuadrado() {

//}

function mostrarResultados() {
    const select = constMAP.select.value
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