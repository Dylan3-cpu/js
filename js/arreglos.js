let frutas = [];
//push agrega al final del arreglo o la lista
frutas.push("manzana");
console.log(frutas);
console.log(frutas.length); //length devuelve la cantidad de elementos que hay en el arreglo o la lista
//pop se utiliza para eliminar el ultimo elemento del arreglo o la lista
frutas.pop(); 
console.log(frutas);
console.log(frutas.length);
let numeros = [1,2,3,4,5];
let eliminados = numeros.splice(2,2);
console.log(numeros);
console.log(eliminados);
let frutos = ["manzana", "banano", "cereza"];
frutos.splice(1, 0, "kiwi", "mango");
console.log(frutos); 
let colores = ["rojo","azul","verde"];
colores.splice(1, 1, "amarillo");
console.log(colores);
let animales = ["perro", "gato", "conejo"];
let resultado = animales.splice(1, 1, "tigre", "leon");
console.log(animales); // ["perro", "tigre", "leon", "conejo"]
console.log(resultado); // ["gato"]
let letras = ["a", "b", "c", "d", "e"];
letras.splice(2);
console.log(letras); // ["a", "b",]
