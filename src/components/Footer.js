import React from "react";
import { ADDRESS, EMAIL } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-6" id="contact">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
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
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Contact Us
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              { ADDRESS }
            </h5>
            <h5 className="text-lg mt-0 mb-2 text-gray-700">
              <a href={`mailto:${EMAIL}`}>{ EMAIL }</a>
            </h5>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © {new Date().getFullYear()}{" "}Vizontek LLC
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
