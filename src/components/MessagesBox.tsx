interface MessagesProps {
  username?: string;
  message?: string;
  id?: string;
  [key: string]: any;
}

const MessagesBox = ({ messages }: MessagesProps) => {
  return (
    <div className="px-5">
      {messages.map((message: MessagesProps, idx: number) => (
        <div key={idx} className="my-4 w-fit">
          <div className="ml-2 py-3 px-4 bg-blue-700 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
            <strong>{message.username}</strong> {message.message}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MessagesBox;
