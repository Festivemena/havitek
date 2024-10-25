import React from 'react';
import Image from 'next/image';
import { Mbed } from '@/assets';

const services = [
  {
    title: 'Hardware Installation',
    description: 'Expert installation services for industrial and commercial hardware systems...',
    icon: Mbed,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-10 md:py-16" id="services" role="region" aria-labelledby="services-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800" id="services-heading">
            Our Services
          </h2>
          <p className="text-gray-600 mt-2 sm:mt-4">
            We offer a full range of hardware services to meet all your industrial and commercial needs.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-gray-50 shadow-lg rounded-lg p-4 sm:p-6 text-center transition transform hover:scale-105"
              aria-labelledby={`service-${index}`}
            >
              <Image
                src={service.icon}
                alt={`${service.title} icon`}
                width={64}
                height={64}
                loading="lazy"
                className="mx-auto rounded-lg mb-4 sm:mb-6 w-16 h-16"
              />
              <h3 id={`service-${index}`} className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
