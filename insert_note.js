const client = require('./client');

let newNote = {
  title: 'New Note',
  content: 'New Note content'
}

client.insert(newNote, (err, note) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('New Note created successfully', note);
})