import MobileMenu from "../MobileMenu/MobileMenu";
import { INavbar } from "../Shared/interfaces/navbar.interface";
import List from "./List/List";

export default function Navbar({ brand, links }: INavbar) {
  return (
    <nav id="navbar" className="sticky top-0 bg-white py-4 shadow-lg bg-gray" style={{'zIndex': 2}}>
      <div className="container mx-auto flex justify-between">
        <div>
          <span className="text-xl font-semibold text-primary">{brand}</span>
        </div>
        <div className="w-96 hidden lg:block">
          <List links={links} orientation={'flex-row'}></List>
        </div>
        <div className="block lg:hidden">
          <MobileMenu links={links}></MobileMenu>
        </div>
      </div>
    </nav>
  );
}
