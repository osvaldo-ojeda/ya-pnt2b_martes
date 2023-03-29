// array
const numeros = [1, 2, 3, 4];
let index = 3;
console.log("🚀 ----------------------------------------🚀");
console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros);
console.log("🚀 esto es para saber el largo de un array", numeros.length);
console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros[1]);
console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros[index]);
console.log("🚀 ----------------------------------------🚀");
// formas de agregar datos a un array
numeros[numeros.length] = 0;
console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros);
// evitar
// numeros[-2]="numero negativo"
//  console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros[5])
// evitar
console.log("🚀 numeros:", numeros);
// console.log("🚀  indice negativo:", numeros["-2"]);

// push agrega al final 
numeros.push("uno");
console.log("🚀 numeros:", numeros);
// unshift agrega al pricipio
numeros.unshift("soy el primero")
console.log("🚀 -----------------------------------------🚀")
console.log("🚀 ~ file: index.js:25 ~ numeros:", numeros)
console.log("🚀 -----------------------------------------🚀")


