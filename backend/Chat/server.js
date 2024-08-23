require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const Redis = require('ioredis');
const cors = require('cors');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
});

const redis = new Redis({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  password: process.env.REDIS_PASSWORD,
});

redis.on('connect', () => {
  console.log('Connected to Redis');
});

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('message', (msg) => {
    io.emit('message', msg);
    redis.lpush('messages', msg);
  });

  redis.lrange('messages', 0, -1, (err, messages) => {
    if (messages) {
      socket.emit('previousMessages', messages.reverse());
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
