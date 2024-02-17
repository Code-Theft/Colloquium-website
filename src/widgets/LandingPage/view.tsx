/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import AssetsFooterWide from "@core/AssetsFooterWide";
import Content from "@widgets/LandingPage/components/Content";

export default function LandingPageview() {
  return (
    <div className="home-custom">
      <Content />
      <div className="landing-footer-container">
        <AssetsFooterWide className="AssetsFooterWide" />
      </div>
    </div>
  );
}
