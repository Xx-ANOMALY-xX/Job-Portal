import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from 'react-icons/fa6';

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleMenuToggler = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', title: 'Start a search' },
    { path: '/my-job', title: 'My Jobs' },
    { path: '/salary', title: 'Salary Estimate' },
    { path: '/post-job', title: 'Post A Job' },
  ];

  return (
    <header className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <nav className="flex justify-between items-center py-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="29"
            height="30"
            viewBox="0 0 29 30"
            fill="none"
          >
            <circle
              cx="12.0143"
              cy="12.5143"
              r="12.0143"
              fill="#3575e2"
              fillOpacity="0.4"
            ></circle>
            <circle
              cx="16.9857"
              cy="17.4857"
              r="12.0143"
              fill="#3575e2"
            ></circle>
          </svg>
          <span>JobHatch</span>
        </a>

        {/* Nav items centered between logo and buttons */}
        <ul className="hidden md:flex flex-grow justify-center gap-12">
          {navItems.map(({ path, title }) => (
            <li key={path} className="text-base text-primary">
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'text-blue' : '')}
              >
                {title}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Signup and Login buttons */}
        <div className="text-base text-primary font-medium hidden lg:flex space-x-5">
          <Link to="/login" className="py-2 px-5 border rounded">
            Log in
          </Link>
          <Link
            to="/signup"
            className="py-2 px-5 border rounded bg-blue text-white"
          >
            Signup
          </Link>
        </div>

        {/* Mobile navigation */}
        <div>
          <button className="md:hidden block" onClick={handleMenuToggler}>
            {isMenuOpen ? (
              <FaXmark className="text-primary w-5 h-5" />
            ) : (
              <FaBarsStaggered className="text-primary w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Nav items for mobile screens */}
      <div
        className={`px-4 bg-black py-5 rounded-sm mobile-menu ${
          isMenuOpen ? '' : 'hidden'
        }`}
      >
        <ul>
          {navItems.map(({ path, title }) => (
            <li
              key={path}
              className="text-base text-white first:text-white py-1"
            >
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? 'text-blue' : '')}
              >
                {title}
              </NavLink>
            </li>
          ))}

          <li className="text-white py-1">
            <Link to="/login">Log in</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;