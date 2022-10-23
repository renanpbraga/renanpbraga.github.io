import "../../../styles/global.css";
import { INavbarLink } from "../../Shared/interfaces/navbar-link.interface";
import NavbarLink from "./NavbarLink/NavbarLink";

export default function List({ links, orientation }: any) {
  return (
    <>
      <ul className={`flex justify-between ${orientation}`}>
        {links.map((link: INavbarLink, index: number) => {
          return (
            <li
              className={`justify-between ${
                orientation == "flex-col" ? "my-2 flex-col" : "my-0"
              })`}
              key={index}
            >
              <NavbarLink url={link.url} link={link.link}></NavbarLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
