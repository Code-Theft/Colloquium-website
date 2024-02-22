/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";

export default function Schedule() {
  const schedule = [
    {
      id: 1,
      name: "Registration",
      time: "08:30 AM - 09:30 AM",
      details: "",
      member: "",
    },
    {
      id: 2,
      name: "Inauguration",
      time: "09:30 AM - 10:00 AM",
      details: "",
      member: "",
    },
    {
      id: 3,
      name: "Talk",
      time: "10:00 AM - 10:30 AM",
      details: "Cloud Unbound: The Power of Serverless",
      member: "Niran Vijayakumar",
    },
    {
      id: 4,
      name: "Success Story",
      time: "10:40 AM - 11:10 AM",
      details: "GCP: From grassroots to Fortune",
      member: "Sreejai S Kurup",
    },
    {
      id: 5,
      name: "Sip & Connect",
      time: "11:15 AM - 11:45 AM",
    },

    {
      id: 6,
      name: "Panel Discussion",
      time: "11:45 PM - 12:50 PM",
      details: "Generative AI at scale with Cloud",
    },
    {
      id: 7,
      name: "Photo Session & Vote of Thanks",
      time: "01:00 PM - 01:20 PM",
    },
    {
      id: 8,
      name: "Lunch",
      time: "01:20 PM - 02:00 PM",
    },
  ];
  return (
    <section className="bg-colloquiumOrangeLight ">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-black-100">
            Schedule
          </h2>
          <p className="text-gray-700 text-lg font-light py-2">
            Unlocking Knowledge: Explore Our Engaging Schedule!
          </p>
        </div>

        <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <div className="-my-4 divide-y divide-gray-200">
            {schedule?.map((item) => (
              <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p className="w-48 text-lg font-normal text-black-200">
                  {item?.time}
                </p>
                <div className="flex flex-col md:flex-row">
                  <h3 className="text-lg font-semibold text-black-100 inline">
                    {item?.name}
                  </h3>
                  <p className="inline font-light md:ml-2 md:mt-0 mt-2 text-ColloquiumOrangeNormal ">
                    {item?.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
