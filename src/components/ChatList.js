import React from 'react';
import '../styles/ChatList.css';

const ChatList = () => {
  const chats = [
    { id: 1, name: 'Name', message: 'Supporting line text lorem...', time: '10 min' },
    { id: 2, name: 'Name', message: 'Supporting line text lorem...', time: '10 min' },
  ];

  return (
    <div className="ChatListWrapper">
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