const f_MAP = {
    // Características do Retângulo
    areaRetangulo: (l, a) => l / 1000 * a / 1000,
    perimetroRetangulo: (l, a) => 2 * (l + a),
    hipotenusaRetangulo: (a, b) => Math.sqrt(a ** 2 + b ** 2),
    cantosRetangulo: 4,
    ladosRetangulo: 4,
    somaAngulosRetangulo: 360,

    areaCirculo: (raioX) => (raioX ** 2) * Math.PI,
    perimetroCirculo: (raioX) => 2 * Math.PI * raioX,
    cantosCirculo: 0,

    areaElipse: (raioX, raioY) => (raioX * raioY) * Math.PI,
    perimetroElipse: (raioX, raioY) => 2 * Math.PI * (raioX * raioY),
    cantosElipse: 0,

    areaTriangulo: (a, b, c) => a + b + c,

    areaTrapezio: (base1, base2, alt) => 1 / 2(base1 + base2) * alt,

    areaQuadrado: (a) => a * a,

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

/*function atualizarLabel() {
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
}*/

function mostrarResultados() {

    const forma = constMAP.select.value;
    const resultado = constMAP.resultado;

    switch (forma) {
        case "Triangulo":
            resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaRetangulo(constMAP.angulo1.value, constMAP.angulo2.value, constMAP.angulo3.value)} m².
            `
            break;
        case "Quadrado":
            resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaQuadrado(constMAP.largura.value)} m².
            `
            break;
        case "Circulo":
            resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaCirculo(constMAP.raioX.value, constMAP.raioY.value)} m².
            <p>Perímetro do ${forma}: ${f_MAP.areaCirculo(constMAP.raioX.value, constMAP.raioY.value)}
            `
            break;
        case "Trapezio":
            resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaTrapezio(constMAP.baseInferior.value, constMAP.baseSuperior.value, constMAP.alturaTrapezio.value)} m².
            `
            break;
        case "Retangulo":
            resultado.innerHTML =`
            <p>Área do ${forma}: ${f_MAP.areaRetangulo(constMAP.largura.value, constMAP.altura.value)} m².
            <p>Perímetro do ${forma}: ${f_MAP.areaRetangulo(constMAP.largura.value, constMAP.altura.value)} m².
            `
            break;
        default: 
            resultado.innerHTML = " <p> Não há nenhum valor inserido!";
            break;
    }

    
}