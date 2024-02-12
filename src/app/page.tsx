/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Footer from "@widgets/Footer";
import Speaker from "@widgets/Speakers";
import LandingPageview from "@widgets/LandingPage";
import FeatureView from "@widgets/Feature";

export default function Home() {
  return (
    <>
      <LandingPageview />
      <FeatureView />
      <Speaker />
      <Footer />
    </>
  );
}
