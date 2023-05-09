const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {

    // read in and display notes
    app.get("/api/notes", (req, res) => {
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            res.json(JSON.parse(data));
        });
    });

    // create new note
    app.post("/api/notes", (req, res) => {
        let newNote = req.body;
        newNote.id = uuidv4();
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            let notes = JSON.parse(data);
            notes.push(newNote);
            fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                if (err) throw err;
                res.json(notes);
            });
        });
    });

    // delete note
    app.delete("/api/notes/:id", (req, res) => {
        const id = req.params.id;
        fs.readFile('./db/db.json', (err, data) => {
            if (err) throw err;
            const notes = JSON.parse(data);
            let newNotesArr = notes.filter((note) => {
                return id !== note.id;
            })
            fs.writeFile('./db/db.json', JSON.stringify(newNotesArr), (err) => {
                if (err) throw err;
                res.json(newNotesArr);
            });
        });
    });
}