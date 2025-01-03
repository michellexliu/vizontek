import React from 'react';
import mdot from '../assets/img/post-mdot.jpg';

function Services() {
  return (
    <section className="relative py-20">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: '82px', bottom: '-2px' }}
        id="about"
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
        <h2 className="text-4xl font-semibold pb-6">Certification</h2>
        <div className="flex flex-wrap justify-start">
          <div className="w-full lg:w-6/12 px-4">
            <p className="text-lg leading-relaxed mt-4 mb-12">
              U.S. Small Business Administration 8(a)
            </p>
            <img
              className="lg:w-44"
              src="media/8a.png"
              alt="8a certification"
            />
          </div>
          <div className="w-full lg:w-6/12 px-4 mt-12 lg:mt-0">
            <p className="text-lg leading-relaxed mt-4 mb-12">
              Maryland Department of Transportation's (MDOT) Office of Minority
              Business Enterprise (OMBE) Minority Business Enterprise (MBE)
              Program, the Disadvantaged Business Enterprise (DBE) Program, and
              the Small Business Enterprise (SBE) Program
            </p>
            <img className="lg:w-44" src={mdot} alt="MDOT certification" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
