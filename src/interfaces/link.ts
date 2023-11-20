import { ReactNode } from 'react';

export interface Link {
  content: string;
  href: string;
}

export interface LinkWithIcons extends Link {
  id?: string;
  icons: ReactNode;
}
