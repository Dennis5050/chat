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
      socket.emit('message', { text: message, user: 'User1' });
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-grow p-4 overflow-y-scroll">
        <div className="bg-white border border-gray-300 rounded-lg p-4 shadow-md h-full overflow-y-scroll">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 flex ${
                msg.user === 'User1' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`${
                  msg.user === 'User1'
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-200 text-gray-800'
                } p-2 rounded-lg max-w-xs`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex p-4 bg-white border-t border-gray-300">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="flex-grow border rounded-full p-2 mr-2 outline-none focus:border-blue-500"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white rounded-full p-3 flex items-center justify-center"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
