import React from "react";

import { HEADERTEXT, HEADERDESC} from "../lib/constants"

function Header() {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh"
        }}>
      <div className="absolute top-0 w-full h-full bg-center bg-cover">
      </div>
      <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-8/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-5xl">
                  {HEADERTEXT}
                </h1>
                <p className="mt-4 text-lg text-gray-100">
                  {HEADERDESC}
                </p>
                <a
                  className="bg-pink-600 text-sm mt-5 text-white font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  type="button"
                  style={{ transition: "all .15s ease" }}
                  href="#solutions"
                >
                  Learn More
                </a>
              </div>
            </div>

          </div>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: "80px" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-200 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </div>
  )
}

export default Header;


