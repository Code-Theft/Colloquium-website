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
import IconDate from "@icons/IconDate";
import IconTime from "@icons/IconTime";
import { imageAlts } from "@utils/constants";
import IconLocation from "@icons/IconLocation";

interface FeatureProps {
  name: string;
  description: string;
  icon: React.JSX.Element;
}

const features: FeatureProps[] = [
  {
    name: "Date : ",
    description: "24 February 2024, Saturday",
    icon: <IconDate />,
  },
  {
    name: "Time : ",
    description: "09 : 00 AM - 02: 00 PM",
    icon: <IconTime />,
  },
  {
    name: "Venue : ",
    description: "Travancore Hall, Park Centre, Technopark Phase I",
    icon: <IconLocation />,
  },
];

export default function FeatureView() {
  return (
    <div className="overflow-hidden py-24 sm:py-32 bg-colloquiumOrangeLight">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Our
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-ColloquiumOrangeNormal sm:text-4xl">
                Venue
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Join us at the state-of-the-art Park Centre, nestled within the
                vibrant Technopark ecosystem, providing an inspiring venue for
                our colloquium with cutting-edge facilities and a dynamic
                atmosphere.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <div className="inline font-semibold text-gray-900">
                      {feature?.icon}
                      {feature.name}
                    </div>
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/images/assets/venue.jpg"
            alt={imageAlts.VENUE}
            className="hidden sm:block w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  );
}
