import designSource from './design-source.html?raw';
import { siteBrandMarkup } from './siteBrandMarkup.js';
import { applyWebsiteCopy } from './websiteCopy.js';

const bodyStart = designSource.indexOf('<body>') + '<body>'.length;
const bodyEnd = designSource.lastIndexOf('</body>');
const rootMarker =
  '<div style="font-family:\'Public Sans\',system-ui,sans-serif;color:#0F172A;background:#fff;font-size:17px">';
const rootStart = designSource.indexOf(rootMarker, bodyStart);
const contentStart = rootStart + rootMarker.length;
const rootEnd = designSource.lastIndexOf('</div></x-dc>', bodyEnd);

if (bodyStart < '<body>'.length || bodyEnd < 0 || rootStart < 0 || rootEnd < contentStart) {
  throw new Error('Could not extract the original design body.');
}

const content = applyWebsiteCopy(designSource.slice(contentStart, rootEnd)).replaceAll(
  'src="./assets/7fdcbba15a0a7e03b0d18bf61b77b310.jpg"',
  'src="/assets/7fdcbba15a0a7e03b0d18bf61b77b310.jpg"',
);
const headerStart = content.indexOf('<div style="display:flex;font-size:15px;color:#fff">');
const navEnd = content.indexOf('</nav>', headerStart) + '</nav>'.length;
const footerStart = content.lastIndexOf('<footer style="background:#06122F;');
const footerEnd = content.indexOf('</footer>', footerStart) + '</footer>'.length;

if (headerStart < 0 || navEnd < '</nav>'.length || footerStart < navEnd || footerEnd < '</footer>'.length) {
  throw new Error('Could not extract the original design navigation, sections, and footer.');
}

const pageLinks = [
  ['Services', 'services'],
  ['Shop', 'shop'],
  ['Training', 'training'],
  ['About', 'about'],
  ['FAQ', 'faq'],
];

const navigationAnchors = {
  services: 's',
  shop: 'shop',
  training: 't',
  about: 'a',
  faq: 'faq',
};
let headerMarkup = content.slice(headerStart, navEnd);
let sectionsMarkup = content.slice(navEnd, footerStart);
const aboutSectionStart = sectionsMarkup.indexOf('<section id="a"');
const aboutSectionEnd =
  sectionsMarkup.indexOf('</section>', aboutSectionStart) + '</section>'.length;

if (aboutSectionStart < 0 || aboutSectionEnd < '</section>'.length) {
  throw new Error('Could not extract the About section for its dedicated page.');
}

export const designAboutMarkup = sectionsMarkup
  .slice(aboutSectionStart, aboutSectionEnd)
  .replaceAll('src="./assets/', 'src="/assets/');
sectionsMarkup =
  sectionsMarkup.slice(0, aboutSectionStart) + sectionsMarkup.slice(aboutSectionEnd);

const desktopBrandPattern =
  /<div style="display:flex;align-items:center;gap:14px"><img [^>]+><b[^>]*>[\s\S]*?<\/b><\/div>/;

if (!desktopBrandPattern.test(headerMarkup)) {
  throw new Error('Could not update the desktop navigation brand.');
}

headerMarkup = headerMarkup.replace(desktopBrandPattern, siteBrandMarkup);

for (const [, slug] of pageLinks) {
  headerMarkup = headerMarkup.replaceAll(
    `href="#${navigationAnchors[slug]}"`,
    `href="/${slug}/"`,
  );
}

sectionsMarkup = sectionsMarkup.replaceAll('href="#shop"', 'href="/shop/"');

export const designHeaderMarkup = headerMarkup;
export const designSectionsMarkup = sectionsMarkup;
