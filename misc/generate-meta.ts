const twitterAuthor = '@Xeltica';
const favicon = 'https://xeltica.work/favicon.ico';
const defaultDescription = '作曲、Web制作、アプリ開発なら、Xeltica におまかせ。';

export function generateMeta (title?: string, description?: string) {
  const d = description || defaultDescription;
  const t = title ? `${title} - xeltica.work` : 'xeltica.work';
  return [
    { hid: 'description', name: 'description', content: d },
    { hid: 'twitter:card', property: 'twitter:card', content: 'summary' },
    { hid: 'twitter:site', property: 'twitter:site', content: twitterAuthor },
    { hid: 'twitter:creator', property: 'twitter:creator', content: twitterAuthor },
    { hid: 'og:title', property: 'og:title', content: t },
    { hid: 'og:description:', property: 'og:description', content: d },
    { hid: 'og:type:', property: 'og:type', content: 'website' },
    {
      hid: 'og:image',
      property: 'og:image',
      content: favicon
    }
  ];
}
