import type { HtmlMetaDescriptor, LinkDescriptor } from 'remix';

import config from '~/config';
import singleLine from '~/utils/string/single-line';

export function buildBaseMeta() {
  return {
    viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
    'theme-color': config.manifest.themeColor,
    'application-name': config.manifest.name
  };
}

export function buildAppleAppMeta(): HtmlMetaDescriptor {
  return {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': config.manifest.name,
    'apple-mobile-web-app-status-bar-style': 'default'
  };
}

export function buildMSAppMeta(): HtmlMetaDescriptor {
  const icons = [
    { name: 'square70x70', size: '128' },
    { name: 'square150x150', size: '270' },
    { name: 'square310x310', size: '558' },
    { name: 'wide310x150', size: '558-270' }
  ];

  const msAppMeta: HtmlMetaDescriptor = {
    'msapplication-navbutton-color': config.manifest.themeColor,
    'msapplication-TileColor': config.manifest.backgroundColor,
    'msapplication-starturl': '/',
    'msapplication-tap-highlight': 'no'
  };

  return icons.reduce((obj, icon) => {
    const name = `msapplication-${icon.name}`;
    const content = `/icons/mstile-icon-${icon.size}.png`;
    return {
      ...obj,
      [name]: content
    };
  }, msAppMeta);
}

export function buildAppleTouchStartupImageLinks(): LinkDescriptor[] {
  const images = [
    { size: '2048-2732', width: 1024, height: 1366, ratio: 2 },
    { size: '1668-2388', width: 834, height: 1194, ratio: 2 },
    { size: '1536-2048', width: 768, height: 1024, ratio: 2 },
    { size: '1668-2224', width: 834, height: 1112, ratio: 2 },
    { size: '1620-2160', width: 810, height: 1080, ratio: 2 },
    { size: '1284-2778', width: 428, height: 926, ratio: 3 },
    { size: '1170-2532', width: 390, height: 844, ratio: 3 },
    { size: '1125-2436', width: 375, height: 812, ratio: 3 },
    { size: '1242-2688', width: 414, height: 896, ratio: 3 },
    { size: '828-1792', width: 414, height: 896, ratio: 2 },
    { size: '1242-2208', width: 414, height: 736, ratio: 3 },
    { size: '750-1334', width: 375, height: 667, ratio: 2 },
    { size: '640-1136', width: 320, height: 568, ratio: 2 }
  ];

  return images.map((image) => ({
    rel: 'apple-touch-startup-image',
    href: `/icons/apple-splash-${image.size}.png`,
    media: singleLine`(device-width: ${image.width}px) and (device-height: ${image.height}px)
    and (-webkit-device-pixel-ratio: ${image.ratio}) and (orientation: portrait)`
  }));
}

export function buildManifestIconLinks(): LinkDescriptor[] {
  return config.manifest.iconSizes.map((iconSize) => ({
    rel: 'icon',
    type: 'image/png',
    href: `/icons/manifest-icon-${iconSize}.maskable.png`
  }));
}
