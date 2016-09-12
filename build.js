'use strict';
// TODO: Add tests and linting
const fs = require('fs');
const path = require('path');
const encoding = 'utf8';


// Check we have a path
const gamePath = process.env.RIMWORLD_PATH || process.argv[2];
if(!gamePath){
    throw new Error('Need to provide a path');
}

const start = require('rimworld-definitions-parser');

// If not provided as an argument, pass the gamePath variable
if(!process.argv[2]){
    start(gamePath);
}

const pkg = require('./package.json');
const version = fs.readFileSync(path.join(gamePath,'Version.txt'),{encoding});

pkg.version = version.split(' ')[0];

// Update package.json with the current version of the game processed and pretty-print it
const modifiedPackage = JSON.stringify(pkg,'false',2);

fs.writeFileSync(path.join(__dirname,'package.json'),modifiedPackage,{encoding});
