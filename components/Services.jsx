import React from 'react';
import Image from 'next/image';
import { Mbed } from '@/assets';

const services = [
  {
    title: 'Hardware Installation',
    description:
      'Expert installation services for industrial and commercial hardware systems, ensuring seamless integration with existing infrastructure.',
    icon: Mbed, // Example icon, adjust as needed
  },
  {
    title: 'Maintenance & Support',
    description:
      'Comprehensive maintenance packages and on-demand technical support to keep your hardware systems running smoothly.',
    icon: Mbed, // Example icon, adjust as needed
  },
  {
    title: 'Custom Hardware Solutions',
    description:
      'Tailored hardware solutions designed to meet your specific industrial or commercial needs, from initial concept to final implementation.',
    icon: Mbed, // Example icon, adjust as needed
  },
  {
    title: 'Consultation Services',
    description:
      'Professional consultation to help you plan, design, and optimize hardware systems for maximum efficiency and reliability.',
    icon: Mbed,
  },
];

export default function Services() {
  return (
    <section className="bg-white py-16" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-600 mt-4">
            We offer a full range of hardware services to meet all your industrial and commercial needs.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={64}
                height={64}
                className="mx-auto rounded-lg mb-6 w-16 h-16"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
