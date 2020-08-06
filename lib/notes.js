const fs = require('fs');
const path = require('path');

function createNote(body, notesObj) {
    const note = body;
    notesObj.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesObj, null, 2),
    );
    return note;
};

module.exports = { createNote };