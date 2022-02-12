const res = require('express/lib/response');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

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

    fs.writeFileSync("./db/db.json", JSON.stringify(data));
    res.json(data);
}