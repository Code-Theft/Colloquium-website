/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

'use client'

import React, { useEffect, useState } from 'react';
import styles from '@themes/about.module.css'
import Image from "@components/Image";
import { aboutData, imageAlts } from "@utils/constants";
import { reverse } from 'dns';

export default function AboutPageView() {
    const [windowWidth, setWindowWidth] = useState(767);

    useEffect(() => {
        // Update window width on mount and on resize
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        // Initial update
        updateWindowWidth();

        // Add event listener for window resize
        window.addEventListener('resize', updateWindowWidth);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);
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
