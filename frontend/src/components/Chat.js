'use client'

import { useState, useEffect } from 'react';
import io from 'socket.io-client';

let socket;

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  // Tên người dùng mặc định
  const username = 'user';

  useEffect(() => {
    if (!socket) {
      socket = io('http://localhost:4000');
    }

    // Yêu cầu tin nhắn trước đó từ server khi kết nối
    socket.emit('getPreviousMessages');

    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    socket.on('previousMessages', (msgs) => {
      setMessages(msgs);
    });

    return () => {
      socket.off('message');
      socket.off('previousMessages');
    };
  }, []);

  const sendMessage = () => {
    if (message.trim() === '') {
      alert('Please enter a message.');
      return;
    }

    const messageData = {
      username,
      message,
      timestamp: new Date().toISOString() // Thêm thời gian gửi tin nhắn
    };

    socket.emit('message', messageData);
    setMessage('');
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${strMinutes} ${ampm}`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      <h1>Realtime Chat</h1>
      
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.username}</strong>: {msg.message} <em>({formatTimestamp(msg.timestamp)})</em>
          </div>
        ))}
      </div>
      
      <div>
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
