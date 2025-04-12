import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-transparent relative flex items-center justify-between h-24">
      <div className="flex-shrink-0">
        <Link href="/">
          <img
            src="/logo/logo1.png"
            alt="Logo"
            className="h-26 object-contain cursor-pointer"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
