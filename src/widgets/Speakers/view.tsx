/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Image from "@components/Image";

const people = [
  {
    name: "Sreejai Kurup",
    role: "Senior Director - Global Delivery @ SADA",
    imageUrl: "/images/assets/speakers/sreejai.png",
  },
  {
    name: "Niran Vijayakumar",
    role: "Multi Cloud Architect",
    imageUrl: "/images/assets/speakers/Niran.png",
  },
  {
    name: "Niyas Mohammed",
    role: "CEO, NeuralCraft Pvt. Ltd",
    imageUrl: "/images/assets/speakers/niyas.png",
  },
  {
    name: "Dr. Shailesh Sivan",
    role: "AI/ML Consultant, Assistant Professor at CUSAT",
    imageUrl: "/images/assets/speakers/shailesh.png",
  },
  {
    name: "Dr. Asharaf S",
    role: "Dean(Development) and Professor, Digital University Kerala",
    imageUrl: "/images/assets/speakers/asahraf.png",
  },
  {
    name: "Joseph Alex",
    role: "Principal Technology Architect, Infosys",
    imageUrl: "/images/assets/speakers/joseph.png",
  },
];

export default function SpeakerView() {
  return (
    <div className="bg-colloquiumOrangeLight py-24 sm:py-32" id="speakers">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Speakers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Learn from the best and brightest minds, including renowned experts
            and academia, shaping the future of Cloud Computing
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image
                  className="h-24 w-24 rounded-full"
                  src={person.imageUrl}
                  alt={person?.name}
                  width={400}
                  height={400}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-ColloquiumOrangeNormal">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
