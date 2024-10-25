"use client"

import Link from 'next/link';
import Image from 'next/image';
import { LogoClear } from '@/assets';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4" aria-label="Main Navigation">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Link href="/" aria-label="Go to Home">
            <a>
              <Image src={LogoClear} alt="Havitech Logo" width={75} height={45} priority />
            </a>
          </Link>
        </div>
        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8" role="menu">
          {['Services', 'Projects', 'About Us', 'Contact'].map((item, index) => (
            <li key={index} role="menuitem">
              <Link href={`/${item.toLowerCase().replace(/\s/g, '-')}`}>
                <a className="hover:text-gray-400">{item}</a>
              </Link>
            </li>
          ))}
        </ul>
        {/* Get Started Button */}
        <div>
          <Link href="/get-started">
            <a className="bg-[#003399] text-white px-4 py-2 rounded-lg hover:bg-indigo-500">
              Get a Quote
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
