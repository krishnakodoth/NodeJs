
const numbers = [1,2,3,4]

const res1 = numbers.map(val => val*2);
const res1 = numbers.map()
console.log("res1", res1);
console.log('numbers',numbers)

const res2 = numbers.forEach((val, i, arr) => arr[i] = val+1);
console.log('numbers',numbers)
console.log("res2", res2);