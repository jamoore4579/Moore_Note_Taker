const fs = require('fs');
const path = require('path');
const { isModuleNamespaceObject } = require('util/types');

module.exports = app => {

    // notes database
    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        let notes = JSON.parse(data);

        // api/notes GET route
        app.get("/api/notes", function(req, res) {
            res.json(notes);
        });

        // api/notes POST route
        app.post("/api/notes", function(req, res) {
            let newNote = req.body;
            notes.push(newNote);
            updateDb();
            return console.log("New note was added: "+newNote.title);
        });

        // retrieve note with specific ID
        app.get("/api/notes/:id", function(req, res) {
            res.json(notes[req.params.id]);
        });
    })
}