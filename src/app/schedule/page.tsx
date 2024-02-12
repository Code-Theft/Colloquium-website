import IconCalendar from "@icons/IconCalendar";
import React from "react";
// import { CalendarIcon } from "@heroicons/react";

const Schedule5 = () => {
  const schedule = [
    {
      day: "Thursday 28th",
      events: [
        {
          id: 1,
          name: "Registration",
          href: "#link",
          time: "09:00 AM",
          details: "",
          member: "Alice Doe",
        },
        {
          id: 2,
          name: "Introduction",
          href: "#link",
          time: "10:30 AM",
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          member: "John Doe",
        },
        {
          id: 3,
          name: "Financial Meeting",
          href: "#link",
          time: "14:00 PM",
          details:
            "Accusantium atque tempore dolore ratione unde sunt dignissimos recusandae saepe provident architecto.",
          member: "John Doe",
        },
      ],
    },
    {
      day: "Friday 29th",
      events: [
        {
          id: 1,
          name: "Content Marketing",
          href: "#link",
          time: "12:00 AM",
          details:
            "Consectetur harum porro quam, facere necessitatibus quos veritatis.",
          member: "John Doe",
        },
        {
          id: 2,
          name: "Social Media",
          href: "#link",
          time: "15:50 PM",
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          member: "Alice Doe",
        },
      ],
    },
  ];

  return (
    <div className="mx-auto py-8 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-4xl">
        {/* :TITLE CONTAINER */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm text-gray-300 font-bold uppercase tracking-widest">
            Schedule
          </p>
          <h2 className="mt-3 text-2xl sm:text-4xl font-extrabold tracking-wide">
            <span className="text-gray-700">Event </span>
            <span className="text-yellow-500">Schedule</span>
          </h2>
        </div>

        {/* :SCHEDULE */}
        <div className="mt-5 sm:mt-10 flex flex-col">
          {schedule.map((day) => (
            <div key={day.day}>
              {/* ::Day */}
              <span className="flex items-center py-3 px-5 bg-gray-800 text-gray-50">
                {/* <CalendarIcon className="mr-4 w-6 h-6" /> */}
                <IconCalendar />
                <h3 className="text-sm font-semibold uppercase tracking-wide">
                  {day.day}
                </h3>
              </span>
              {/* ::Events */}
              <ul className="py-1 flex flex-col">
                {day.events.map((event) => (
                  <li
                    key={event.id}
                    className="group py-3 px-2 sm:px-5 flex items-center"
                  >
                    {/* :::time container */}
                    <div className="flex-shrink-0 mr-5 sm:mr-20 px-2 flex flex-col bg-yellow-50">
                      <span className="text-sm sm:text-base text-yellow-500 font-bold">
                        {event.time}
                      </span>
                    </div>
                    {/* :::details container */}
                    <div className="col-span-7 sm:col-span-6 px-3">
                      <p className="text-base text-gray-700 font-bold uppercase">
                        {event.name}
                      </p>
                      <p className="mt-2 text-xs sm:text-sm text-gray-500">
                        {event.details}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule5;
