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

const sponsors = [
  {
    id: 1,
    name: "SADA",
    path: "/images/assets/sponsors/sada-black.png",
    alt: "SADA, An Insight company",
    height: 30,
    width: 120,
  },
  {
    id: 2,
    name: "Gtech MuLearn",
    path: "/images/assets/sponsors/mulearn.png",
    alt: "MuLearn",
    height: 30,
    width: 110,
  },
  {
    id: 3,
    name: "IEEE Kerala Section",
    path: "/images/assets/sponsors/kerala-section-black.png",
    alt: "MuLearn",
    height: 30,
    width: 137,
  },
  {
    id: 4,
    name: "IEEE YP AG Kerala Section",
    path: "/images/assets/sponsors/yp-black.png",
    alt: "MuLearn",
    height: 60,
    width: 106,
  },
];

export default function Sponsors() {
  return (
    <>
      <section className="bg-white">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
            In Association with
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-4">
            {sponsors?.map((item) => (
              <div
                className="flex justify-center items-center sm:mx-2 md:mx-0 lg:mx-0"
                key={item?.id}
              >
                <Image
                  src={item?.path}
                  alt={item?.alt}
                  height={item?.height}
                  width={item?.width}
                  className={item?.id === 3 ? "zoomed-image" : ""}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
