import React from "react";
import List from "./List/List";

interface INavbar {
  brand: string;
  links: string[];
}

export default function Navbar({ brand, links }: INavbar) {
  return (
    <nav id="navbar" className="sticky top-0 bg-white py-4 px-8 shadow-lg bg-gray" style={{'zIndex': 2}}>
      <div className="container mx-auto flex justify-between">
        <div>
          <span className="text-xl font-semibold text-primary">{brand}</span>
        </div>
        <div>
          <List items={links}></List>
        </div>
      </div>
    </nav>
  );
}
