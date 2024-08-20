// src/Chat.jsx
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('message', (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => socket.off('message');
  }, []);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit('message', message);
      socket.emit('message', { text: message, user: 'User1' });

      setMessage('');
    }
  };

  return (
    <div className="p-4">
      <div className="border border-gray-300 p-2 mb-2 h-64 overflow-y-scroll">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border p-2 mr-2"
      />
      <button onClick={sendMessage} className="bg-blue-500 text-white p-2">
        Send
      </button>
    </div>
  );
}

export default Chat;
