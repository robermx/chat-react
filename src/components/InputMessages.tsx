import { Dispatch, SetStateAction, SyntheticEvent } from 'react';

interface InputMessageProps {
  message?: string;
  username?: string;
  setMessage: Dispatch<SetStateAction<string>>;
  setMessages: Dispatch<SetStateAction<never[]>>;
}

const InputMessages = ({
  message,
  username,
  setMessage,
  setMessages,
}: InputMessageProps) => {
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const url = 'http://localhost:8000/api/messages';
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        message,
      }),
    });
    setMessage('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="py-10 px-6">
        <input
          className="w-full bg-gray-300 py-5 px-4 rounded-xl"
          type="text"
          placeholder="type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </form>
  );
};

export default InputMessages;
