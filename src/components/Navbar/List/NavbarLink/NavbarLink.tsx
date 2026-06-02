import { INavbarLink } from "../../../Shared/interfaces/navbar-link.interface";

export default function NavbarLink({ link, url }: INavbarLink) {
  return (
    <a className="text-slate-200 transition hover:text-primary" href={url}>
      {link}
    </a>
  );
}
