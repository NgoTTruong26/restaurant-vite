import { ReactNode } from "react";

export interface Contact<T> {
  icons?: ReactNode;
  title: string;
  content: T;
}
