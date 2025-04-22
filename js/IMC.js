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
            let peso = prompt(ingresoPeso);
            if (isNaN(peso)) {
                alert(errorIngreso);
            } else {
                let altura = prompt(ingresoAltura);
                if (isNaN(altura)) {
                    alert(errorIngreso);
                } else {
                    let imc = calcularIMC(peso, altura);
                
                    if (imc < 18.5) {
                        alert(resultado + imc.toFixed((2)) + "\nUsted está bajo de peso.");
                    }
                    else if (imc >= 18.5 && imc < 24.9) {
                        alert(resultado + imc.toFixed((2)) + "\nUsted tiene un peso normal.");
                    } else if (imc >= 25 && imc < 29.9) {
                        alert(resultado + imc.toFixed((2)) + "\nUsted tiene sobrepeso.");
                    } else {
                        alert(resultado + imc.toFixed((2)) + "\nUsted tiene obesidad.");
                    }
                }
            break;
            }
        case "2":
                alert(despedida);
                break;
}
}
while (valor !== "2");
function calcularIMC(peso, altura) {
    if (altura <= 0) {
        alert("La altura no puede ser cero o negativa.");
        return null;
    }
    return peso / (altura * altura);
}
