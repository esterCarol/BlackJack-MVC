// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function calcularIMC() {
    var formulario = document.getElementById("formulario");

    var peso = formulario.peso.value;
    var altura = formulario.altura.value;

    var imc = peso / (altura * altura);

    formulario.imc.value = imc.toFixed(2);

    if (imc < 18.5)
        document.getElementById("resultado").innerHTML = "Abaixo do peso.";
    else if (imc >= 18.5 && imc <= 24.9)
        document.getElementById("resultado").innerHTML = "Peso normal.";
    else if (imc >= 25 && imc <= 29.9)
        document.getElementById("resultado").innerHTML = "Sobrepeso.";
    else if (imc >= 30.9 && imc <= 34.9) 
        document.getElementById("resultado").innerHTML = "Obesidade Grau I.";
    else if (imc >= 35 && imc <= 39.9)
        document.getElementById("resultado").innerHTML = "Obesidade Grau II.";
    else 
        document.getElementById("resultado").innerHTML = "Obesidade Grau III ou Mórbida";


    if (imc >= 18.5 && imc <= 24.9)
        document.getElementById("resultado").className = "alert-success";
    else
        document.getElementById("resultado").className = "alert-danger";
}
