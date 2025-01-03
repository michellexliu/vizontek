import React from 'react';
import Solution from './Solution';
import { SOLUTIONTEXT, SOLUTIONS } from '../lib/constants';

function Solutions() {
  const solutionCards = SOLUTIONS.map((solution) => (
    <Solution key={solution.name} name={solution.name} desc={solution.desc} />
  ));

  return (
    <section className="flex flex-col pt-64 pb-32 bg-gray-900 -mt-24">
      <div className="container mx-auto">
        <h2 className="px-6 text-4xl container font-semibold text-left text-white">
          What we do
        </h2>
        <p
          className="px-6 mx-auto justify-center py-4 text-white"
          dangerouslySetInnerHTML={{ __html: SOLUTIONTEXT }}
        />
        <div className="container mx-auto px-4" id="solutions">
          <div className="flex items-center flex-wrap md:flex-nowrap">
            <div className="flex flex-wrap justify-between order-1">
              {solutionCards}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solutions;
