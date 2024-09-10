import React from 'react';
import '../styles/ChatBox.css';
import { FaSmile, FaPaperPlane } from 'react-icons/fa';

const ChatBox = () => {
  const messages = [
    { id: 1, content: 'that looks so good!', isUser: false },
    { id: 2, content: 'Let\'s do it!', isUser: true },
  ];

  return (
    <div className="ChatBoxWrapper">
      {messages.map((message) => (
        <div key={message.id} className={`Message ${message.isUser ? 'isUser' : ''}`}>
          {message.content}
        </div>
      ))}

      <div className="MessageInputWrapper">
        <input type="text" placeholder="Type your message..." className="Input" />
        <button className="SendButton">
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;