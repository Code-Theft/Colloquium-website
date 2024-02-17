/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

"use client";

import dynamic from "next/dynamic";
import Link from "@components/Link";
import React, { useState } from "react";
import Icon3Bars from "@icons/Icon3Bars";
import ColloquiumLogo from "@icons/ColloquiumLogo";
import { constants, navigation } from "@utils/constants";
const NavMobileView = dynamic(
  () => import("@widgets/Header/components/NavMobileView")
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 custom-header">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/">
            <ColloquiumLogo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Icon3Bars aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 text-black-300">
          {navigation.map((item) => (
            <Link
              key={item?.name}
              href={item?.href}
              className="text-sm font-semibold leading-6 text-black"
            >
              {item?.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href={constants.REGISTER_LINK}
            className="text-sm font-semibold leading-6 text-colloquiumOrange hover:text-black-600 transition duration-300 ease-in-out "
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
