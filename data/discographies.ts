export interface Discography {
  imgsrc: string;
  title: string;
  description: string;
  tunecore?: string;
  soundcloud?: string;
  bandcamp?: string;
}

export const discographies = [
  {
    imgsrc: require('@/assets/discography/hsm.jpg'),
    title: '氷雨',
    description: '7th single.',
    tunecore: 'BGeee7qy'
  },
  {
    imgsrc: require('@/assets/discography/sacred_fire.png'),
    title: '聖火',
    description: '6th single.',
    tunecore: 'ZnGHccF3'
  },
  {
    imgsrc: require('@/assets/discography/airship.png'),
    title: '飛行艇',
    description: '5th single.',
    tunecore: 'ZnGHccF3'
  },
  {
    imgsrc: require('@/assets/discography/cause.webp'),
    title: '火種',
    description: '4th single.',
    tunecore: '7m60Hmud'
  },
  {
    imgsrc: require('@/assets/discography/summer.webp'),
    title: '夏色の手紙',
    description: '3rd single.',
    tunecore: 'g8G7bs3s'
  },
  {
    imgsrc: require('@/assets/discography/bookstand.png'),
    title: '書見台',
    description: '2nd single.',
    bandcamp: '-'
  },
  {
    imgsrc: require('@/assets/discography/denshi.jpg'),
    title: '電子の海',
    description: '1st single.',
    soundcloud: 'xeltica/denshi_no_umi'
  },
  {
    imgsrc: require('@/assets/discography/tuj.jpg'),
    title: 'Take Up Jewel OST',
    description: 'ゲーム「Take Up Jewel」の全曲を含む、サウンドトラックアルバム。',
    bandcamp: 'take-up-jewel-ost'
  }
];
