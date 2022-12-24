interface InputMessageProps {
  message?: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const InputMessages = ({ message, setMessage }: InputMessageProps) => {
  return (
    <div className="py-5 px-6">
      <input
        className="w-full bg-gray-300 py-5 px-4 rounded-xl"
        type="text"
        placeholder="type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
};

export default InputMessages;
