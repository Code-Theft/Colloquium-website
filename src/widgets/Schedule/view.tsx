/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import IconCalendar from "@icons/IconCalendar";

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
      name: "Talk Session 1",
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
      time: "11:10 AM - 11:30 AM",
    },
    {
      id: 6,
      name: "Talk Session 2",
      time: "11:30 AM - 12:00 PM",
      // details: "Free and open source in Cloud",
      // member: "Sunil TT",
    },
    {
      id: 7,
      name: "Panel Discussion",
      time: "12:00 PM - 01:10 PM",
      details: "Generative AI at scale with Cloud",
      // member: "To be Confirmed",
    },
    {
      id: 8,
      name: "Photo Session & Vote of Thanks",
      time: "01:10 PM - 01:20 PM",
    },
    {
      id: 9,
      name: "Lunch",
      time: "01:20 PM - 02:00 PM",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-colloquiumOrangeLight py-32">
        <div className="flex flex-col">
          <div className="flex flex-col mt-4">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-9/12 px-4">
                  <h1 className="text-gray-900 text-4xl font-bold mb-8">
                    Schedule
                  </h1>
                  <p className="text-gray-700 text-lg font-light">
                    Unlocking Knowledge: Explore Our Engaging Schedule!
                  </p>
                </div>
              </div>
              <div className="mt-7 sm:mt-10 flex flex-col">
                <div>
                  <span className="flex items-center py-3 px-5 bg-colloquiumOrange">
                    <IconCalendar />
                    <h3 className="text-sm font-semibold uppercase tracking-wide">
                      24 February 2024, Saturday
                    </h3>
                  </span>
                  {schedule.map((item) => (
                    <ul className="py-4 flex flex-col" key={item?.id}>
                      <li className="group py-3 px-2 sm:px-5 flex items-center">
                        <div className="flex-shrink-0 mr-5 sm:mr-20 px-2 flex flex-col bg-yellow-50">
                          <span className="text-sm sm:text-base text-yellow-500 font-bold">
                            {item?.time}
                          </span>
                        </div>
                        {/* :::details container */}
                        <div className="col-span-7 sm:col-span-6 px-3">
                          <p className="text-base text-gray-700 font-bold uppercase">
                            {item?.name}
                          </p>
                          <p className="mt-2 text-xs sm:text-sm text-gray-500">
                            {item?.member}
                          </p>
                          <p className="mt-2 text-xs sm:text-sm text-gray-500">
                            {item?.details}
                          </p>
                        </div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
