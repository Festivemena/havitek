import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogoClear, Logo } from '@/assets';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Image src={LogoClear} alt="Havitech Logo" width={75} height={45} />
        </div>
        
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
            </svg>
          </button>
        </div>

        {/* Menu Links */}
        <ul className={`md:flex space-x-8 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <li>
            <Link href="/product">
              <p className="hover:text-gray-400">Services</p>
            </Link>
          </li>
          <li>
            <Link href="/solutions">
              <p className="hover:text-gray-400">Projects</p>
            </Link>
          </li>
          <li>
            <Link href="/documentation">
              <p className="hover:text-gray-400">About Us</p>
            </Link>
          </li>
          <li>
            <Link href="/media">
              <p className="hover:text-gray-400">Contact</p>
            </Link>
          </li>
        </ul>

        {/* Get Started Button */}
        <div className={`md:block ${isOpen ? 'block' : 'hidden'} md:flex`}>
          <Link href="/get-started">
            <p className="bg-[#003399] text-white px-4 py-2 rounded-lg hover:bg-indigo-500">
              Get a Quote
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
