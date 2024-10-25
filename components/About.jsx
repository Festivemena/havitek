import React from 'react';
import Image from 'next/image';
import { Mbed } from '@/assets';

export default function AboutUs() {
  return (
    <section className="bg-black py-16" id="about-us">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Section: Image */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src={Mbed} // Replace with an appropriate image
              alt="About Havitech"
              className="rounded-lg shadow-lg"
            />
          </div>
          {/* Right Section: Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-3xl font-bold text-customCyan mb-4">About Havitech</h2>
            <p className="text-white mb-6">
              At Havitech, we specialize in providing comprehensive hardware solutions to industrial and commercial clients. Our expertise spans from hardware contracting and installations to custom hardware solutions tailored to meet the unique needs of our customers.
            </p>
            <p className="text-white mb-6">
              With over a decade of experience, we pride ourselves on our commitment to quality, innovation, and customer satisfaction. Our mission is to deliver hardware systems that help businesses thrive and grow, supported by our dedicated team of experts.
            </p>
            <p className="text-white font-semibold">
              Let us help you build the future of your business with hardware solutions that work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
