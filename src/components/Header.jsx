import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-700 border-b border-gray-200">
      <div className="container flex mx-auto p-5 flex-col md:flex-row items-center">
        <a href="#" className="font-medium text-grey-900 mb-4 md:mb-0">
          <span className="text-xl ml-3">Keiya Ida</span>
        </a>

        <nav className="md:ml-auto text-base">
            <ul className="flex">
                <li>
                    <Link to="/" className="mr-5 hover:text-blue-400">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="mr-5 hover:text-blue-400">About</Link>
                </li>
                <li>
                    <Link to="/work" className="hover:text-blue-400">Work</Link>
                </li>
            </ul>
        </nav>
        {/* <nav className="md:ml-auto text-base">
          <a href="#home" className="mr-5 hover:text-blue-400">
            Home
          </a>
          <a href="#about" className="mr-5 hover:text-blue-400">
            About
          </a>
          <a href="#work" className="mr-5 hover:text-blue-400">
            Work
          </a>
          <a href="#blog" className="hover:text-blue-400">
            Blog
          </a>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
