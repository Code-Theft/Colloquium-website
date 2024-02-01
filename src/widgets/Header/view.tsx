/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

"use client";

import Link from "@components/Link";
import React, { useState } from "react";
import Hero from "@widgets/Header/Hero";
import Icon3Bars from "@icons/Icon3Bars";
import { navigation } from "@utils/constants";
import NavMobileView from "@widgets/Header/NavMobileView";

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Hero />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Icon3Bars className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item?.name}
              href={item?.href}
              className="text-sm font-semibold leading-6 text-white"
            >
              {item?.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="#"
            className="text-sm font-semibold leading-6 text-colloquiumOrange"
          >
            Register <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <NavMobileView
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
