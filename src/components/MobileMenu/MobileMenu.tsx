import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import List from "../Navbar/List/List";
import { INavbarLink } from "../Shared/interfaces/navbar-link.interface";
import { INavbar } from "../Shared/interfaces/navbar.interface";

export default function MobileMenu({ links }: any) {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {}, [isMenuOpen]);

  return (
    <>
      <div className="relative cursor-pointer">
        {isMenuOpen ? (
          <>
            <HiOutlineMenuAlt3 size={24} onClick={() => setIsMenuOpen(false)}/>
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
