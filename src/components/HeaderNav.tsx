const HeaderNav = () => {
  return (
    <nav className="bg-white border-gray-200 px-2 dark:bg-gray-900">
      <div className="container flex items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="ChatApp Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            ChatApp
          </span>
        </a>

        <div>
          <ul className="flex p-4 mt-4">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white"
                aria-current="page"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-white"
                aria-current="page"
              >
                Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
