const f_MAP = {
    areaRetangulo: (l, a) => l / 1000 * a / 1000,
    perimetroRetangulo: (l, a) => 2 * (l / 1000 + a / 1000),
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
    areaTrapezio: (base1, base2, alt) => 1 / 2 * (base1 + base2) * alt,
    areaQuadrado: (a) => a / 1000 * a / 1000,
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

const displayMAP = {
    Retangulo: [constMAP.largura, constMAP.altura, constMAP.labelLargura, constMAP.labelAltura],
    Circulo: [constMAP.raioX, constMAP.labelRX],
    Elipse: [constMAP.raioX, constMAP.raioY, constMAP.labelRX, constMAP.labelRY],
    Triangulo: [constMAP.tipoTriangulo, constMAP.angulo1, constMAP.angulo2, constMAP.angulo3, constMAP.labelang1, constMAP.labelang2, constMAP.labelang3],
    Trapezio: [constMAP.baseInferior, constMAP.baseSuperior, constMAP.alturaTrapezio, constMAP.labelinf, constMAP.labelsup, constMAP.labelalt],
    Quadrado: [constMAP.largura, constMAP.labelLargura]
};

function hideAllInputs(){

    Object.values(displayMAP).flat().forEach(element => {
        element.style.display = "none";
    });

}

function atualizarLabel() {

    resultado.innerHTML = "";

    hideAllInputs();

    const forma = constMAP.select.value;

    if (!displayMAP[forma]) return;

    displayMAP[forma].forEach(element =>{
        element.style.display = "inline-block";
    });

}

function mostrarResultados() {

    const forma = constMAP.select.value;
    const resultado = constMAP.resultado;

    if (forma === "Triangulo") {
        resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaRetangulo(triangle.angulo1.value, triangle.angulo2.value, triangle.angulo3.value)} m².
            `
    } else if (forma === "Quadrado") {
        resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaQuadrado(square.largura.value)} m².
            `
    } else if (forma === "Circulo") {
        resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaCirculo(circle.raioX.value, circle.raioY.value)} m².
            <p>Perímetro do ${forma}: ${f_MAP.areaCirculo(circle.raioX.value, circle.raioY.value)}
            `
    } else if (forma === "Trapezio") {
        resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaTrapezio(trapeze.baseInferior.value, trapeze.baseSuperior.value, trapeze.alturaTrapezio.value)} m².
            `
    } else if (forma === "Retangulo") {
        resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaRetangulo(square.largura.value, square.altura.value)} m².
            <p>Perímetro do ${forma}: ${f_MAP.perimetroRetangulo(square.largura.value, square.altura.value)} m.
            <p>Cantos do ${forma}: ${f_MAP.cantosRetangulo}.
            <p>Lados do ${forma}: ${f_MAP.ladosRetangulo}.
            <p>Soma angular do ${forma}: ${f_MAP.somaAngulosRetangulo}.
            `
    }
    else {
        resultado.innerHTML = " <p> Não há nenhum valor inserido!";
    }
}

// () Parenteses

// [] Colchete

// {} Chave