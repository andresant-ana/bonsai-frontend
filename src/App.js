import React from 'react';
import styled from 'styled-components';
import ChatList from './components/ChatList';
import ChatBox from './components/ChatBox';

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
`;

const App = () => {
  return (
    <AppWrapper>
      <ChatList />
      <ChatBox />
    </AppWrapper>
  );
};

export default App;
