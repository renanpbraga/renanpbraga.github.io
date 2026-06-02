import "../../../styles/global.css";
import { INavbarLink } from "../../Shared/interfaces/navbar-link.interface";
import NavbarLink from "./NavbarLink/NavbarLink";

export default function List({ links, orientation }: any) {
  return (
    <ul className={`flex ${orientation} items-center gap-8`}>
      {links.map((link: INavbarLink, index: number) => (
        <li
          className={orientation === "flex-col" ? "my-2" : "my-0"}
          key={index}
        >
          <NavbarLink url={link.url} link={link.link} />
        </li>
      ))}
    </ul>
  );
}
