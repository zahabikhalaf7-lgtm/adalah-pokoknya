import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  isHighlighted?: boolean;
}

export interface Stat {
  label: string;
  value: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
}
