import React from 'react';

function Solution({ name, desc }) {
  return (
    <div className="lg:pt-4 py-3 w-full md:w-6/12 px-4">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg h-full">
        <div className="px-4 py-5 flex flex-col justify-center flex-auto">
          <h6 className="text-xl font-semibold">{name}</h6>
          <ul className="pt-4">
            {desc.map((item, index) => (
              <li key={index} className="mb-2 flex items-center">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 mr-3">
                  <i className="fas fa-check"></i>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Solution;
