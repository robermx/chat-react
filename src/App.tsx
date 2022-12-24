import { useState } from 'react';
import BoxMessages from './components/BoxMessages';
import Header from './components/Header';
import InputMessages from './components/InputMessages';

function App() {
  const [username, setUsername] = useState('username');

  return (
    <div className="container mx-auto shadow-lg rounded-lg">
      <Header username={username} setUsername={setUsername} />
      <BoxMessages />
      <InputMessages />
    </div>
  );
}

export default App;
