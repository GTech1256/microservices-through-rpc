const client = require('./client');

client.delete({ id: '1' }, (err, note) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Note Has been successfully deleted');
  console.log(note);
})