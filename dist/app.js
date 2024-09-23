"use strict";
function calcularArea(largo, ancho) {
    return largo * ancho;
}
function saludar(nombre, edad) {
    if (edad >= 18) {
        return `Hola ${nombre}, eres mayor de edad`;
    }
    else {
        return `Hola ${nombre}, eres menor de edad`;
    }
}
const nombreProyecto = "Proyecto";
let largo = 15;
let ancho = 7;
let edadUsuario = 25;
const nombreUsuario = "Ana";
const area = calcularArea(largo, ancho);
console.log(`${nombreProyecto} tiene un área de ${area}.`);
console.log(saludar(nombreUsuario, edadUsuario));
const datosUsuario = ["Carlos", 30];
