import React from "react";

function Solution({name, desc}) {
  return (
    <div className="lg:pt-4 py-3 w-full md:w-6/12 px-4 text-center">
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded-lg">
        <div className="px-4 py-5 flex-auto">
          <h6 className="text-xl font-semibold">{name}</h6>
          <p className="mt-2 mb-4 text-gray-600">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Solution;