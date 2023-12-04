import { ELoginDropdown } from 'Layout/constant';

export interface LoginDropdown {
  key: keyof typeof ELoginDropdown;
  content: string;
  href?: string;
}
