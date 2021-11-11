function convert(){
    let temperature = document.getElementById('temperature').value;
    let result = document.getElementById('result');
    let convertMeasure = document.getElementById('measure').value;
    result.textContent = convertMeasure === 'celsius' ? CtoF(temperature) : FtoC(temperature);
}

function FtoC(fahrenheit){
    let celsius = (fahrenheit - 32) * 5 / 9;
    return fahrenheit + "F = " + celsius.toFixed(2) + "C"
}

function CtoF(celsius){
    let fahrenheit = celsius * 9 / 5 + 32;
    return celsius + "C = " + fahrenheit.toFixed(2) + "F"
}