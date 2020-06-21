import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faYoutube, faBandcamp, faSoundcloud, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface Link {
    name: string;
    icon: IconProp
    href: string;
}

export const links: Link[] = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/Xeltica',
    icon: faTwitter
  },
  {
    name: 'Blog',
    href: 'https://note.com/xeltica',
    icon: faNewspaper
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UCH3I30Y6NrXTNP1kEceRRZQ',
    icon: faYoutube
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Xeltica',
    icon: faGithub
  },
  {
    name: 'SoundCloud',
    href: 'https://soundcloud.com/Xeltica',
    icon: faSoundcloud
  },
  {
    name: 'Bandcamp',
    href: 'https://xeltica.bandcamp.com/',
    icon: faBandcamp
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/xeltica/',
    icon: faInstagram
  }
];
