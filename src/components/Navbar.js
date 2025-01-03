import React from 'react';
import { TABS } from 'lib/constants';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(null);

  const navItems = TABS.map((tab) => {
    if (tab.dropdown) {
      return (
        <li className="flex items-center relative" key={tab.anchor}>
          <button
            className="text-base font-bold px-4 py-2 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 capitalize flex items-center"
            style={{ transition: 'all .15s ease', color: '#F2A16A' }}
            onClick={() =>
              setDropdownOpen(dropdownOpen === tab.anchor ? null : tab.anchor)
            }
          >
            {tab.title}
            <i className="fas fa-chevron-down ml-1 text-xs"></i>
          </button>
          {dropdownOpen === tab.anchor && (
            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
              {tab.dropdown.map((item) => (
                <a
                  key={item.anchor}
                  href={`#${item.anchor}`}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setDropdownOpen(null)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          )}
        </li>
      );
    }
    return (
      <li className="flex items-center" key={tab.anchor}>
        <a
          className="text-base font-bold px-4 py-2 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 capitalize"
          href={`#${tab.anchor}`}
          style={{ transition: 'all .15s ease', color: '#F2A16A' }}
          onClick={(open) => setNavbarOpen(open ? !open : open)}
        >
          {tab.title}
        </a>
      </li>
    );
  });

  return (
    <nav
      className={
        (props.transparent
          ? 'top-0 absolute z-50 w-full'
          : 'relative shadow-lg bg-white shadow-lg') +
        ' flex flex-wrap items-center justify-between px-2 py-3 '
      }
    >
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <a
            className={
              'text-pink-600 text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
            }
            href="/"
          >
            Vizontek
          </a>
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? 'text-white' : 'text-gray-800') +
                ' fas fa-bars'
              }
            ></i>
          </button>
        </div>
        <div
          className={
            'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
            (navbarOpen ? 'block rounded shadow-lg bg-gray-900' : ' hidden')
          }
          id="example-navbar-warning"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {navItems}
          </ul>
        </div>
      </div>
    </nav>
  );
}
