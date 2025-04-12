import React from 'react';

const LandingHeader = () => {
  return (
    <header className="w-full px-6 py-4 bg-transparent relative flex items-center justify-between h-24">
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <img
          src="/logo/logo1.png"
          alt="Logo"
          className="h-26 object-contain"
        />
      </div>

      {/* Centered buttons for services */}
      <div className="flex-shrink-0 flex items-center justify-center space-x-6">
        <button className="nb-button default rounded">Service 1</button>
        <button className="nb-button default rounded">Service 2</button>
        <button className="nb-button default rounded">Service 3</button>
      </div>

      {/* Right-aligned Contact Us button */}
      <div className="flex-shrink-0">
        <button className="nb-button default rounded">Contact Us</button>
      </div>
    </header>
  );
};

export default LandingHeader;
