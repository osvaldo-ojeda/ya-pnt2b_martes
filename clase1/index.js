// variables
// var
var nombre;
console.log("🚀 ~ file: index.js:4 ~ nombre:", nombre);
console.log("🚀 ~ file: index.js:6 ~ apellido:", apellido);
var apellido = "ojeda";
apellido = "Lopez";
console.log("🚀 ~ file: index.js:8 ~ apellido:", apellido);
var apellido = "Gutierrez";
console.log("🚀 ~ file: index.js:10 ~ apellido:", apellido);

// let
// console.log("🚀 ~ file: index.js:10 ~ edad:", edad)// esto no se puede
let edad = "36";
console.log("🚀 ~ file: index.js:10 ~ edad:", edad);
edad = 25;
console.log("🚀 ~ file: index.js:15 ~ edad:", edad);
// let edad=45;// noooooo
// console.log("🚀 ~ file: index.js:19 ~ edad:", edad)
// const
const nacimiento = "26/11/1986";
console.log("🚀 ~ file: index.js:13 ~ nacimiento:", nacimiento);
// nacimiento="lajshdfl"
// console.log("🚀 ~ file: index.js:20 ~ nacimiento:", nacimiento)

// tipos de datos en js

// primitivas
// 1 String
let string = "hola soy una cadena de texto";
console.log("🚀 ~ file: index.js:30 ~ string:", typeof string);

// 2 Number
let number = 2;
console.log("🚀 ~ file: index.js:34 ~ number:", typeof number);

// 3 BigInt
let bigint = 123e4;
console.log("🚀 ~ file: index.js:39 ~ bigint:", typeof bigint);

// 4 Boolean
let boolean = true; //false
console.log("🚀 ~ file: index.js:43 ~ boolean:", typeof boolean);

// 5 undefined
let undefined;
console.log("🚀 ~ file: index.js:47 ~ undefined:", typeof undefined);

// 6 null
let nulo = null;
console.log("🚀 ~ file: index.js:51 ~ nulo:", typeof nulo);
// 7 Symbol

// datos complejos

// 8 Object
const object = {
  key: "value",
  nombre: "Pedlo",
  caminar: function () {
    return "estoy caminando";
  },
};
// object="ya no soy un objeto"
object.nombre = "Diana";
console.log("🚀 ~ file: index.js:64 ~ object:", typeof object);
console.log("🚀 ~ file: index.js:64 ~ object:", object.nombre);

// 9 Array
const array = ["Ana", 23];
console.log("🚀 ~ file: index.js:69 ~ array:", typeof array);
console.log("🚀 ~ file: index.js:69 ~ array:", array[0]);

// 10 Date
let fecha = new Date();
console.log("🚀 ~ file: index.js:76 ~ fecha:", typeof fecha);
console.log("🚀 ~ file: index.js:76 ~ fecha:", fecha);

// 11 Function

saludar();
function saludar() {
  console.log("hola");
}
console.log("🚀 ~ file: index.js:82 ~ saludar ~ saludar:", typeof saludar);
console.log("🚀 ~ file: index.js:82 ~ saludar ~ saludar:", saludar);

const saludarChau = () => console.log("chau");
saludarChau();
console.log("🚀 ~ file: index.js:89 ~ saludarChau:", typeof saludarChau);
console.log("🚀 ~ file: index.js:89 ~ saludarChau:", saludarChau);
