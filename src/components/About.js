import React from 'react';

function About() {
  return (
    <section className="py-20 relative block bg-gray-900 flex flex-col">
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
            className="text-gray-900 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-white text-center pb-6">
          Careers
        </h2>
        <div className="flex flex-wrap text-center justify-center flex-col align-center">
          <div className="w-full px-4">
            <p className="text-lg leading-relaxed mt-4 mb-4 text-white">
              We offer excellent benefits that include:
            </p>
            <ul className="text-lg leading-relaxed mb-12 text-white list-none">
              <li>Competitive salaries</li>
              <li>Paid Time Off</li>
              <li>Medical, Dental, and Vision Insurance</li>
              <li>401k plan</li>
              <li>Life, short-term, and long-term disability insurance</li>
            </ul>
            <p className="text-lg leading-relaxed mt-4 mb-12 text-white">
              To join our team, please send resume to{' '}
              <a
                href="mailto:hr@vizontek.com"
                className="text-blue-300 hover:text-blue-400"
              >
                hr@vizontek.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
