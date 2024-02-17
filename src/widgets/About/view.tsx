/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import React from "react";
import styles from "@themes/about.module.css";
import Content from "@widgets/About/components/Content";

export default function AboutPageView() {
  return (
    <div className={styles.homeContainer}>
      <Content />
    </div>
  );
}
