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
    <section className="bg-[#003399] py-16" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Our Projects</h2>
          <p className="text-gray-600 mt-4">
            Discover some of the key projects we've completed for our valued clients.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-6">
              <Image
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-6 w-full h-40 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {project.name}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
