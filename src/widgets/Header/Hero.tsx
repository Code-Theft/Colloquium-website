/**
 * © IEEE CS Kerala Chapter 2024. All rights reserved.
 *
 * This code is the property of IEEE CS Kerala Chapter and is protected by copyright law.
 * Unauthorized use, reproduction, or distribution is strictly prohibited.
 *
 * @author Janajith D
 */

import React from "react";
import Link from "@components/Link";
import Image from "@components/Image";
import { imageAlts } from "@utils/constants";

export default function Hero() {
  return (
    <>
      <Link href="/" className="-m-1.5 p-1.5">
        <Image
          src="/images/logo.png"
          width={200}
          height={50}
          alt={imageAlts.LOGO}
          className="h-8 w-auto"
        />
      </Link>
    </>
  );
}
