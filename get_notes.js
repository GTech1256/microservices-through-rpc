const client = require('./client');

client.list({}, (err, notes) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Successfully fetch List notes:');
  console.log(notes);
})