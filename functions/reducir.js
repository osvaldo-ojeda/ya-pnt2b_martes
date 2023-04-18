// function reducir(array) {
//   const obj = {};
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     // if (obj[element]) {
//     //   // obj[element]=obj[element]+1;
//     //   // obj[element]+=1;
//     //   obj[element]++
//     // } else {
//     //   obj[element] = 1;
//     // }
//     // // ------------
//     //  obj[element] ? obj[element]++ : (obj[element] = 1);
//     // ------------
//      obj[element]++ || (obj[element] = 1);
//   }
//   return obj;
// }

function reducir(array) {
  return array.reduce((acumulador, element, index, array) => {
    //   acumulador[element] ? acumulador[element]++ : (acumulador[element] = 1);
    acumulador[element]++ || (acumulador[element] = 1);
    return acumulador;
  }, {});
}

module.exports=reducir