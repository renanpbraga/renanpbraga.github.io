import { INavbarLink } from "../../../Shared/interfaces/navbar-link.interface";

export default function NavbarLink({ link, url }: INavbarLink) {
  return (
    <a
      className="text-gray-500 underline-offset-4 hover:text-primary hover:underline"
      href={url}
    >
      {link}
    </a>
  );
}
