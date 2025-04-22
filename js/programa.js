const plata = prompt("¿Cuánto dinero tienes en pesos?");
const moneda = prompt("¿A qué moneda quieres convertir? (dolar, euro, yenes)").toLowerCase();
const tasas = {
    "dolar": 0.00023,
    "euro": 0.00020,
    "yenes":0.033,
}:

function convertirMoneda() {
    let opciones;
