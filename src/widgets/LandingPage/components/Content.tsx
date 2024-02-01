/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import Link from "@components/Link";
import React from "react";

export default function Content() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white">
            IEEE CS SYP Kerala Chapter presents
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-ColloquiumORangeNormal sm:text-6xl">
            Colloquium'24
          </h1>
          <p className="mt-6 text-lg leading-8 text-white">
            COLLOQUIUM, an annual event by the IEEE Computer Society Kerala
            Chapter, serves as a premier networking platform for IEEE and
            non-IEEE professionals, offering a unique opportunity to share
            insights, stay abreast of industry trends, and facilitate
            interactions across diverse technological domains.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#"
              className="rounded-md border boder-indigo bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-colloquiumOrange shadow-sm hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register Now
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-white hover:text-colloquiumOrange transition duration-300 ease-in-out"
            >
              Learn more <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
