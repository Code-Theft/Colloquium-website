/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import React from "react";
import styles from '@themes/about.module.css'
import Image from "@components/Image";
import { imageAlts } from "@utils/constants";

export default function AboutPageView() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.row}>
                    <div className={styles.titleRow}>
                        <span className={styles.title}>About COLLOQUIUM</span>
                    </div>
                    <div className={styles.innerRow}>
                        <div className={styles.rowLeft}>
                            <img src="/images/logo.png" alt="" className={styles.colloquiumLogo} />
                        </div>
                        <div className={styles.rowRight}>
                            <p className={styles.description}>COLLOQUIUM, hosted annually by the IEEE Computer Society Kerala Chapter (CSKS), is a premier networking and knowledge-sharing event. Designed for IEEE and non-IEEE professionals, COLLOQUIUM provides a unique platform for sharing insights, staying updated on industry trends, and fostering interactions among professionals from diverse technological domains.

                                <br /><br />Each edition focuses on a specific theme, and COLLOQUIUM'24 will highlight the pivotal field of Cloud Computing. Join us at this vibrant event to delve into the latest advancements, connect with experts, and explore the future of technology. Don't miss the opportunity to be part of the dynamic discussions and collaborative sessions that define COLLOQUIUM!
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.row}></div>
                <div className={styles.row}></div>
            </div>
        </>
    );
}
