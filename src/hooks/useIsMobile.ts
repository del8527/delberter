import { useState, useEffect } from "react";

export const useIsMobile = (): { isMobile: boolean; isLoading: boolean } => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsLoading(false);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return { isMobile, isLoading };
};
