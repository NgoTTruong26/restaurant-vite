import { Icons } from "interfaces/icons";

export interface Navbar<T> extends Icons {
  content: string;
  id?: string;
  dropdown?: Array<T>;
}
