const grpc = require('grpc');
const uuidv1 = require('uuid/v1');

const notesProto = grpc.load('notes.proto');


const notes = [
  { id: '1', title: 'Note 1', content: 'Content 1'},
  { id: '2', title: 'Note 2', content: 'Content 2'}
]



const server = new grpc.Server();

server.addService(notesProto.NoteService.service, {
  /**
   *
   * The call is the request from the Client 
   * while the callback is a function we will invoke 
   * to return the response to the Client.
   *
   * @param {ServerReadableStream} call The call object
   * @param {grpc.Server~sendUnaryData} cb 	The callback to call to respond to the request
   */
  list: (call, cb) => {
      cb(null, notes);
  },
  insert: ({ request: note }, cb) => {
    note.id = uuidv1();

    notes.push(note);

    cb(null, note);
  },
  delete: ({ request }, cb) => {
    let existingNoteIndex = notes.findIndex((n) => n.id == request.id)

    if (existingNoteIndex != -1) {
      notes.splice(existingNoteIndex, 1)
      cb(null, notes[existingNoteIndex]);
      return;
    }

    cb({
        code: grpc.status.NOT_FOUND,
        details: "Not found"
    })
  }
})


server.bind(
  '127.0.0.1:50051',
  grpc.ServerCredentials.createInsecure()
);

console.log('Server running at http://127.0.0.1:50051')
server.start()