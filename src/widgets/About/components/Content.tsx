/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */
import React, { useEffect, useState } from 'react';
import styles from '@themes/about.module.css'
import { aboutData } from "@utils/constants";

export default function AboutPageView() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    {aboutData && aboutData.map((about, index) => (
                        <div className={styles.row} key={index} >
                            <div className={styles.titleRow}>
                                <span className={styles.title}>{about?.title}</span>
                            </div>
                            <div className={about?.reverse ? styles.innerRowReverse : styles.innerRow}>
                                <div className={styles.rowLeft}>
                                    <img src={about?.img} alt="" className={styles.colloquiumLogo} />
                                </div>
                                <div className={styles.rowRight}>
                                    <p className={styles.description}>{about?.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}