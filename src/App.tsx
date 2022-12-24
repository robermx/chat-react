import { useEffect, useState } from 'react';

import Header from './components/Header';
import InputMessages from './components/InputMessages';
import MessagesBox from './components/MessagesBox';

import { getPusher } from './helpers/pusher';

function App() {
  const [username, setUsername] = useState('username');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  let callToPusher: boolean = true;
  useEffect(() => {
    if (callToPusher) getPusher(setMessages);
    return () => {
      callToPusher = false;
    };
  }, []);

  return (
    <div className="container mx-auto shadow-lg rounded-lg">
      <Header username={username} setUsername={setUsername} />
      <MessagesBox messages={messages} />
      <InputMessages
        username={username}
        message={message}
        setMessage={setMessage}
        setMessages={setMessages}
      />
    </div>
  );
}

export default App;
