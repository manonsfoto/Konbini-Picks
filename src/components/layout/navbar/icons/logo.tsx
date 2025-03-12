import Image from "next/image";
import React from "react";
const Logo = () => {
  return (
    <Image
      src="/logo.png"
      alt={`${process.env.SITE_NAME}`}
      width={100}
      height={100}
    />
  );
};

export default Logo;
