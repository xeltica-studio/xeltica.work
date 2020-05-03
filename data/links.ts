import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faTwitter, faYoutube, faBandcamp, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

import { Link } from '@/data/link';

export const links: Link[] = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/Xeltica',
    icon: faTwitter
  },
  {
    name: 'Blog',
    href: 'https://blog.xeltica.work',
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
    icon: faSoundcloud
  },
  {
    name: 'SoundCloud',
    href: 'https://soundcloud.com/Xeltica',
    icon: faGithub
  },
  {
    name: 'Bandcamp',
    href: 'https://xeltica.bandcamp.com/',
    icon: faBandcamp
  }
];
