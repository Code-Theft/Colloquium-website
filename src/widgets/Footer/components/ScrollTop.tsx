/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */
"use client";

import React from "react";
import IconScrollToTop from "@icons/IconScrollToTop";

export default function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
      <button
        className="inline-block rounded-full bg-teal-600 p-2 text-white shadow transition hover:bg-teal-500 dark:bg-gray-700 dark:text-teal-300 dark:hover:bg-gray-600 sm:p-3 lg:p-4"
        onClick={scrollToTop}
      >
        <span className="sr-only">Back to top</span>
        <IconScrollToTop />
      </button>
    </div>
  );
}
