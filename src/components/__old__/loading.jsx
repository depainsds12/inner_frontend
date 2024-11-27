"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LoadingScreen = () => {
  const pathname = usePathname();

  const [loading, setLoading] = useState(1);

  useEffect(() => {
    setLoading(loading + 1);

    setTimeout(() => {
      setLoading(0);
    }, 300);
  }, [pathname]);

  return (
    <>
      {loading ? (
        <div className="bg-purple-outer-octagon fixed left-0 top-0 z-[99] grid h-full w-full place-items-center">
          <div className="h-32 w-32 animate-spin rounded-full border-b-4 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoadingScreen;
