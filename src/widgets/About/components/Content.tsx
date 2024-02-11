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
import { aboutUs } from "@utils/constants";
import Image from "@components/Image";

export default function AboutPageView() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.aboutItemBox}>
          {aboutUs?.map((about) => (
            <div
              className={styles.aboutBox}
              key={`about_us_item_key_${about?.id}`}
            >
              <div className={styles.aboutRow}>
                <div className={styles.titleRow}>
                  <span className={styles.title}>{about?.title}</span>
                </div>
              </div>
              <div className={styles.aboutRow}>
                <div
                  className={
                    about?.reverse ? styles.itemRowReverse : styles.itemRow
                  }
                >
                  <div className={styles.aboutItem}>
                    <Image
                      src={about?.img}
                      alt=""
                      width={400}
                      height={400}
                      className={styles.logo}
                    />
                  </div>
                  <div className={styles.aboutItem}>
                    <p className={styles.aboutDesc}>{about?.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
