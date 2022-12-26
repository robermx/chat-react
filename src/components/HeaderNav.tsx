import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  username?: string;
}

const HeaderNav = ({ username }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const url = 'http://localhost:8000/api/logout';
    await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    navigate('/login');
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 pt-4">
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

        <button onClick={handleLogout} className="block text-white">
          <FontAwesomeIcon icon={faRightFromBracket} size="xl" />
        </button>
      </div>
    </nav>
  );
};

export default HeaderNav;
