import Image from "next/image";
import React from "react";

const members = [
  {
    name: "John Deo",
    role: "Full Stack Devloper",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Vimal Kumar",
    role: "DevOps, SADA",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "John Deo",
    role: "Full Stack Devloper",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "John Deo",
    role: "Full Stack Devloper",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "John Deo",
    role: "Full Stack Devloper",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "John Deo",
    role: "Full Stack Devloper",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function SpeakerView() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white py-32">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
          <div className="container max-w-7xl px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-9/12 px-4">
                <h1 className="text-gray-900 text-4xl font-bold mb-8">
                  Our Speakers
                </h1>
                <p className="text-gray-700 text-lg font-light">
                  With over 100 years of combined experience, we've got a
                  well-seasoned team at the helm. //Todo: Change needed
                </p>
              </div>
            </div>

            <div className="flex flex-wrap">
              {members?.map((item, index) => (
                <>
                  <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4" key={`spekaer_map_key_${index+1}`}>
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
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
