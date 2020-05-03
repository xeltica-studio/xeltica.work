const twitterAuthor = '@Xeltica';
const favicon = 'https://xeltica.work/favicon.ico';
const defaultDescription = '作曲、Web制作、アプリ開発なら、Xeltica におまかせ。';

export function generateMeta (title?: string, description?: string) {
  const d = description || defaultDescription;
  const t = title ? `${title} - xeltica.work` : 'xeltica.work';
  return [
    { hid: 'description', name: 'description', content: d },
    { property: 'twitter:card', content: 'summary' },
    { property: 'twitter:title', content: t },
    { property: 'twitter:site', content: twitterAuthor },
    { property: 'twitter:creator', content: twitterAuthor },
    { property: 'twitter:description', content: d },
    {
      property: 'twitter:image',
      content: favicon
    },
    { property: 'og:title', content: t },
    { property: 'og:description', content: d },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:image',
      content: favicon
    }
  ];
}
