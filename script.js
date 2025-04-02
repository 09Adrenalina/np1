document.getElementById('calculate').addEventListener('click', function() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const current = parseFloat(document.getElementById('current').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    let result = '';

    if (!isNaN(voltage) && !isNaN(current) && isNaN(resistance)) {
        // Calcular resistência
        result = `Resistência (R) = ${voltage / current} Ohms`;
    } else if (!isNaN(current) && !isNaN(resistance) && isNaN(voltage)) {
        // Calcular tensão
        result = `Tensão (V) = ${current * resistance} Volts`;
    } else if (!isNaN(voltage) && !isNaN(resistance) && isNaN(current)) {
        // Calcular corrente
        result = `Corrente (I) = ${voltage / resistance} Amperes`;
    } else {
        result = 'Por favor, preencha exatamente dois campos.';
    }

    document.getElementById('result').innerText = result;
});