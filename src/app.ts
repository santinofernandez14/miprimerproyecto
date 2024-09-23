function calcularArea(largo: number, ancho: number): number {
    return largo * ancho;
}

function saludar(nombre: string, edad: number): string {
    if (edad >= 18) {
        return `Hola ${nombre}, eres mayor de edad`;
    } else {
        return `Hola ${nombre}, eres menor de edad`;
    }
}

const nombreProyecto: string = "Proyecto";
let largo: number = 15;
let ancho: number = 7;
let edadUsuario: number = 25;
const nombreUsuario: string = "Ana";

const area: number = calcularArea(largo, ancho);
console.log(`${nombreProyecto} tiene un área de ${area}.`);
console.log(saludar(nombreUsuario, edadUsuario));

const datosUsuario: [string, number] = ["Carlos", 30]; 
