import mobileSource from './mobile-design-source.html?raw';
import { services } from './services.js';
import { linkServiceHeadings } from './serviceLinks.js';
import { siteBrandMarkup } from './siteBrandMarkup.js';
import { siteFooterMarkup } from './siteFooterMarkup.js';
import { applyWebsiteCopy } from './websiteCopy.js';

const rootMarker =
  '<div style="font-family:\'Public Sans\',system-ui,sans-serif;color:#0F172A;background:#fff;font-size:16px;overflow-x:hidden">';
const rootStart = mobileSource.indexOf(rootMarker);
const rootEnd = mobileSource.lastIndexOf('</div></x-dc>');

if (rootStart < 0 || rootEnd < rootStart) {
  throw new Error('Could not extract the original mobile design.');
}

let mobileDesignMarkup = linkServiceHeadings(applyWebsiteCopy(
  mobileSource.slice(rootStart, rootEnd + '</div>'.length),
));
mobileDesignMarkup = mobileDesignMarkup
  .replaceAll(
    'src="./assets/f4de0ffd6b120f6b03c8878e12f27828.jpg"',
    'src="/assets/Upscale_image_7363fbcd.jpg"',
  )
  .replaceAll(
    'alt="Amata technician team"',
    'alt="Amata technician team" fetchpriority="high" decoding="async" data-image-slot="team-photo"',
  )
  .replaceAll(
    'alt="Amata technician with sprayer"',
    'alt="Amata technician wearing protective clothing and using a backpack sprayer indoors" loading="lazy" decoding="async" data-image-slot="technician-in-action"',
  )
  .replaceAll(
    'alt="Amata emblem"',
    'alt="Amata emblem" loading="lazy" decoding="async"',
  );

const mobileBrandPattern =
  /<div style="display:flex;align-items:center;gap:12px"><img [^>]+><div><b class="hd"[^>]*>Amata<\/b><span[^>]*>Pest control<\/span><\/div><\/div>/;

if (!mobileBrandPattern.test(mobileDesignMarkup)) {
  throw new Error('Could not update the mobile navigation brand.');
}

mobileDesignMarkup = mobileDesignMarkup.replace(mobileBrandPattern, siteBrandMarkup);

for (const id of ['s', 'shop', 't', 'a', 'faq', 'c']) {
  mobileDesignMarkup = mobileDesignMarkup
    .replaceAll(`id="${id}"`, `id="mobile-${id}"`)
    .replaceAll(`href="#${id}"`, `href="#mobile-${id}"`);
}

for (const id of ['q1', 'q2', 'q3', 'q4', 'q5']) {
  mobileDesignMarkup = mobileDesignMarkup
    .replaceAll(`id="${id}"`, `id="mobile-${id}"`)
    .replaceAll(`for="${id}"`, `for="mobile-${id}"`);
}

const mobileAboutStart = mobileDesignMarkup.indexOf('<section id="mobile-a"');
const mobileAboutEnd =
  mobileDesignMarkup.indexOf('</section>', mobileAboutStart) + '</section>'.length;

if (mobileAboutStart < 0 || mobileAboutEnd < '</section>'.length) {
  throw new Error('Could not extract the mobile About section for its dedicated page.');
}

export const mobileAboutMarkup = mobileDesignMarkup
  .slice(mobileAboutStart, mobileAboutEnd)
  .replaceAll('src="./assets/', 'src="/assets/');
mobileDesignMarkup =
  mobileDesignMarkup.slice(0, mobileAboutStart) + mobileDesignMarkup.slice(mobileAboutEnd);

mobileDesignMarkup = mobileDesignMarkup.replaceAll('href="#mobile-shop"', 'href="/shop/"');

const mobileMenuTogglePattern =
  /<a href="#menu" aria-label="Menu" style="[^"]*">([\s\S]*?)<\/a>/;
const mobileMenuToggleMatch = mobileDesignMarkup.match(mobileMenuTogglePattern);

if (!mobileMenuToggleMatch) {
  throw new Error('Could not make the mobile navigation menu interactive.');
}

mobileDesignMarkup = mobileDesignMarkup.replace(
  mobileMenuTogglePattern,
  '<button class="mobile-menu-toggle" type="button" aria-label="Open menu" aria-controls="mobile-site-nav" aria-expanded="false" style="width:48px;height:48px;display:flex;flex-direction:column;gap:5px;align-items:center;justify-content:center;padding:0;border:0;background:transparent;cursor:pointer"><i aria-hidden="true" style="width:26px;height:3px;background:#0A1B44"></i><i aria-hidden="true" style="width:26px;height:3px;background:#C8102E"></i><i aria-hidden="true" style="width:26px;height:3px;background:#1D3FA8"></i></button>',
);

const mobileServiceLinks = services
  .map((service) => `<a href="/services/${service.slug}/">${service.name}</a>`)
  .join('');
const mobileMenu = `<nav id="mobile-site-nav" class="mobile-menu-panel" aria-label="Main navigation" hidden><details class="mobile-services-dropdown"><summary>Services</summary><div class="mobile-services-dropdown__links"><a href="/services/">All services</a>${mobileServiceLinks}</div></details><a href="/shop/">Shop</a><a href="/training/">Training</a><a href="/about/">About</a><a href="/faq/">FAQ</a></nav>`;

if (!mobileDesignMarkup.includes('</header>')) {
  throw new Error('Could not insert the mobile navigation links.');
}

mobileDesignMarkup = mobileDesignMarkup.replace('</header>', `${mobileMenu}</header>`);

const legacyFooterInfo =
  /<p style="margin:36px 0 0;color:#C9D7F8;font-size:14px;line-height:1.7"><b style="color:#fff">Amata Pests Control Heroes \(U\) Ltd<\/b><br>[\s\S]*?<\/p>/;
const mobileStickyMarker =
  '<div style="position:sticky;bottom:0;z-index:6;display:flex;box-shadow:';

if (!legacyFooterInfo.test(mobileDesignMarkup)) {
  throw new Error('Could not replace the original mobile footer details.');
}

mobileDesignMarkup = mobileDesignMarkup.replace(legacyFooterInfo, '');

if (!mobileDesignMarkup.includes(mobileStickyMarker)) {
  throw new Error('Could not add the redesigned footer to the mobile page.');
}

mobileDesignMarkup = mobileDesignMarkup.replace(mobileStickyMarker, `${siteFooterMarkup}${mobileStickyMarker}`);

const mobileHeaderStart = mobileDesignMarkup.indexOf('<div style="display:flex;height:8px">');
const mobileHeaderEnd =
  mobileDesignMarkup.indexOf('</header>', mobileHeaderStart) + '</header>'.length;

if (mobileHeaderStart < 0 || mobileHeaderEnd < '</header>'.length) {
  throw new Error('Could not extract the shared mobile navigation.');
}

export const mobileHeaderMarkup = mobileDesignMarkup.slice(mobileHeaderStart, mobileHeaderEnd);
mobileDesignMarkup =
  mobileDesignMarkup.slice(0, mobileHeaderStart) + mobileDesignMarkup.slice(mobileHeaderEnd);

export { mobileDesignMarkup };
