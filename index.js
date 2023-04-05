const bienvenida= require("./functions/bienvenida")


const nombres = ["Matias", "Paola", "Luz", "Osvaldito", { apodos: ["Matu"] }];
//esto no es una copiaaaaaa
// const copiaNombres=nombres
//copia a mano
const copiaNombresAmano = [nombres[0], nombres[1], nombres[2], nombres[3]];

//copia con for

function copiaFor(array) {
  const newArray = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    // newArray[index]=array[index]
    newArray.push(element);
  }
  return newArray;
}

const copiaForEach = (array) => {
  const newArray = [];
  array.forEach((element, index, array) => {
    // console.log("🚀 element:", element);
    // console.log("🚀 index:", index);
    // console.log("🚀 array:", array);
    // console.log("🚀 this:", this);
    newArray.push(element);
  }, this);
  return newArray;
};

const copiaMap = (array) => {
  //   return array.map((element) => {
  //     return element.toUpperCase();
  //   });
  const newArray = array.map((element) => {
    return element;
    // return element.toUpperCase();
  });
  return newArray;
};

// copia con slice
const copiaSlice = nombres.slice(2, 3);
// copa spread
const copiaSpread = [...nombres, ...copiaSlice];
// copiaSpread[4].apodos[0] = "";
// copiaSpread[0] = "Pablo";
// copia con Object.assign
const copiaObjetAssign = Object.assign([], nombres);

// copias profundas
const copiaJSON = JSON.stringify(nombres);
const copiaJSONParse = JSON.parse(copiaJSON);
copiaJSONParse[4].apodos[0] = "Matute";

const copiaStructuredClone = structuredClone(nombres);

console.log(
  "🚀 ------------------------------------------------------------🚀"
);
console.log("🚀 nombres:", nombres);
console.log("🚀 copiaNombresAmano:", copiaNombresAmano);
console.log("🚀 copiaFor:", copiaFor(nombres));
console.log("🚀 copiaForEach:", copiaForEach(nombres));
console.log("🚀 copiaMap:", copiaMap(nombres));
console.log("🚀 copiaSlice:", copiaSlice);
console.log("🚀 copiaSpread:", copiaSpread);
console.log("🚀 copiaSpread4:", (copiaSpread[4].apodos[0] = ""));
console.log("🚀 copiaObjetAssign:", copiaObjetAssign);
console.log("🚀 copiaJSON:", copiaJSON[2]);
console.log("🚀 copiaJSONParse:", copiaJSONParse);
console.log("🚀 copiaStructuredClone:", copiaStructuredClone);
console.log(
  "🚀 ------------------------------------------------------------🚀"
);
// ejercicio
// const numeros = [1, 2, 3, 4, 5];
// for (let index = numeros.length; index > 0; index--) {
//   numeros.pop();
// }

const numeros = [1, 2, 3, 4, 5];
 numeros.splice(0);
// numeros.length=0


console.log("🚀 -----------------------------------------🚀");
console.log("🚀  numeros:", numeros);
console.log("🚀  numeros:", numeros[0]);
console.log("🚀 -----------------------------------------🚀");

bienvenida()

// Reducir Ejercicio: resumir las instancias de cada uno de estos elementos en un solo objeto
// Ejemplo:
// const mascotas = ['perro', 'gato', 'perro'];
// Resultado: { 'perro': 2, 'gato': 1 }

const cosas = [
    "pelota",
    "pelota",
    "auto",
    "silla",
    "auto",
    "kuka",
    "compu",
    "kuka",
    "kuka",
    "compu",
    "pelota",
    "moto",
    "avion",
    "avion",
    "planta",
    "planta",
    "planta",
  ];