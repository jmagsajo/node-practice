const validator = require('validator');
const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
const chalkMsg = chalk.white.underline.bold.bgGreen("Success!");

console.log( msg );
console.log( chalkMsg );

console.log( validator.isEmail('jmagsajo@yondu.com') );

console.log( validator.isURL('https://www.npmjs.com/package/validator') );