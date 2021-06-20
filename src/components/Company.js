import React from "react";

function Company({website, company}) {
  return (
    <div className="w-full h-full flex justify-center">
      <a className="px-6 my-auto" href={website} target="_blank">
        <img
          alt={`${company} logo`}
          src={`media/${company}-logo.png`}
          className="max-w-full mx-auto object-contain"
        />
      </a>
    </div>
  );
}

export default Company;