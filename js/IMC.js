const menu = "1. Calcular IMC\n2. Salir\n";
const bienvenida = "Bienvenido a la calculadora de IMC";
const despedida = "Gracias por usar la calculadora de IMC";
const ingresoPeso = "Ingrese su peso en kg: ";
const ingresoAltura = "Ingrese su altura en metros: ";
const resultado = "Su IMC es: ";
const errorOpcion = "Opción no válida, por favor intente de nuevo.";
const errorIngreso = "Error, ingrese un número válido.";
alert(bienvenida);
let opcion = prompt(menu);
let peso = 0;
do {
    switch (opcion) {
case "1":
        peso = prompt(ingresoPeso);
        if (isNaN(peso)) {
            alert(errorIngreso);
        } else {
            let altura = prompt(ingresoAltura);
            if (isNaN(altura)) {
                alert(errorIngreso);
            } else {
                let imc = calcularIMC(peso, altura);
                alert(resultado + imc);
            }
        }
        break;
case "2":
        alert(despedida);
        break;
default:
        alert(errorOpcion);
    }
    opcion = prompt(menu);
}
while (valor !== "2");
function calcularIMC(peso, altura) {
    if (altura <= 0) {
        alert("La altura no puede ser cero o negativa.");
        return null;
    }
    return peso / (altura * altura);
}
