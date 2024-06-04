import React, { useState } from 'react';
import './chat.css';
import Navbar from '../navbar/navbar';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { user: 'user', text: input }]);
      setInput('');
      // Simulate bot response
      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages, 
          { user: 'bot', text: `You said: ${input}` }
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="Chat">
      <Navbar />
      <div className="chatbox">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.user}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chat;