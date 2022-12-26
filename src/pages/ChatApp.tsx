import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import HeaderNav from '../components/HeaderNav';
import InputMessages from '../components/InputMessages';
import MessagesBox from '../components/MessagesBox';
import { getDataCokie } from '../helpers/getUser';

import { getPusher } from '../helpers/pusher';

function ChatApp() {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  let callToPusher: boolean = true;
  let callUser: boolean = true;

  useEffect(() => {
    if (callUser) getDataCokie(setUsername, navigate);
    return () => {
      callUser = false;
    };
  }, []);

  useEffect(() => {
    if (callToPusher) getPusher(setMessages);
    return () => {
      callToPusher = false;
    };
  }, []);

  return (
    <div className="container mx-auto shadow-lg rounded-lg">
      <HeaderNav username={username} />
      <MessagesBox messages={messages} />
      <InputMessages
        username={username}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
}

export default ChatApp;
