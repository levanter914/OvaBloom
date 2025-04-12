import React from 'react';
import Link from 'next/link';

const LandingHeader = () => {
  return (
    <header className="w-full px-6 py-4 bg-transparent relative flex items-center justify-between h-24">
      <div className="flex-shrink-0">
        <img
          src="/logo/logo1.png"
          alt="Logo"
          className="h-26 object-contain"
        />
      </div>

      {/* Centered links for services */}
      <div className="flex-shrink-0 flex items-center justify-center space-x-6">
        <Link href="/usg-test">
          <button className="nb-button default rounded">USG-Based Prediction</button>
        </Link>
        <Link href="/clinical-test">
          <button className="nb-button default rounded">Lab Report Analysis</button>
        </Link>
        <Link href="/sakhi">
          <button className="nb-button default rounded">Sakhi AI</button>
        </Link>
      </div>

      {/* Right-aligned Contact Us button */}
      <div className="flex-shrink-0">
        <Link href="/contact">
          <button className="nb-button default rounded">Contact Us</button>
        </Link>
      </div>
    </header>
  );
};

export default LandingHeader;
