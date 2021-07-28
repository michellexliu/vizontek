import React from "react";
import Service from "./Service";
import { SERVICES } from "../lib/constants";

function Services() {
  const serviceLIs = SERVICES.map((service) => {
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
        <div className="items-center flex flex-wrap justify-center">
          <img
            alt=""
            className="max-w-full rounded-lg shadow-lg hidden lg:block max-height-400px mx-0"
            src={require("assets/img/cityscape.jpeg").default}
          />
          <div className="w-full md:w-8/12 lg:w-5/12 px-4">
            <div className="md:px-12">
              <h2 className="text-4xl font-semibold lg:text-left text-center">
                Services
              </h2>
              <ul className="list-none mt-6">{serviceLIs}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
