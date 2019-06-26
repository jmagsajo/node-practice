const fs = require('fs');

fs.access('notes.txt', fs.constants.F_OK | fs.constants.W_OK, (err) => {
    if (err) {
        fs.writeFileSync('notes.txt', 'fileSystem!!');
    } else {
        fs.appendFileSync('notes.txt', '\n data to append');
    }
});