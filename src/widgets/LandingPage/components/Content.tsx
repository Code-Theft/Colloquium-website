/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Link from "@components/Link";
import { constants } from "@utils/constants";

export default function Content() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-black-600">
            IEEE CS SYP Kerala Chapter presents
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-ColloquiumOrangeNormal sm:text-6xl">
            Colloquium'24
          </h1>
          <p className="mt-6 text-sm leading-8 text-black-600">
            COLLOQUIUM, an annual event by the IEEE Computer Society Kerala
            Chapter, serves as a premier networking platform for IEEE and
            non-IEEE professionals, offering a unique opportunity to share
            insights, stay abreast of industry trends, and facilitate
            interactions across diverse technological domains.
          </p>
          <div className="mt-10 flex flex-col items-center lg:flex-row lg:justify-center lg:gap-x-6">
            <Link
              href={constants.REGISTER_LINK}
              className="rounded-md border boder-indigo bg-black-300 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-colloquiumOrange  hover:text-black-300 transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </Link>
            <Link
              href="/about"
              className="mt-4 lg:mt-0 text-sm font-semibold leading-6 text-black hover:text-colloquiumOrange transition duration-300 ease-in-out"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
