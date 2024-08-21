import React from 'react';
import {
  FaArrowLeft,
  FaVideo,
  FaPhone,
  FaEllipsisV,
  FaSmile,
  FaPaperclip,
  FaCamera,
  FaMicrophone,
} from 'react-icons/fa';

function ChatBox({ activeChat, onBack }) {
  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {/* Navbar */}
      <div className="flex items-center justify-between p-4 bg-green-900 shadow-md">
        <div className="flex items-center space-x-2">
          <button onClick={onBack}>
            <FaArrowLeft className="text-white" size={20} />
          </button>
          <div className="text-white font-bold text-lg">Trustlinecomm</div>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <FaVideo size={20} />
          <FaPhone size={20} />
          <FaEllipsisV size={20} />
        </div>
      </div>

      {/* Chat Body */}
      <div className="flex-1 p-4 overflow-y-scroll">
        {/* Chat Date */}
        <div className="text-center text-gray-500 mb-4">August 21, 2024</div>

        {/* Messages */}
        <div className="space-y-4">
          {/* Sender Message */}
          <div className="flex justify-start">
            <div className="bg-gray-200 p-3 rounded-lg max-w-xs">
              Hey there! How's it going?
            </div>
          </div>
          {/* Receiver Message */}
          <div className="flex justify-end">
            <div className="bg-green-500 text-white p-3 rounded-lg max-w-xs">
              All good here! What about you?
            </div>
          </div>
          {/* Additional messages would alternate similarly */}
        </div>
      </div>

      {/* Message Input Area */}
      <div className="flex items-center p-2 bg-white border-t border-gray-300">
        <button className="text-gray-500 hover:text-gray-700 p-2">
          <FaSmile size={24} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 p-2">
          <FaPaperclip size={24} />
        </button>
        <button className="text-gray-500 hover:text-gray-700 p-2">
          <FaCamera size={24} />
        </button>
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 mx-2 p-2 border rounded-full focus:outline-none focus:border-green-500"
        />
        <button className="text-green-500 hover:text-green-700 p-2">
          <FaMicrophone size={24} />
        </button>
      </div>
    </div>
  );
}

export default ChatBox;
