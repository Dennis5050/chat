import React, { useState } from 'react';
import LandingPage from './Landing';
import ChatBox from './Chat';

function App() {
  const [activeChat, setActiveChat] = useState(null);

  const handleChatSelect = (chat) => {
    setActiveChat(chat);
  };

  const handleBack = () => {
    setActiveChat(null);
  };

  return (
    <div className="App">
      {activeChat ? (
        <ChatBox activeChat={activeChat} onBack={handleBack} />
      ) : (
        <LandingPage onChatSelect={handleChatSelect} />
      )}
    </div>
  );
}

export default App;
