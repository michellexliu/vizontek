import React from 'react';
import { CLIENTS } from '../lib/constants';
import Company from './Company';

function Clients() {
  return (
    <section className="pt-20 pb-48" id="clients">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Our Clients</h2>
          </div>
        </div>
        <div className="flex flex-wrap md:flex-nowrap items-center">
          {CLIENTS.map(({ name, url }) => {
            return <Company key={name} company={name} website={url} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Clients;
