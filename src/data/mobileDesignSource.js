import mobileSource from './mobile-design-source.html?raw';
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

let mobileDesignMarkup = applyWebsiteCopy(
  mobileSource.slice(rootStart, rootEnd + '</div>'.length),
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

export { mobileDesignMarkup };
