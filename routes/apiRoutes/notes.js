const router = require("express").Router();
const db = require('../../db/db.json');
const {
    createNote,
    validateNote
} = require('../../lib/notes');

router.get('/notes', (req, res) => {
    let result = db;
    res.json(result);
})

router.post('/notes', (res, req) => {
    req.body.id = db.length.toString();

    const note = createNote(req.body, db);

    res.json(note);
});

module.exports = router;