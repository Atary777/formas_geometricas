const f_MAP = {
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
    areaQuadrado: (a) => a * a / 1000,

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

    arr: ['altura', 'largura', 'raioX', 'raioY', 'angulo1', 'angulo2', 'angulo3', 'baseInferior', 'baseSuperior', 'alturaTrapezio']
};

function atualizarLabel() {

    const forma = constMAP.select.value; 
    const variavel = constMAP.arr.value;
    if(forma === "Triangulo") {
            variavel.innerHTML = seletor(arr['angulo1', 'angulo2', 'angulo3']);
        } else if(forma === "Quadrado") {
            variavel.innerHTML = seletor(arr['angulo1', 'angulo2', 'angulo3']);
        } else if (forma === "Circulo") {
            variavel.innerHTML = seletor(arr['raioX', 'raioY']);
        } else if (forma === "Trapezio") {
            variavel.innerHTML = seletor(arr['baseInferior', 'baseSuperior', 'alturaTrapezio']);
        } else if (forma === "Retangulo") {
            variavel.innerHTML = seletor(arr['angulo1', 'angulo2', 'angulo3']);
        }
        else {
            resultado.innerHTML = " <p> Não há nenhum valor inserido!";
    }
}

function mostrarResultados() {

    const forma = constMAP.select.value;
    const resultado = constMAP.resultado;

        if(forma === "Triangulo") {
            resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaRetangulo(constMAP.angulo1.value, constMAP.angulo2.value, constMAP.angulo3.value)} m².
            `
        } else if(forma === "Quadrado") {
            resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaQuadrado(constMAP.largura.value)} m².
            `
        } else if (forma === "Circulo") {
            resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaCirculo(constMAP.raioX.value, constMAP.raioY.value)} m².
            <p>Perímetro do ${forma}: ${f_MAP.areaCirculo(constMAP.raioX.value, constMAP.raioY.value)}
            `
        } else if (forma === "Trapezio") {
            resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaTrapezio(constMAP.baseInferior.value, constMAP.baseSuperior.value, constMAP.alturaTrapezio.value)} m².
            `
        } else if (forma === "Retangulo") {
            resultado.innerHTML = `
            <p>Área do ${forma}: ${f_MAP.areaRetangulo(constMAP.largura.value, constMAP.altura.value)} m².
            <p>Perímetro do ${forma}: ${f_MAP.areaRetangulo(constMAP.largura.value, constMAP.altura.value)} m².
            `
        }
        else {
            resultado.innerHTML = " <p> Não há nenhum valor inserido!";
    }
}