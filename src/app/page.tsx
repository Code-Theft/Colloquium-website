/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Speaker from "@widgets/Speakers";
import Sponsors from "@widgets/Sponsors";
import FeatureView from "@widgets/Feature";
import LandingPageview from "@widgets/LandingPage";

export default function Home() {
  return (
    <>
      <LandingPageview />
      <FeatureView />
      <Speaker />
      <Sponsors />
    </>
  );
}
