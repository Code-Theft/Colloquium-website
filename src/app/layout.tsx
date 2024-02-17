/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import type { Metadata } from "next";
import "@styles/scss/main.scss";
import { Children } from "@lib/types";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";

export const metadata: Metadata = {
  title: "Colloquium24",
  description:
    "Colloquium is an annual event by the IEEE Computer Society Kerala Chapter, serves as a premier networking platform for IEEE and non-IEEE professionals. This repository serves as the foundation for our team to build and maintain the Colloquium website.The website developed using NextJS - App Router, TypeScript and Tailwind CSS.",
};

export default function RootLayout({ children }: Children) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
