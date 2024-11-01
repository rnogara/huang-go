"use client";
import { useEffect, useState } from "react";
import Menu from "./Menu";
import { cn } from "~/lib/utils";

export default function Header() {
  const [isPageScrolled, setIsPageScrolled] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setIsPageScrolled(window.scrollY !== 0);
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, [isPageScrolled]);

  return (
    <header className="relative z-30">
      <div className={cn(
        "fixed top-0 left-0 w-full h-16 flex justify-between items-center px-8",
        { "bg-white/50 shadow-md": isPageScrolled },
      )}>
        <p className="text-3xl drop-shadow-2xl">
          Huang Go
        </p>
        <Menu />
      </div>
    </header>
  );
}