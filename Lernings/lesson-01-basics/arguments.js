// console.log(process.argv);
/* process.argv.forEach((element,index) => {
  console.log(`${index} : ${element}`)
}); */
/* 

const argNew = minimist(process.argv.slice(2)[0]);
console.log(argNew)
 */
const minimist = require("minimist")
var argv = minimist(process.argv.slice(2));
console.log(argv.name);