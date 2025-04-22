const Menu = "1.Dolar\n2.Euro\n3. Yenes\n4. Salir\n";
const Bienvenida = "Bienvenido a la calculadora de divisas";
const Despedida = "Gracias por usar la calculadora de divisas";
const Ingreso = "Ingrese la cantidad a convertir: ";
const Resultado = "El resultado es: ";
const Error = "Opción no válida, por favor intente de nuevo.";
const ErrorIngreso = "Error, ingrese un número válido.";
alert(Bienvenida);
let valor = prompt(Menu);
let cantidad = 0;
do {
    switch (valor) {
        case "1":
            cantidad = prompt(Ingreso);
            if (isNaN(cantidad)) {
                alert(ErrorIngreso);
            } else {
                let resultado = convertirMoneda(cantidad, 0.00023);
                alert(Resultado + resultado + " Dolares");
            }
            break;
        case "2":
            cantidad = prompt(Ingreso);
            if (isNaN(cantidad)) {
                alert(ErrorIngreso);
            } else {
                let resultado = convertirMoneda(cantidad, 0.00020);
                alert(Resultado + resultado + " Euros");
            }
            break;
        case "3":
            cantidad = prompt(Ingreso);
            if (isNaN(cantidad)) {
                alert(ErrorIngreso);
            } else {
                let resultado = convertirMoneda(cantidad, 0.0033);
                alert(Resultado + resultado + " Yenes");
            }
            break;
        case "4":
            alert(Despedida);
            break;
        default:
            alert(Error);
    }
    valor = prompt(Menu);
}
while (valor !== "4");
function convertirMoneda(cantidad, tasa) {
    return cantidad * tasa;
}
