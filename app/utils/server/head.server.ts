import type { HtmlLinkDescriptor, HtmlMetaDescriptor, LinkDescriptor } from 'remix';

import config from '~/config';

export const defaultTitle = `Rofi's Blog`;
const defaultDescription = config.manifest.description;
const defaultKeyword = 'remix, remix run, blog, developer blog, syahrul rofi, rofi';
const defaultImage = 'https://res.cloudinary.com/rofi/image/upload/v1640191303/blog/social.png';

type BuildMetaParam = {
  title?: string;
  description?: string;
  keyword?: string;
  image?: string;
  hideTitle?: boolean;
};

export function buildMeta({
  description = defaultDescription,
  image = defaultImage,
  keyword = defaultKeyword,
  title = defaultTitle,
  hideTitle = false
}: BuildMetaParam = {}): HtmlMetaDescriptor {
  const metaTitle = title === defaultTitle ? title : `${title} | ${defaultTitle}`;

  return {
    ...(!hideTitle && { title: metaTitle }),
    'og:title': metaTitle,
    'twitter:title': metaTitle,
    description,
    'og:description': description,
    'twitter:description': description,
    'og:image': image,
    'twitter:image': image,
    'twitter:card': 'summary_large_image',
    'twitter:creator': '@RofiSyahrul',
    'twitter:site': config.manifest.name,
    site: config.manifest.name,
    'og:site': config.manifest.name,
    keywords: keyword
  };
}

type StylesheetDescriptor = string | Omit<HtmlLinkDescriptor, 'rel'>;

export function buildLinks(
  styles: StylesheetDescriptor[] = [],
  linkDescriptors: LinkDescriptor[] = []
): LinkDescriptor[] {
  const styleDescriptors = styles.map<LinkDescriptor>((style) => {
    const rel = 'stylesheet';

    if (typeof style === 'string') {
      return {
        rel,
        href: style
      };
    }

    return { rel, ...style };
  });

  return [...linkDescriptors, ...styleDescriptors];
}
