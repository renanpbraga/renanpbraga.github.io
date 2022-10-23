import { INavbarLink } from "./navbar-link.interface";

export interface INavbar {
  brand: string;
  links: INavbarLink[];
}