require('dotenv').config();
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const { initRedis, getRedis, closeRedis } = require('./db/init.redis');

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true,
  },
});

// Khởi tạo Redis và lấy kết nối Redis
initRedis();
const { instanceConnect: redisClient } = getRedis();

io.on('connection', async(socket) => {
  console.log('A user connected');

  // Xử lý yêu cầu lấy lại tin nhắn cũ
  socket.on('getPreviousMessages', async () => {
    try {
      const messages = await redisClient.lRange('messages', 0, -1);
      if (messages) {
        const parsedMessages = messages.map(msg => JSON.parse(msg)).reverse();
        socket.emit('previousMessages', parsedMessages);
      }
    } catch (err) {
      console.error('Error fetching previous messages:', err);
    }
  });

  // Xử lý tin nhắn mới từ client
  socket.on('message', async (msg) => {
    try {
      // Gửi tin nhắn cho tất cả người dùng
      io.emit('message', msg);

      // Lưu tin nhắn vào Redis và chỉ giữ lại 100 tin nhắn gần nhất
      await redisClient.lPush('messages', JSON.stringify(msg));
      await redisClient.lTrim('messages', 0, 99);
    } catch (err) {
      console.error('Error saving message:', err);
    }
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

const handleShutdown = () => {
  console.log('Shutting down server...');
  closeRedis();
  server.close(() => {
    console.log('Server closed');
    process.exit(0);
  });
};

process.on('SIGINT', handleShutdown);
process.on('SIGTERM', handleShutdown);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
