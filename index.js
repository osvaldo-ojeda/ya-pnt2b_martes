// array
const numeros = [1, 2, 3, 4];
let index = 3;
// console.log("🚀 ----------------------------------------🚀");
// console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros);
// console.log("🚀 esto es para saber el largo de un array", numeros.length);
// console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros[1]);
// console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros[index]);
// console.log("🚀 ----------------------------------------🚀");
// formas de agregar datos a un array
numeros[numeros.length] = 0;
// console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros);
// evitar
// numeros[-2]="numero negativo"
//  console.log("🚀 ~ file: index.js:3 ~ numeros:", numeros[5])
// evitar
// console.log("🚀 numeros:", numeros);
// console.log("🚀  indice negativo:", numeros["-2"]);

// push agrega al final
numeros.push("uno");
console.log("🚀 numeros:", numeros);
// unshift agrega al pricipio
numeros.unshift("soy el primero");
// console.log("🚀 -----------------------------------------🚀");
// console.log("🚀 ~ file: index.js:25 ~ numeros:", numeros);
// console.log("🚀 -----------------------------------------🚀");

// quitar cosas de un array
// pop quita el ultimo elemento de un array
let pop = numeros.pop();
// console.log("🚀 -----------------------------------------🚀");
// console.log("🚀 ~ file: index.js:32 ~ numeros:", numeros);
// console.log("🚀 ~ file: index.js:32 ~ numeros:", pop);
// console.log("🚀 -----------------------------------------🚀");

// shift quita del principio del array
let shift = numeros.shift();
// console.log("🚀 -----------------------------------------🚀");
// console.log("🚀 ~ file: index.js:39 ~ numeros:", numeros);
// console.log("🚀 ~ file: index.js:39 ~ numeros:", shift);
// console.log("🚀 -----------------------------------------🚀");

// --------------------------------------
const userData = [
  "Pedro",
  "Gonzalez",
  32,
  ["pichicho", "popito"],
  { cp: 1704 },
];
// convertir un array en un str

// console.log("🚀 -------------------------------------------🚀");
// console.log("🚀 ~ file: index.js:46 ~ userData:", userData);
// let str1=userData.toLocaleString()
// console.log("🚀 ~ file: index.js:46 ~ userData:", str1)
let str = userData.toString();
// console.log("🚀 ~ file: index.js:46 ~ userData:", str);

let join = userData.join("-");
// console.log("🚀 ~ file: index.js:46 ~ userData:", userData);
// console.log("🚀 ~ file: index.js:46 ~ userData:", join);
// console.log("🚀 -------------------------------------------🚀");

// pasar de str a array con un split
let split = join.split("-");
// console.log("🚀 -------------------------------------🚀");
// console.log("🚀 ~ file: index.js:68 ~ split:", split);
// console.log("🚀 -------------------------------------🚀");
// ---------------

// copiar un array
let nombre="osvaldo"
let copyNombre=nombre
console.log("🚀 -----------------------------------------------🚀")
console.log("🚀  nombre:", nombre)
console.log("🚀  copyNombre:", copyNombre)
copyNombre="Oswald"
console.log("🚀  nombre:", nombre)
console.log("🚀  copyNombre:", copyNombre)
console.log("🚀 -----------------------------------------------🚀")


const user = ["Pedro", "Gonzalez", 32];
const userCopy=user
userCopy[2]=48
console.log("🚀 -------------------------------------------🚀")
console.log("🚀  user:", userCopy)
console.log("🚀  userCopy:", userCopy)
console.log("🚀 -------------------------------------------🚀")


// copia superficial
// slice
const userSliceHard=[user[0], user[1], user[2]]
const userSlice=user.slice()
userSlice[2]=90
console.log("🚀 ---------------------------------------------🚀")
console.log("🚀 userSlice:", user)
console.log("🚀 userSlice:", userSlice)
console.log("🚀 userSliceHard:", userSliceHard)
console.log("🚀 ---------------------------------------------🚀")
