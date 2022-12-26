import { useEffect, useState } from 'react';

import HeaderNav from '../components/HeaderNav';
import InputMessages from '../components/InputMessages';
import MessagesBox from '../components/MessagesBox';

import { getPusher } from '../helpers/pusher';

function ChatApp() {
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
      <HeaderNav username={username} setUsername={setUsername} />
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

export default ChatApp;
