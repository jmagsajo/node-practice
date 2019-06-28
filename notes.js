const fs = require('fs');
const chalk = require('chalk');

// const getNotes = function(){
const getNotes = () => {
    return 'Notess...';
}

// const addNote = function(title, body){
const addNote = (title, body) => {
    const notes = loadNotes();
    /* const duplicateNotes = notes.filter(function(note){
        return note.title === title;
    }); */

    // const duplicateNotes = notes.filter( note => note.title === title );
    const duplicateNote = notes.find(note => note.title === title);

    // if (duplicateNotes.length === 0 ){
    if (!duplicateNote){
        notes.push({
            title : title,
            body : body
        });
    
        saveNotes(notes);
        console.log("New note added!");
    }else{
        console.log("Note title taken!");
    }

}

// const saveNotes = function(notes){
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// const loadNotes = function(){
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();

        return JSON.parse(dataJSON);
    }catch (e){
        return [];
    }
    
}

// const removeNote = function(title){
const removeNote = (title) => {
    const notes = loadNotes();
    /* const removedNote = notes.filter(function(note){
        return note.title !== title;
    }); */

    const removedNote = notes.filter( note => note.title !== title );

    if (removedNote.length === notes.length ){
        console.log(chalk.bgRed("No note found!"));
    }else{
        saveNotes(removedNote);
        console.log(chalk.bgGreen("Note removed!"));
    }
}

const listNotes = () => {
    const notes = loadNotes();
    
    console.log( chalk.green('Your notes'));
    notes.forEach(note => {
        console.log( "Title: " + chalk.green(note.title) + " Body: " + chalk.green(note.body) );
    });
}

const readNote = (title) => {

    const notes = loadNotes();

    const note = notes.find(note => note.title === title);
    
    // debugger
    
    if(note){
        
        console.log( chalk.green(note.title) );
        console.log( note.body );

    }else{
        console.log( chalk.red("No note found!") );
    }

}

/* module.exports = {
    getNotes : getNotes,
    addNote : addNote,
    removeNote
}; */

module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
};