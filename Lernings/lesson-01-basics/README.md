# ![Node Js](https://nodejs.org/static/images/logo.svg)

### Get node version 
#### `node --version` Or `node -v` 
#####  `v14.21.3`
### Get npm version
#### `npm --version` Or `npm -v` 
#####  `8.15.0`
#
## `npm init`
- The `“npm init”` command will initialize a project and create the package. json file. There are a few questions asked by NPM each time the “init” command is run so Kent demonstrates how to update the . npmrc file with pre-populated default values.

### Create a start script inside `package.json`
#### "start": "node index.js",
### We can run javascript code using `node <js-file-name.js>`
### node index.js
#### Or `npm start` - which we configured inside package.json file as script
#
### For each change in the file , we need to run the `npm start` command.
### nodemon
nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

### `npm install --save-dev nodemon`
### we can run the js with the help of nodemon - `nodemon index.js`

# working with env variabbles
#### `npm i dotenv`

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology.


## REPL
REPL stands for Read-Eval-Print Loop. It's an interactive programming environment that allows you to enter and execute commands directly. In the context of Node.js, the Node.js REPL provides a command-line interface for interacting with the Node.js runtime.

Here's what each part of the acronym means:

Read: It reads the user's input, whether it's a line of code or a command.

Eval: It evaluates the user's input. This means it processes the line of code or command and determines what it does.

Print: It prints the result of the evaluation. This is the output you see in the console after you've entered a command.

Loop: After printing the result, it loops back to the "Read" step, so you can enter another command.

The Node.js REPL is very useful for quickly testing out JavaScript code snippets, experimenting with language features, and debugging small pieces of code. It's also handy for learning and exploring the JavaScript language.


### `npm i minimist`
This module is the guts of optimist's argument parser without all the fanciful decoration.
##### `node .\arguments.js --name=kp`
```js
const minimist = require("minimist")
var argv = minimist(process.argv.slice(2));
console.log(argv.name);
```


## Progress Bar
### `npm install progress`
First we create a ProgressBar, giving it a format string as well as the total, telling the progress bar when it will be considered complete. After that all we need to do is tick() appropriately.

~~~js
var ProgressBar = require('progress');
 
var bar = new ProgressBar(':bar', { total: 10 });
var timer = setInterval(function () {
  bar.tick();
  if (bar.complete) {
    console.log('\ncomplete\n');
    clearInterval(timer);
  }
}, 100);
~~~