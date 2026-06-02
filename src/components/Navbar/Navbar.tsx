import MobileMenu from "../MobileMenu/MobileMenu";
import { INavbar } from "../Shared/interfaces/navbar.interface";
import List from "./List/List";

export default function Navbar({ brand, links }: INavbar) {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/95 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.75)]">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div>
          <span className="text-xl font-semibold text-white">{brand}</span>
        </div>
        <div className="hidden lg:block">
          <List links={links} orientation={"flex-row"} />
        </div>
        <div className="block lg:hidden">
          <MobileMenu links={links} />
        </div>
      </div>
    </nav>
  );
}
