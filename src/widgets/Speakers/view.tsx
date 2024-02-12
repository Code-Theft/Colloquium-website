
/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Image from "next/image";
import { members } from "@utils/constants";

export default function SpeakerView() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-colloquiumOrangeLight py-32">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-gray-900 text-4xl font-bold mb-8">
                  Our Speakers
                </h1>
                <p className="text-gray-700 text-lg font-light">
                  Learn from the best and brightest minds shaping the future of
                  your industry.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {members?.map((item, index) => (
                <div
                    className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4"
                    key={`speaker_map_key_${index + 1}`}
                  >
                    <div className="flex flex-col">
                      <Image
                        className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={item?.imageUrl}
                        width={400}
                        height={400}
                        alt={item?.name}
                      />
                      <div className="text-center mt-6">
                        <h1 className="text-gray-900 text-xl font-bold mb-1">
                          {item?.name}
                        </h1>
                        <div className="text-gray-700 font-light mb-2">
                          {item?.role}
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
