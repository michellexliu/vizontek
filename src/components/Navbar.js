import React from "react";
import { TABS } from "lib/constants";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const navItems = TABS.map((tab) => {
    return (
      <li className='flex items-center'>
        <a
          className='text-base text-white font-bold px-4 py-2 outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 mt-3 capitalize'
          href={`#${tab}`}
          style={{ transition: "all .15s ease" }}
          onClick={(open) => setNavbarOpen(open ? !open : open)}
        >
          {tab}
        </a>
      </li>
    );
  });

  return (
    <nav
      className={
        (props.transparent
          ? "top-0 absolute z-50 w-full"
          : "relative shadow-lg bg-white shadow-lg") +
        " flex flex-wrap items-center justify-between px-2 py-3 "
      }
    >
      <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
        <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
          <a
            className={
              (props.transparent ? "text-white" : "text-gray-800") +
              " text-3xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
            }
            href='/'
          >
            Vizontek
          </a>
          <button
            className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
            type='button'
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i
              className={
                (props.transparent ? "text-white" : "text-gray-800") +
                " fas fa-bars"
              }
            ></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
            (navbarOpen ? "block rounded shadow-lg bg-gray-900" : " hidden")
          }
          id='example-navbar-warning'
        >
          <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
            {navItems}
          </ul>
        </div>
      </div>
    </nav>
  );
}
