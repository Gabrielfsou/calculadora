function somar(){
    let num1 = parseFloat(document.getElementById('primeiroValor').value);
    let num2 = parseFloat(document.getElementById('segundoValor').value);
    document.getElementById('resultado').innerHTML = 'Resultado: ' +(num1 + num2);
}
function subtrair(){
    let num1 = parseFloat(document.getElementById('primeiroValor').value);
    let num2 = parseFloat(document.getElementById('segundoValor').value);
    document.getElementById('resultado').innerHTML = 'Resultado: ' +(num1 - num2);
}
function multiplicar(){
    let num1 = parseFloat(document.getElementById('primeiroValor').value);
    let num2 = parseFloat(document.getElementById('segundoValor').value);
    document.getElementById('resultado').innerHTML = 'Resultado: ' +(num1 * num2);
}
function dividir(){
    let num1 = parseFloat(document.getElementById('primeiroValor').value);
    let num2 = parseFloat(document.getElementById('segundoValor').value);
    document.getElementById('resultado').innerHTML = 'Resultado: ' +(num1 / num2);
}