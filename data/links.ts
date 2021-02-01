import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Link {
  name: string;
  icon: IconProp
  href: string;
}

export const links: Link[] = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/adxlw',
    icon: faTwitter
  },
  {
    name: 'Blog',
    href: 'https://note.com/xeltica',
    icon: faNewspaper
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Xeltica',
    icon: faGithub
  }
];
