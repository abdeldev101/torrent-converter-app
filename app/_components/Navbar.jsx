import Image from 'next/image';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Image src="/logo.svg"
          height={125}
          width={125}
          <ul className="flex">
            <li className="ml-4">
              <a href="/" className="text-white hover:text-gray-300">Home</a>
            </li>
            <li className="ml-4">
              <a href="/about" className="text-white hover:text-gray-300">About</a>
            </li>
            <li className="ml-4">
              <a href="/contact" className="text-white hover:text-gray-300">Contact</a>
            </li>
            <li className="ml-4">
              <a href="/login" className="text-white hover:text-gray-300">Login</a>
            </li>
          </ul>
          <button className="bg-tail-500 group flex h-14 items-center justify-center rounded-lg text-lg font-semibold text-white transition-all duration-100 glow-sm hover:glow-md ml-1 hidden h-9 w-28 text-sm sm:block">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
