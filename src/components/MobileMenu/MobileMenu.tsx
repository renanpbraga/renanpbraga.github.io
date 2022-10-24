import React, { useEffect, useState } from "react";
import { BiMenu, BiMenuAltRight } from "react-icons/bi";
import List from "../Navbar/List/List";
import { INavbar } from "../Shared/interfaces/navbar.interface";

export default function MobileMenu({ links }: Partial<INavbar>) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {}, [isMenuOpen]);

  return (
    <>
      <div className="relative cursor-pointer">
        {isMenuOpen ? (
          <>
            <BiMenuAltRight size={24} onClick={() => setIsMenuOpen(false)}/>
            <div className="absolute top-12 right-0 rounded-xl border border-gray-300 bg-white p-4 shadow-md w-52">
              <List links={links} orientation="flex-col"></List>
            </div>
          </>
        ) : (
          <BiMenu size={24} onClick={() => setIsMenuOpen(true)} />
        )}
      </div>
    </>
  );
}
