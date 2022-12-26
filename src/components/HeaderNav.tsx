import logoutIcon from '../assets/logout-icon.svg';

interface HeaderProps {
  username?: string;
}

const HeaderNav = ({ username }: HeaderProps) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center py-5">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="ChatApp Logo"
          />
          <span className="self-center text-xl font-semibold dark:text-white">
            {username}
          </span>
        </div>

        <button className="block text-white">
          <i className="fa-solid fa-right-from-bracket fa-xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default HeaderNav;
