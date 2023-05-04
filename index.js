
//-------------------------------------------------------------------------------------------------------------------
const db = require('./database');

const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
app.use(cors())

const server = require('http').createServer(app);
const io = require('socket.io')(server);

// Create a map of rooms
const rooms = new Map();
const players = {};

io.on('connection', (socket) => {
  console.log(`A user ${socket.id} connected.`);

    socket.emit('message', 'Hello from server!');
    



    socket.on('create room', () => {
        createRoom("room created", { text: "room created" }, (ack) => console.log(ack), 5000);
    });

    socket.on('start race', () => {
        startRace("race started", { text: "race started" }, (ack) => console.log(ack), 5000);
    });

  socket.on('disconnect', () => {
    console.log('A user disconnected.');
    delete players[socket.id];
  });
});

function createRoom(event, data, callback, delay) {
    // Use setTimeout to invoke the socket.emit method after the delay
    setTimeout(() => socket.emit(event, data, callback), delay);
}

function startRace(event, data, callback, delay) {
    // Use setTimeout to invoke the socket.emit method after the delay
    setTimeout(() => socket.emit(event, data, callback), delay);
}

server.listen(process.env.PORT || 3000,
	() => console.log(`Server has started.`));

//--------------------------------------------------------------------------------------------------------------------------

