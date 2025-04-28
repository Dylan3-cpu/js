const miSet = new Set(); //crea un set vacio
const primerset = new Set([1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10]); 
for (const numero of primerset) { //recorre el set y lo muestra en consola
    console.log(numero); //muestra el 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
console.log(primerset.size); //muestra el numero de elementos que hay en el set, en este caso 10 porque no lo vaciamos
