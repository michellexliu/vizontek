import React from "react";

function Service({service}) {
  return (
    <li className="py-2" key={service}>
      <div className="flex items-center">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 mr-3">
            <i className="fas fa-check"></i>
          </span>
        </div>
        <div>
          <h4 className="text-gray-600">
            {service}
          </h4>
        </div>
      </div>
    </li>
  );
}

export default Service;