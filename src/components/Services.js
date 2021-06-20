import React from "react";
import Service from "./Service"
import { SERVICES } from "../lib/constants"

function Services() {
  const serviceLIs = SERVICES.map(service => {
    return <Service service={service} />;
  });

  return (
    <section className="relative py-20">
    <div
      className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
      style={{ height: "80px" }}
      id="services"
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
          className="text-white fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>

    <div className="container mx-auto px-4">
      <div className="items-center flex flex-wrap">
        <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
          <img
            alt=""
            className="max-w-full rounded-lg shadow-lg hidden md:block"
            src={require("assets/img/cityscape.jpeg").default}
          />
        </div>
        <div className="w-full md:w-8/12 lg:w-5/12 ml-auto mr-auto px-4">
          <div className="md:pr-12">
            <h3 className="text-3xl font-semibold text-left-md text-center">
              Services
            </h3>
            <ul className="list-none mt-6">
              { serviceLIs }
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services;