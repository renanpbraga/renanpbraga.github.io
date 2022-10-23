import "../../../styles/global.css";
import NavbarLink from "./NavbarLink/NavbarLink";

export default function List({ items }: any) {
  return (
    <>
      <ul className="flex">
        {items.map((item: string, index: number) => {
          return (
            <li className="ml-8 " key={index}>
              <NavbarLink text={item}></NavbarLink>
            </li>
          );
        })}
      </ul>
    </>
  );
}
