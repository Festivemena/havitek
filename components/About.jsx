import React from 'react';
import Image from 'next/image';
import { Mbed } from '@/assets';

export default function AboutUs() {
  return (
    <section className="bg-black py-10 md:py-16" id="about-us" role="region" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-8">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <Image
              src={Mbed}
              alt="Havitech team working on hardware installation"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-customCyan mb-4" id="about-heading">
              About Havitech
            </h2>
            <p className="text-white text-base sm:text-lg mb-4 sm:mb-6">
              At Havitech, we specialize in providing comprehensive hardware solutions...
            </p>
            <p className="text-white font-semibold text-base sm:text-lg">
              Let us help you build the future of your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
