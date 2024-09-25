import React, { useState } from 'react';
import '../styles/ChatList.css';
import axios from 'axios';

const ChatList = ({ chats, setChats }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8000/api/upload-document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Arquivo enviado com sucesso');
      setFile(null);
    } catch (error) {
      console.error('Erro ao carregar o documento:', error);
    }
  };

  return (
    <div className="ChatListWrapper">
      <div className="Settings">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload File</button>
      </div>
      {chats.map((chat) => (
        <div key={chat.id} className={`ChatItem ${chat.id === 1 ? 'active' : ''}`}>
          <div><strong>{chat.name}</strong></div>
          <div>{chat.message}</div>
          <div>{chat.time}</div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
