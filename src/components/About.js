import React from "react";
import { ABOUT } from "../lib/constants";
import Leadership from "./Leadership.js";
import { LEADERHSIP } from "../lib/constants";

function About() {
  return (
    <section className='py-20 relative block bg-gray-900 flex flex-col'>
      <div
        className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
        style={{ height: "80px" }}
        id='about'
      >
        <svg
          className='absolute bottom-0 overflow-hidden'
          xmlns='http://www.w3.org/2000/svg'
          preserveAspectRatio='none'
          version='1.1'
          viewBox='0 0 2560 100'
          x='0'
          y='0'
        >
          <polygon
            className='text-gray-900 fill-current'
            points='2560 0 2560 100 0 100'
          ></polygon>
        </svg>
      </div>

      <div className='container mx-auto px-4 lg:py-24'>
        <div className='flex flex-wrap text-center justify-center'>
          <div className='w-full lg:w-6/12 px-4'>
            <h2 className='text-4xl font-semibold text-white'>About Us</h2>
            <p className='text-lg leading-relaxed mt-4 mb-12 text-white'>
              {ABOUT}
            </p>
          </div>
        </div>
      </div>
      <h2 className='text-4xl font-semibold text-white text-center pb-6'>
        Leadership
      </h2>
      {LEADERHSIP.map((leader) => {
        return (
          <Leadership
            key={leader.name}
            name={leader.name}
            bio={leader.bio}
            position={leader.position}
            img_src={leader.headshot}
          />
        );
      })}
    </section>
  );
}

export default About;
