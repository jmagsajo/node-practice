const fs = require('fs');

/* const book = {
    title : 'Ego is the Enemy',
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
fs.writeFileSync('1-json.json', bookJSON); */

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Joseph Magsajo";
data.planet = "Mars";
data.age = 28;
console.log(data); 

fs.writeFileSync('1-json.json',  JSON.stringify(data));