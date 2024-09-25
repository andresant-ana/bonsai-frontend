import React, { useState } from 'react';
import './App.css';
import ChatList from './components/ChatList';
import ChatBox from './components/ChatBox';

function App() {
  const [chats, setChats] = useState([]);

  return (
    <div className="App">
      <div className="ChatContainer">
        <ChatList chats={chats} setChats={setChats} />
        <ChatBox chats={chats} setChats={setChats} />
      </div>
    </div>
  );
}

export default App;
