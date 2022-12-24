interface HeaderProps {
  username?: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Header = ({ username, setUsername }: HeaderProps) => {
  return (
    <div className="px-5 py-5 flex justify-between items-center bg-slate-200 border-b-2">
      <input
        className="w-1/3 bg-white py-2 px-4 rounded-xl"
        type="text"
        placeholder="type your username here..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center">
        RA
      </div>
    </div>
  );
};

export default Header;
