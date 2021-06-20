import React from "react";

function Company({website, company}) {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
      <div className="px-6 h-full flex justify-center">
        <a className="h-full flex justify-center" href={website} target="_blank">
          <img
            alt={`${company} logo`}
            src={`media/${company}-logo.png`}
            className="max-w-full mx-auto object-contain"
          />
        </a>
      </div>
    </div>
  );
}

export default Company;