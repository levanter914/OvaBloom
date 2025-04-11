import React from 'react';

const Header = () => {
  return (
    <header className="w-full px-6 py-4 relative bg-transparent absolute top-0 z-50 h-24">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src="/logo/logo1.png"
          alt="Logo"
          className="h-24 object-contain"
        />
      </div>

      {/* Right-aligned buttons */}
      <div className="absolute top-4 right-6 space-x-4">
        <button className="nb-button default rounded">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
