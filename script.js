function atualizarLabel() {
    const select = document.getElementById("forms");
    const labelA = document.getElementById("labelAltura");
    const labelL = document.getElementById("labelLargura");

    const forma = select.value;

    if (forma) {
        labelA.textContent = `Altura do ${forma}: `;
        labelL.textContent = `Largura do ${forma}: `;
    } else {
        labelA.textContent = 'Altura: ';
        labelL.textContent = 'Largura: ';
    }
}

function mostrarMensagem() {

    const select = document.getElementById("forms");
    const forma = select.value;

    let largura = parseFloat(document.getElementById('largura').value) / 1000;
    let altura = parseFloat(document.getElementById('altura').value) / 1000;

    const area = largura * altura;
    const perimetro = (largura + altura) * 2;
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
    <p>Área do ${forma}: ${area.toFixed(2)} m². </p>
    <p>Perímetro do ${forma}: ${perimetro.toFixed(2)} m. </p>
    `
}