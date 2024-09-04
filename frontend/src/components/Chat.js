'use client'

import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let socket;

export default function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const textareaRef = useRef(null);

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

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto'; // Đặt lại chiều cao
      // Cập nhật chiều cao, nhưng giới hạn tối đa bằng 2 dòng
      const lineHeight = parseInt(window.getComputedStyle(textarea).lineHeight, 24);
      const maxHeight = 2 * lineHeight; // Chiều cao tối đa cho 2 dòng
      textarea.style.height = `${Math.min(textarea.scrollHeight, maxHeight)}px`;
    }
  }, [message]);

  const sendMessage = () => {
    if (message.trim() === '') {
      return;
    }

    const messageData = {
      username,
      message,
      timestamp: new Date().toISOString(), // Thêm thời gian gửi tin nhắn
    };

    socket.emit('message', messageData);
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Ngăn chặn việc xuống dòng
      sendMessage();
    }
  };

  return (
    <Card 
        border="secondary"
        bg='Light'
        text='black'
    >
        <Card.Header>Chat room</Card.Header>
        <Card.Body className="d-flex flex-column">
          <Card.Text className="overflow-auto" style={{maxHeight:"400px"}}>
              {messages.map((msg, index) => (
                  <p key={index} className='mb-2 text-wrap'>
                      <strong>{msg.username}</strong>: {msg.message}
                  </p>
              ))}
          </Card.Text>
          <InputGroup className="mt-2">
                <Form.Control
                    as="textarea"
                    placeholder="Type your message"
                    aria-label="Message"
                    aria-describedby="basic-addon2"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={handleKeyPress}
                    ref={textareaRef}
                    style={{
                        boxShadow: "none",
                        border: "solid grey 1px",
                        resize: "none",
                        overflowY: "scroll",
                        height: "auto",
                        maxHeight: "100px",
                        lineHeight: "1.5",
                    }}
                    rows={1}
                    className="text-wrap custom-scroll"
                />
                <Button variant="outline-danger" id="button-addon2" onClick={sendMessage} style={{ border: "solid grey 1px" }}>
                <FontAwesomeIcon icon={faPaperPlane} size="md" />
                </Button>
            </InputGroup>

        </Card.Body>
    </Card>
  );
}
