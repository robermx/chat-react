import { useState } from 'react';

import Header from './components/Header';
import InputMessages from './components/InputMessages';
import MessagesBox from './components/MessagesBox';

function App() {
  const [username, setUsername] = useState('username');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  return (
    <div className="container mx-auto shadow-lg rounded-lg">
      <Header username={username} setUsername={setUsername} />
      <MessagesBox messages={messages} />
      <InputMessages message={message} setMessage={setMessage} />
    </div>
  );
}

export default App;
