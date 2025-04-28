const miSet = new Set();
const numeros = new Set([1, 2, 3, 4, 4, 5]); //esto elimina el repetido, no pregunta, lo hace automaticamente
console.log(numeros); // Set(5) { 1, 2, 3, 4, 5 }



miSet.add(1); //agrega el 1 al set
miSet.add(2); //agrega el 2 al set y podemos seguir asi sucesivamente
miSet.delete(1); //elimina el 1 del set o sea que en consola solo sale el 2
miSet.clear(); //elimina todo el set, lo deja vacio
console.log(size); //muestra el numero de elementos que hay en el set, en este caso 0 porque lo vaciamos
const numeros2 = new Set([1, 2, 3, 4, 4, 5]); //esto elimina el repetido, no pregunta, lo hace automaticamente
for (const numero of numeros2) { //recorre el set y lo muestra en consola
    console.log(numero); //muestra el 1, 2, 3, 4, 5
}
const arraynum = Array.from(numeros2); //convierte el set en un array, lo transforma
console.log(arraynum); //muestra el array [ 1, 2, 3, 4, 5 ]


const duplicados = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; //array con numeros duplicados
const sinDuplicados = [...new Set(duplicados)]; //elimina los duplicados del array y lo convierte en un set, luego lo transforma en un array
console.log(sinDuplicados); //muestra el array [ 1, 2, 3, 4, 5 ] sin duplicados
