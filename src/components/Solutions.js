import React from 'react';
import Solution from './Solution';
import { SOLUTIONTEXT, SOLUTIONS } from '../lib/constants';

function Solutions() {
  const solutionCards = SOLUTIONS.map((solution) => (
    <Solution key={solution.name} name={solution.name} desc={solution.desc} />
  ));

  return (
    <section className="flex flex-col pt-32 pb-32 bg-gray-200 -mt-24">
      <h2 className="mx-auto text-4xl font-semibold lg:text-left text-center justify-center">
        What we do
      </h2>
      <p
        className="mx-auto text-center justify-center w-9/12 py-4"
        dangerouslySetInnerHTML={{ __html: SOLUTIONTEXT }}
      />
      <div className="container mx-auto px-4" id="solutions">
        <div className="flex items-center flex-wrap md:flex-nowrap">
          <div className="flex flex-wrap justify-center order-1">
            {solutionCards}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
