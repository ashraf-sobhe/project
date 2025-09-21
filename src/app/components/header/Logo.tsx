"use client";

import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image
        src="/logo2.png"
        alt="SnackHub Logo"
        width={70}  // صغرت العرض شوية
        height={28}
        priority
      />
    </div>
  );
};

export default Logo;
