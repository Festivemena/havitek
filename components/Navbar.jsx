import Link from 'next/link';
import Image from 'next/image';
import { LogoClear, Logo } from '@/assets';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">
          <Image src={LogoClear} alt='Havitech Logo' width={75} height={45} />
        </div>
        {/* Menu Links */}
        <ul className="hidden md:flex space-x-8">
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
        <div>
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