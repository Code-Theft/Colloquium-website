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
import Image from "@components/Image";
import { imageAlts, navigation } from "@utils/constants";
import ScrollTop from "@widgets/Footer/components/ScrollTop";

export default function Footerview() {
  return (
    <section id="contact">
      <footer className="custom-footer">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <ScrollTop />
          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div className="flex justify-center text-white lg:justify-start">
                <Image
                  src="/images/logos/csks/csks_logowhite.png"
                  alt={imageAlts.CSKS_LOGO}
                  width={150}
                  height={30}
                />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400 lg:text-left">
                IEEE Computer Society (CS) drives progress in Computer Science
                and Engineering by fostering collaboration among professionals
                worldwide. Through conferences, publications, and diverse
                programs, we empower leaders, ensuring they are equipped to
                drive innovation and make a positive global impact. Explore more
                in our footer section.
              </p>
            </div>

            <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:mt-0 lg:justify-end lg:gap-12">
              {navigation.map((nav) => (
                <li key={nav?.name}>
                  <Link
                    className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                    href={nav?.href}
                  >
                    {nav.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400 lg:text-right">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}
