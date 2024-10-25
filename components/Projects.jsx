import React from 'react';
import Image from 'next/image';
import { Mbed } from '@/assets';

const projects = [
  {
    name: 'Industrial Hardware Integration',
    description:
      'We delivered a complete hardware integration for a large industrial facility, enhancing their operational efficiency by 35%.',
    image: Mbed, // Replace with project image
  },
  {
    name: 'Custom Hardware Solutions for Logistics',
    description:
      'Designed and implemented a custom hardware system for a logistics company, optimizing their supply chain operations.',
    image: Mbed,
  },
  {
    name: 'Commercial Hardware Installation',
    description:
      'Installed state-of-the-art hardware systems for a commercial office building, including security, networking, and automation.',
    image: Mbed,
  },
];

export default function Projects() {
  return (
    <section className="bg-[#003399] py-10 md:py-16" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Projects</h2>
          <p className="text-white mt-2 sm:mt-4">
            Discover some of the key projects we completed for our valued clients.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-4 sm:p-6">
              <Image
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 sm:mb-6 w-full h-32 sm:h-40 object-cover"
              />
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
