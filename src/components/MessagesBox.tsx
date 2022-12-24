interface MessagesProps {
  username?: string;
  message?: string;
  id?: string;
  [key: string]: any;
}

const MessagesBox = ({ messages }: MessagesProps) => {
  return (
    <div className="bg-white h-96">
      <div className="w-full px-5">
        {messages.map((message: any) => (
          <div key={message.id} className="my-4">
            <div className="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white">
              <strong>{message.username}</strong>
              {message.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MessagesBox;
