const fs = require('fs');
const path = require('path');

module.exports = app => {

    // notes database
    fs.readFile("db/db.json","utf8", (err, data) => {

        if (err) throw err;

        const notes = JSON.parse(data);

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

        // display notes.html file
        app.get('/notes', function(req, res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

        // display index.html as a default
        app.get('*', function (req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        }) ;

        // update the JSON file when a note is added
        function updateDb() {
            fs.writeFile("db/db.josn", JSON.stringify(notes, '\t'), err => {
                if (err) throw err;
                return true;
            });
        }

    });


}