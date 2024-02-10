/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Abhishek Santhosh
 */

import React from "react";
import Header from "@widgets/Header";
import Footer from "@widgets/Footer";
import Content from "@widgets/About/components/Content";
import styles from '@themes/about.module.css'

export default function AboutPageView() {
    return (
        <>
            <div className={styles.homeContainer}>
                <Header />
                <Content />
                <Footer />
            </div>
        </>
    );
}
