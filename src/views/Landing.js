import React from 'react';

import Navbar from 'components/Navbar.js';
import Footer from 'components/Footer.js';
import Solutions from 'components/Solutions.js';
import Certification from 'components/Certification.js';
import Clients from 'components/Clients.js';
import About from 'components/About.js';

export default function Landing() {
  return (
    <>
      <Navbar transparent id="top" />
      <main>
        <Solutions />
        <Certification />
        <Clients />
        <About />
        <a
          href="#top"
          className="text-5xl font-semibold inline-block py-2 px-2 text-pink-600 mr-3 to-top"
        >
          <i className="fas fa-angle-up"></i>
        </a>
      </main>
      <Footer />
    </>
  );
}
