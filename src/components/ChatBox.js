import React, { useState } from 'react';
import '../styles/ChatBox.css';
import { FaPaperPlane } from 'react-icons/fa';
import axios from 'axios';

const ChatBox = ({ chats, setChats }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = { id: chats.length + 1, name: 'You', message: inputMessage, time: 'Now', isUser: true };
    setChats((prevChats) => [...prevChats, userMessage]);

    try {
      const response = await axios.post('http://localhost:8000/api/send-message', { message: inputMessage });
      const botMessage = {
        id: chats.length + 2,
        name: 'BonsAI',
        message: response.data.response,
        time: 'Now',
        isUser: false,
      };
      setChats((prevChats) => [...prevChats, botMessage]);
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      const errorMessage = {
        id: chats.length + 2,
        name: 'BonsAI',
        message: 'Erro ao processar a solicitação',
        time: 'Now',
        isUser: false,
      };
      setChats((prevChats) => [...prevChats, errorMessage]);
    }

    setInputMessage('');
  };

  return (
    <div className="ChatBoxWrapper">
      {chats.map((chat) => (
        <div key={chat.id} className={`Message ${chat.isUser ? 'isUser' : ''}`}>
          {chat.message}
        </div>
      ))}

      <div className="MessageInputWrapper">
        <input
          type="text"
          placeholder="Type your message..."
          className="Input"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button className="SendButton" onClick={handleSendMessage}>
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
