/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";
import Speaker from "@widgets/Speakers";
import Content from "@widgets/LandingPage/components/Content";


export default function LandingPageview() {
  return (
    <>
      <div className="bg-white home-custom">
        <Header />
        <Content />
      </div>
      <Speaker />
      <Footer />
    </>
  );
}
