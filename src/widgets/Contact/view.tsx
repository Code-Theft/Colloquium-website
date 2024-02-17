/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import IconChat from "@icons/IconChat";
import IconMail from "@icons/IconMail";
import Image from "@components/Image";

const contact = [
  {
    id: 1,
    name: "Janajith D",
    role: "Joint-Secretary YP, IEEE CS Kerala Chapter",
    img: "/images/assets/contact/jana.png",
    mail: "janajithd@ieee.org",
    contact: "8078058944",
  },
  {
    id: 2,
    name: "Akhil Raj",
    role: " Secretary, IEEE CS Kerala Chapter",
    img: "/images/assets/contact/akhil.png",
    mail: "akhilraj2106in@ieee.org",
    contact: "7356047629",
  },
  {
    id: 3,
    name: "Dr. Deepthi Sasidharan",
    role: "Chair, IEEE CS Kerala Chapter",
    img: "/images/assets/contact/deepthi.png",
    mail: "deepthis@ieee.org",
    contact: "9544170787",
  },
];
export default function ContactView() {
  return (
    <section className="bg-colloquiumOrangeLight">
      <div className="max-w-screen-xl px-4 py-20 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-black-100">
            Contact
          </h2>
        </div>
        <div className="flex flex-wrap justify-center py-8">
          {contact?.map((item) => (
            <div
              className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-4"
              key={item?.id}
            >
              <div className="flex flex-col items-center py-10">
                <Image
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={item?.img}
                  width={400}
                  height={400}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-black-300">
                  {item?.name}
                </h5>
                <span className="text-sm text-black-300">{item?.role}</span>
                <div className="flex mt-4 md:mt-6">
                  <a
                    href={`mailto:${item?.mail}`}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-ColloquiumOrangeNormal rounded-lg hover:bg-colloquiumOrange focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <IconMail className="mr-2 w-6 h-6" />
                    E-Mail
                  </a>
                  <a
                    href={`tel:${item?.contact}`}
                    className="inline-flex items-center py-2 px-4 ms-2 text-sm font-medium text-black-300 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                  >
                    <IconChat className="mr-2 w-6 h-6" />
                    Message
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
