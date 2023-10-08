const path = require("path");

const filePath = "C:/CODE/Node_projects/Lernings/lesson-03-file-system/files/sample.txt";

/* //dirname
console.log(path.dirname(filePath));
console.log(__dirname);

//basename
console.log(path.basename(filePath));
console.log(__filename);
//extension
console.log(path.extname(filePath)); */

console.log(path.join(path.dirname(filePath),"xyz.txt"))