// Error Object
// const error = new Error("Somthing went wrong");
// console.log(error.stack);
// console.log(error.message);

// throw new Error("I am error object");
//@ts-ignore
const {CustomError} = require("./CustomError");
// throw new CustomError("This is a custom error object")

//Handle exception using try and catch

/* try{
  doSomething();
} catch(e){
  console.log("Error Occurred !");
  console.log(e)
} */

function doSomething(){
  const data = fetch("localhost:3000/api")
  console.log("From doSothing Function")
  return "From doSothing Function"
}

//Uncaught exception
/* process.on("uncaughtException",(err)=>{
  console.log("There was an uncaught exception",err);
  process.exit(1)
}); */

// doSomething()

//Exception with Promise
/* const promise = new Promise((resolve,reject)=>{
  if(true){
    resolve(doSomething())
  }
  else{
    reject(doSomething())
  }
})

promise.then((val)=>{
  console.log(val)
}).catch((err)=>{
  console.log("Error Occurred !",err)
}) */

// Exception with Async and Await

const someFunction = async () => {
  try{
    await doSomething();    
  } catch(err){
    throw new CustomError(err.message)
  }
}

someFunction();