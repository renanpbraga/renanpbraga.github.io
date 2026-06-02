import React, { useState } from "react";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import List from "../Navbar/List/List";
import { INavbar } from "../Shared/interfaces/navbar.interface";

export default function MobileMenu({ links }: Partial<INavbar>) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      {isMenuOpen ? (
        <>
          <BiMenuAltRight size={24} className="cursor-pointer text-white" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute right-0 top-12 z-50 w-64 rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-4 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            <List links={links} orientation="flex-col" />
          </div>
        </>
      ) : (
        <BiMenu size={24} className="cursor-pointer text-white" onClick={() => setIsMenuOpen(true)} />
      )}
    </div>
  );
}
