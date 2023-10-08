console.log("This is a nodejs tutorial for beginners !")
console.log("This is a first tutorial !")

/* const ford = require("./car");
console.log(ford) */

/* const {data} = require("./car");
console.log(data) */

const {ford,tesla} = require("./car");
console.log(ford)
console.log(tesla)


// Console.log format
console.log(JSON.stringify(ford,null,2))
console.log(JSON.stringify(tesla,undefined,3))