const router = require('express').Router();
const fs = require('fs');
const uuid = require('../helpers/uuid');



// Handle Get of existing notes, to populate on page
// Read the db.json file
router.get('/notes', function (req, res) {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    dbData = JSON.parse(data);
    res.send(dbData);
  });
});




// Handle the Post of new notes when user clicks save
// Add a unique ID to each note
// Write the note to the db.json file
router.post('/notes', function (req, res) {
  const userNotes = req.body;

  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    dbData = JSON.parse(data);
    dbData.push(userNotes);
    dbData.forEach((note, index) => {
      note.id = uuid();
      return dbData;
    });
    console.log(dbData);

    stringData = JSON.stringify(dbData);

    fs.writeFile('./db/db.json', stringData, (err, data) => {
      if (err) throw err;
    });
  });
  res.send('Note Added');
});






// Handle the Delete of notes when user clicks delete

router.delete('/notes/:id', function (req, res) {
  // Get the ID of the note to delete
  const deleteNote = req.params.id;
  console.log(`Delete note ID: ${deleteNote}`);

  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;

  
    dbData = JSON.parse(data);
    // Loop through the notes in the db.json file
    // If the note ID matches the ID of the note to delete, remove it
    for (let i = 0; i < dbData.length; i++) {
      if (dbData[i].id === deleteNote) {
        dbData.splice([i], 1);
      }
    }
    console.log(dbData);
    stringData = JSON.stringify(dbData);

    fs.writeFile('./db/db.json', stringData, (err, data) => {
      if (err) throw err;
    });
  });


  // Send a response back to the client
  res.status(204).send();
});

module.exports = router;