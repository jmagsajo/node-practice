const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// const msg = notes.getNotes();
const chalkMsg = chalk.white.underline.bold.bgGreen("Success!");

// console.log( msg );
// console.log( chalkMsg );

// console.log( validator.isEmail('jmagsajo@yondu.com') );

// console.log( validator.isURL('https://www.npmjs.com/package/validator') );

// const command = process.argv[2];

// console.log(process.argv);

/* if(command === 'add'){
    console.log('Adding note!');
} else if(command === 'remove'){
    console.log('Removing note!');
} */

yargs.version('1.1.0');

// add, remove, read, lisst

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note description',
            demandOption: true,
            type: 'string' 
        }
    },
    handler: function(argv){
        // console.log('Title: ' + argv.title + ' Desc: '+ argv.body);
        notes.addNote(argv.title, argv.body)
    }
});

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
        // console.log('Removing the note!!');
        notes.removeNote(argv.title)
    }
});

//Create List command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function(){
        console.log('List the notes!!');
    }
});

//Create read command
yargs.command({
    command: 'read',
    describe: 'Read the notes',
    handler: function(){
        console.log('Read the notes!!');
    }
});

yargs.parse();
// console.log(yargs.argv);