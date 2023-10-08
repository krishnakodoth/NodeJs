/* 'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0; */

/* process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
} */

async function getTeams(year, k) {
    const url = `https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=${year}&page=${k}}`;
    const result = await fetch(url);
    const teams = await result.json();
    console.log(teams);
    return teams;
    // write your code here
    // API endpoint template: https://jsonmock.hackerrank.com/api/football_matches?competition=UEFA%20Champions%20League&year=<YEAR>&page=<PAGE_NUMBER>
}

async function main() {
  // const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const year = 2011; // parseInt(readLine().trim());
  const k = 2; ///parseInt(readLine().trim());

  console.log(year);
  const teams = await getTeams(year, k);

  /* for (const team of teams) {
    ws.write(`${team}\n`);
  } */
}

main();