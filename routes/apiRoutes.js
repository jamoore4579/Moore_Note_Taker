const fs = require('fs');
let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function(app) {

    // set the GET route for notes
    app.get("/api/notes", function(req, res) {
        res.json(data)
    });

    // set the GET route for notes ID
    app.get("/api/notes/:id", function(req, res) {
        res.json(data[Number(req.params.id)]);
    });

    // set the POST route for notes
    app.post("/api/notes", function(req, res) {
        let newNote = req.body;
        let uniqueId = (data.length).toString();
        console.log(uniqueId);
        newNote.id = uniqueId;
        data.push(newNote);

        fs.writeFileSync("./db/db.json", JSON.stringify(data), function(err) {
            if (err) throw (err);
        });

        res.json(data);
    });

    app.delete("/api/notes/:id", function(req, res) {
        let noteId = req.params.id;
        let newId = 0;
        console.log(`Deleting note with ID ${noteId}`);
        data = data.filter(currentNote => {
            return currentNote.id != noteId;
        });
        for (currentNote of data) {
            currentNote.id = newId.toString();
            newId++;
        }
        fs.writeFileSync("./db/db.json", JSON.stringify(data));
        res.json(data);
    });
}