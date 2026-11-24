const replacements = [
  ['The trusted name in pest control.', 'Pest control in Kisasi, Kampala'],
  [
    'Careful, certified and discreet service for homes, hotels and businesses across [YOUR CITY].',
    'Pest control and fumigation for homes, hotels and businesses in Kisasi and Kampala.',
  ],
  [
    'Careful, trained and discreet service for homes, hotels and businesses across [YOUR CITY].',
    'Pest control and fumigation for homes, hotels and businesses in Kisasi and Kampala.',
  ],
  [
    'Fumigation and pest control for homes, hotels and businesses in Kisasi and Kampala.',
    'Pest control and fumigation for homes, hotels and businesses across Uganda, including Kampala and surrounding areas.',
  ],
  ['Protective gear on every job', 'Careful pest management for homes and businesses'],
  ['A trained team', 'Pest prevention advice for your property'],
  ['Fast response in [RESPONSE TIME]', 'Responsive pest control across Uganda'],
  ['What we do', 'Pest control services across Uganda'],
  [
    'Everything you need to keep pests out and your spaces clean.',
    'Fumigation and pest management for common household and commercial pests across Uganda.',
  ],
  [
    'Cockroaches, bed bugs, ants, mosquitoes and termites treated for homes, offices, hotels and schools.',
    'Fumigation and pest control options for cockroaches, bed bugs, ants, mosquitoes and termites in homes, offices, hotels and schools.',
  ],
  [
    'Inspection, baiting and entry point control to keep rats and mice out.',
    'Rat and mouse control with inspection, baiting options and practical advice on entry points.',
  ],
  [
    'Safe removal and deterrent treatment for compounds, roofs and gardens.',
    'Pest assessment and control options for snakes and lizards around compounds, roofs and gardens.',
  ],
  [
    'Quality pesticides and sprayers for households, farms and businesses.',
    'Pesticides and sprayers for home, farm and commercial pest-control needs. Contact us for current stock and pricing.',
  ],
  [
    'Discreet sanitary bin and hygiene services for offices, hotels and public washrooms.',
    'Discreet sanitary-bin and washroom hygiene services for offices, hotels and other workplaces.',
  ],
  [
    'Practical pest and hygiene training for hotel, restaurant and facility teams.',
    'Pest prevention and hygiene training for hotel, restaurant and facility teams.',
  ],
  [
    'Three steps from the first call to a pest free space.',
    'A clear process: discuss the pest problem, agree on a treatment plan and get practical prevention advice.',
  ],
  ['Tell us what you see and where.', 'Tell us what pest you have seen and where the problem is located.'],
  [
    'We check the problem and agree a clear price.',
    'We assess the issue, explain suitable treatment options and provide a quote before work begins.',
  ],
  [
    'We treat the space and confirm it worked.',
    'After you approve the plan, we treat the affected area and share practical prevention advice.',
  ],
  ['Train your hotel and facility staff', 'Pest-prevention training for hotel and facility teams'],
  [
    'We teach teams to spot pest signs early, keep kitchens and rooms hygienic and handle products safely.',
    'Help staff recognize pest activity, strengthen hygiene routines and follow prevention practices in kitchens, guest rooms and shared spaces.',
  ],
  ['Hotels, restaurants and schools', 'Hotels, restaurants and schools in Kampala'],
  ['Book a training session', 'Ask about staff training'],
  ['Book a training', 'Ask about staff training'],
  ['Hotels, restaurants, schools', 'Hotels, restaurants and schools in Kampala'],
  [
    'Pesticides, sprayers and protective gear, ready for collection or delivery.',
    'Pesticides, sprayers, protective gear and rodent control products. Ask us about current stock, pricing and collection or delivery options.',
  ],
  [
    'Pesticides, sprayers and protective gear.',
    'Pesticides, sprayers, protective gear and rodent control products. Ask about current stock and pricing.',
  ],
  ['<h2>Shop</h2>', '<h2>Pest control products</h2>'],
  ['From [PRICE]', 'Request current pricing'],
  ['Order now', 'Ask about this product'],
  ['Pests we control', 'Common pests we treat across Uganda'],
  [
    'From the kitchen to the roof, we know what to treat.',
    'Pest management for common household and commercial pests, including:',
  ],
  ['Who we serve', 'Pest control for homes and businesses'],
  ['About Amata', 'About Amata Pest Control Heroes'],
  [
    '[ADD 2 TO 3 SENTENCES ABOUT THE COMPANY, YEARS IN BUSINESS AND AREAS SERVED.]',
    'Amata Pest Control Heroes provides pest control and fumigation for homes, hotels and businesses in Kisasi and across Kampala. We assess pest concerns, explain treatment options and share practical prevention advice for your property.',
  ],
  ['[AREAS WE SERVE]', 'Serving Kisasi and nearby communities in Kampala, Uganda'],
  [
    '[CLIENT QUOTE, ONE STRONG SENTENCE]',
    'Effective pest control starts with a careful inspection, a clear treatment plan and practical prevention advice.',
  ],
  ['[NAME], [HOTEL OR BUSINESS]', 'Amata Pest Control Heroes'],
  [
    '<summary>How fast can you come?</summary><p>[ADD ANSWER]</p>',
    '<summary>How soon can you provide pest control?</summary><p>Availability depends on your location, the pest issue and our schedule. Call +256 759 163 839 to discuss an inspection time anywhere in Uganda.</p>',
  ],
  [
    '<summary>Is treatment safe for children and pets?</summary><p>[ADD ANSWER]</p>',
    '<summary>Is treatment safe for children and pets?</summary><p>Safety depends on the product and treatment. We explain any preparation and re-entry guidance before work begins. Keep children and pets away from treated areas until it is safe to return.</p>',
  ],
  [
    '<summary>What areas do you serve?</summary><p>[ADD ANSWER]</p>',
    '<summary>What areas do you serve?</summary><p>We provide pest control and fumigation across Uganda, including Kampala and surrounding areas. Share your location to confirm coverage and availability.</p>',
  ],
  [
    '<summary>Do you deliver pesticides from the shop?</summary><p>[ADD ANSWER]</p>',
    '<summary>Do you deliver pesticides from the shop?</summary><p>Product availability and delivery options can vary. Contact us to check current stock, pricing and whether collection or delivery is available.</p>',
  ],
  ['Need pests gone fast?', 'Need pest control anywhere in Uganda?'],
  [
    'Call, message or send a request for a free inspection and a clear quote.',
    'Tell us what pest you are dealing with and where. Call or send a request to discuss an inspection and quote.',
  ],
  ['WhatsApp [NUMBER]', 'Request a pest control quote'],
  ['WhatsApp', 'Get a quote'],
  ['Amata Pests Control<br>Heroes (U) Ltd', 'Amata Pest Control Heroes'],
  ['Amata Pests Control Heroes (U) Ltd', 'Amata Pest Control Heroes'],
  ['Ask about staff training session', 'Ask about staff training'],
  ['[YOUR CITY]', 'Kisasi and Kampala'],
  ['[HOURS]', 'Contact us for opening hours'],
  ['[PRICE]', 'Contact us for current pricing'],
  ['[NUMBER]', 'our team'],
  ['[EMAIL]', 'Call +256 759 163 839'],
  ['[ADDRESS]', 'Kisasi, Kampala'],
];

function applyLegacyWebsiteCopy(markup) {
  let updatedMarkup = markup;

  for (const [source, copy] of replacements) {
    updatedMarkup = updatedMarkup.replaceAll(source, copy);
  }

  if (/\[[A-Z][A-Z0-9 ,.'-]*\]/.test(updatedMarkup)) {
    throw new Error('Unfilled copy placeholder in the website design source.');
  }

  return updatedMarkup;
}

function getSectionRange(markup, marker) {
  const markerIndex = markup.indexOf(marker);
  const start = markup.lastIndexOf('<section', markerIndex);
  const closingTag = markup.indexOf('</section>', markerIndex);

  if (markerIndex < 0 || start < 0 || closingTag < 0) {
    throw new Error(`Could not find a design section containing "${marker}".`);
  }

  return { start, end: closingTag + '</section>'.length };
}

function removeSection(markup, marker) {
  const { start, end } = getSectionRange(markup, marker);
  return markup.slice(0, start) + markup.slice(end);
}

function replaceSection(markup, marker, replacement) {
  const { start, end } = getSectionRange(markup, marker);
  return markup.slice(0, start) + replacement + markup.slice(end);
}

function insertAfterSection(markup, marker, section) {
  const { end } = getSectionRange(markup, marker);
  return markup.slice(0, end) + section + markup.slice(end);
}

function moveSectionAfter(markup, movingMarker, targetMarker) {
  const movingRange = getSectionRange(markup, movingMarker);
  const section = markup.slice(movingRange.start, movingRange.end);
  const withoutSection = markup.slice(0, movingRange.start) + markup.slice(movingRange.end);
  const targetRange = getSectionRange(withoutSection, targetMarker);

  return withoutSection.slice(0, targetRange.end) + section + withoutSection.slice(targetRange.end);
}

function removeQuotePhoneNumber(markup) {
  const { start, end } = getSectionRange(markup, 'Need pest control anywhere in Uganda?');
  const section = markup.slice(start, end);
  const phoneLink = /<a class="btn rd" href="tel:0769244371">[\s\S]*?<\/a>/g;
  const matches = section.match(phoneLink) ?? [];

  if (matches.length !== 1) {
    throw new Error('Could not remove the requested phone number from the quote section.');
  }

  return markup.slice(0, start) + section.replace(phoneLink, '') + markup.slice(end);
}

const pestIcon =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 9v9M9 11H6m12 0h-3M9 15H6m12 0h-3M10 6a2 2 0 1 1 4 0v10a2 2 0 0 1-4 0zM9 7 7 5m8 2 2-2"></path></svg>';

const pestStrip = `<section style="background:#F7F5F2;padding:18px 0"><div class="w"><div role="list" aria-label="Pests we treat" style="display:flex;flex-wrap:wrap;justify-content:center;gap:10px 14px">${['Cockroaches', 'Ants', 'Termites', 'Rats', 'Bed bugs', 'Spiders', 'Snakes']
  .map(
    (pest) =>
      `<span role="listitem" style="display:inline-flex;align-items:center;gap:7px;padding:8px 10px;border:1px solid #E8E4DF;background:#fff;color:#0A1B44;font-size:14px;font-weight:700;white-space:nowrap">${pestIcon}${pest}</span>`,
  )
  .join('')}</div></div></section>`;

const whySection = `<section style="background:#F7F5F2;padding:72px 0"><div class="w"><div class="bar"><i></i><i></i></div><h2>Why Uganda homes and businesses call us</h2><div class="g" style="grid-template-columns:repeat(auto-fit,minmax(240px,1fr));margin-top:28px"><div style="padding:18px;background:#fff;border-top:3px solid #C8102E"><h3>Upfront pricing</h3><p style="margin:10px 0 0;color:#475569;line-height:1.6">You approve the price before work begins.</p></div><div style="padding:18px;background:#fff;border-top:3px solid #1D3FA8"><h3>Treatment plus supplies</h3><p style="margin:10px 0 0;color:#475569;line-height:1.6">Need a product instead of a visit? Buy it at our shop.</p></div><div style="padding:18px;background:#fff;border-top:3px solid #C8102E"><h3>Safe planning</h3><p style="margin:10px 0 0;color:#475569;line-height:1.6">We ask who lives or works in the space and plan around children, pets and food areas.</p></div><div style="padding:18px;background:#fff;border-top:3px solid #1D3FA8"><h3>Every property</h3><p style="margin:10px 0 0;color:#475569;line-height:1.6">Homes, hotels, restaurants, schools, hospitals and offices.</p></div></div></div></section>`;

const areasSection = `<section style="background:#F7F5F2;padding:72px 0"><div class="w"><div class="bar"><i></i><i></i></div><h2>Serving homes and businesses across Uganda</h2><p style="margin:16px 0 0;color:#475569;font-size:18px;line-height:1.7">Nationwide pest control coverage, including Kampala and surrounding areas. Availability depends on your location. Call and ask.</p></div></section>`;

const faqSection = `<section style="background:#fff;padding:72px 0"><div class="w"><div class="bar"><i></i><i></i></div><h2>Pest control and fumigation FAQs</h2><div style="height:36px"></div><details><summary>How fast can you come?</summary><p>Call us to arrange an inspection. Availability depends on your location and our schedule.</p></details><details><summary>How much does fumigation cost?</summary><p>Cost depends on the pest and the size of the property. After a short inspection, we give you a clear price before work starts.</p></details><details><summary>Is treatment safe for children and pets?</summary><p>Tell us who lives or works in the space. We plan around them and explain how long to stay out of treated areas.</p></details><details><summary>How long does fumigation last?</summary><p>Protection time depends on the pest, treatment and property conditions. We explain follow-up recommendations for the service selected.</p></details><details><summary>Do you serve my area?</summary><p>We serve customers across Uganda, including Kampala and surrounding areas. Call to confirm coverage for your location.</p></details><details><summary>Do you deliver pesticides?</summary><p>Ask about delivery across Uganda, call for prices, or collect from our shop at Loy Plaza, Room L26.</p></details></div></section>`;

const approvedCopy = [
  ['Pest control in Kisasi, Kampala', 'Pest Control and Fumigation Across Uganda'],
  ['Pest control and fumigation', 'Fumigation and pest control'],
  ['Rodent management', 'Rodent control'],
  ['Pesticide sales', 'Pesticides and sprayers'],
  ['Feminine sanitary hygiene', 'Sanitary bin and washroom hygiene'],
  [
    'Pest control and fumigation for homes, hotels and businesses in Kisasi and Kampala.',
    'Pest control and fumigation for homes, hotels and businesses across Uganda, including Kampala and surrounding areas. You get a clear price before any work begins.',
  ],
  ['Pest control services in Kisasi and Kampala', 'Pest control services across Uganda'],
  [
    'Fumigation and pest management for common household and commercial pests across Kampala.',
    'One team for nationwide treatment, prevention and supplies.',
  ],
  [
    'Fumigation and pest control options for cockroaches, bed bugs, ants, mosquitoes and termites in homes, offices, hotels and schools.',
    'Remove cockroaches, bed bugs, ants, mosquitoes and termites from your home, office, hotel or school.',
  ],
  [
    'Rat and mouse control with inspection, baiting options and practical advice on entry points.',
    'Rat and mouse removal with baiting, traps and sealing of entry points, so they stay out.',
  ],
  [
    'Pest assessment and control options for snakes and lizards around compounds, roofs and gardens.',
    'Safe removal and prevention around compounds, roofs and gardens.',
  ],
  [
    'Pesticides and sprayers for home, farm and commercial pest-control needs. Contact us for current stock and pricing.',
    'Quality products for home, farm and business use. Call for stock and prices.',
  ],
  [
    'Discreet sanitary-bin and washroom hygiene services for offices, hotels and other workplaces.',
    'A discreet, regular service for offices, hotels and workplaces.',
  ],
  [
    'Pest prevention and hygiene training for hotel, restaurant and facility teams.',
    'Teach your team to spot pests early and keep spaces clean.',
  ],
  ['How it works', 'Three steps. No surprises.'],
  [
    'A clear process: discuss the pest problem, agree on a treatment plan and get practical prevention advice.',
    'A clear price before work begins.',
  ],
  ['Tell us what pest you have seen and where the problem is located.', 'Tell us the pest and where you saw it.'],
  [
    'We assess the issue, explain suitable treatment options and provide a quote before work begins.',
    'We check the problem and give you a price before we start.',
  ],
  [
    'After you approve the plan, we treat the affected area and share practical prevention advice.',
    'We treat the area, then show you how to keep pests away.',
  ],
  [
    'Pest-prevention training for hotel and facility teams',
    'Pest prevention training for hotels, restaurants and schools',
  ],
  [
    'Help staff recognize pest activity, strengthen hygiene routines and follow prevention practices in kitchens, guest rooms and shared spaces.',
    'Help your staff spot pest activity early and keep kitchens, guest rooms and shared spaces clean.',
  ],
  ['Hotels, restaurants and schools in Kampala', 'Hotels, restaurants and schools across Uganda'],
  ['Ask about staff training', 'Book staff training'],
  ['Pest control products', 'Pesticides, sprayers and rodent control products'],
  [
    'Pesticides, sprayers, protective gear and rodent control products. Ask us about current stock, pricing and collection or delivery options.',
    'Buy what you need for your home, farm or business. Collect from our shop at Loy Plaza, Room L26, or call to ask about delivery in Kampala.',
  ],
  [
    'Pesticides, sprayers, protective gear and rodent control products. Ask about current stock and pricing.',
    'Buy what you need for your home, farm or business. Collect from our shop at Loy Plaza, Room L26, or call to ask about delivery in Kampala.',
  ],
  ['Pest control for homes and businesses', 'Pest control for every kind of property'],
  ['About Amata Pest Control Heroes', 'About Amata Pests Control Heroes'],
  [
    'Amata Pest Control Heroes provides pest control and fumigation for homes, hotels and businesses in Kisasi and across Kampala. We assess pest concerns, explain treatment options and share practical prevention advice for your property.',
    'We are a Uganda pest control and fumigation company serving homes, hotels and businesses across the country, with local service available in Kampala and surrounding areas. We inspect first, explain your options and agree the price before we start. Then we help you keep the pests away.<br><br><span style="font-weight:700;color:#0A1B44">"Good pest control starts with a proper inspection and a clear price."</span>',
  ],
  ['Serving Kisasi and nearby communities in Kampala, Uganda', 'Serving customers across Uganda'],
  ['Need pest control in Kisasi or Kampala?', 'Need pest control anywhere in Uganda?'],
  [
    'Tell us what pest you are dealing with and where. Call or send a request to discuss an inspection and quote.',
    'Tell us the pest and where you saw it. We will call you back to arrange an inspection and quote.',
  ],
  ['Request a pest control quote', 'Request a quote'],
  ['Get a quote', 'Request a quote'],
  ['Visit shop', 'Shop pesticides'],
  ['Ask about this product', 'Ask for prices'],
  ['Send request', 'Request a quote'],
  ['Amata Pest Control Heroes', 'Amata Pests Control Heroes'],
];

function addQuoteFields(markup) {
  const phoneField =
    '<label for="q2" style="font-weight:700">Phone</label><input id="q2" class="in" style="margin:6px 0 14px">';

  if (!markup.includes(phoneField)) {
    throw new Error('Could not find the phone field in the quote form.');
  }

  let updatedMarkup = markup.replace(
    phoneField,
    `${phoneField}<label for="q4" style="font-weight:700">Location</label><input id="q4" class="in" style="margin:6px 0 14px">`,
  );
  let messageFieldCount = 0;

  updatedMarkup = updatedMarkup.replace(
    /(<label for="q3" style="font-weight:700">Service<\/label><input id="q3" class="in" style="margin:6px 0 (?:18|20)px">)/g,
    (serviceField) => {
      messageFieldCount += 1;
      return `${serviceField}<label for="q5" style="font-weight:700">Message</label><textarea id="q5" class="in" style="height:100px;padding:12px 14px;resize:vertical;margin:6px 0 18px"></textarea>`;
    },
  );

  if (messageFieldCount !== 1) {
    throw new Error('Could not add the message field to the quote form.');
  }

  return updatedMarkup;
}

export function applyWebsiteCopy(markup) {
  let updatedMarkup = applyLegacyWebsiteCopy(markup);

  updatedMarkup = removeSection(updatedMarkup, 'Careful pest management for homes and businesses');
  updatedMarkup = removeSection(updatedMarkup, 'Common pests we treat across Uganda');
  updatedMarkup = removeSection(
    updatedMarkup,
    'Effective pest control starts with a careful inspection, a clear treatment plan and practical prevention advice.',
  );
  updatedMarkup = replaceSection(updatedMarkup, 'Common questions', faqSection);

  for (const [source, copy] of approvedCopy) {
    updatedMarkup = updatedMarkup.replaceAll(source, copy);
  }

  updatedMarkup = updatedMarkup.replaceAll(
    'Fumigation and pest control for homes, hotels and businesses in Kisasi and Kampala.',
    'Pest control and fumigation for homes, hotels and businesses across Uganda, including Kampala and surrounding areas.',
  );

  updatedMarkup = removeQuotePhoneNumber(updatedMarkup);

  const footerCopy =
    'Loy Plaza, Room L26, Kampala &middot; +256 759 163 839 &middot; +256 783 761 233 &middot; +256 769 800 640 (office) &middot; Open Mon to Sat, 8am to 6pm';
  updatedMarkup = updatedMarkup.replace(
    /Call \+256 759 163 839[^<]*?Kisasi, Kampala[^<]*?Contact us for opening hours/g,
    footerCopy,
  );
  updatedMarkup = updatedMarkup.replaceAll('Contact us for opening hours', 'Open Mon to Sat, 8am to 6pm');
  updatedMarkup = updatedMarkup.replaceAll(
    '<b style="color:#fff">Amata Pests Control Heroes</b>',
    '<b style="color:#fff">Amata Pests Control Heroes (U) Ltd</b>',
  );

  const heroNote =
    '<p style="width:100%;margin:12px 0 0;color:#475569;font-size:14px;line-height:1.5">Shop at Loy Plaza, Room L26 &middot; Licensed and registered</p>';
  updatedMarkup = updatedMarkup.replaceAll('Shop pesticides</a>', `Shop pesticides</a>${heroNote}`);

  const desktopTopBarContacts =
    '<a href="tel:+256759163839" style="color:#fff;text-decoration:none">+256 759 163 839</a> / <a href="tel:+256783761233" style="color:#fff;text-decoration:none">+256 783 761 233</a> / <a href="tel:+256769800640" style="color:#fff;text-decoration:none">+256 769 800 640 (office)</a>';
  updatedMarkup = updatedMarkup.replaceAll(
    '0769 244 371 / 0762 340 731',
    desktopTopBarContacts,
  );

  const mobileHeaderMarker =
    '<header style="display:flex;align-items:center;justify-content:space-between;';
  const mobileTopBar =
    '<div style="display:flex;flex-wrap:wrap;justify-content:center;gap:4px 6px;padding:8px 10px;background:#0A1B44;color:#fff;font-size:11px;font-weight:700;line-height:1.4;text-align:center">Open Mon to Sat, 8am to 6pm &middot; Call <a href="tel:+256759163839" style="color:#fff">+256 759 163 839</a> / <a href="tel:+256783761233" style="color:#fff">+256 783 761 233</a> / <a href="tel:+256769800640" style="color:#fff">+256 769 800 640 (office)</a></div>';

  if (updatedMarkup.includes(mobileHeaderMarker)) {
    updatedMarkup = updatedMarkup.replace(mobileHeaderMarker, `${mobileTopBar}${mobileHeaderMarker}`);
  }

  for (const [source, replacement] of [
    ['tel:0769244371', 'tel:+256759163839'],
    ['0769 244 371', '+256 759 163 839'],
    ['tel:0762340731', 'tel:+256783761233'],
    ['0762 340 731', '+256 783 761 233'],
  ]) {
    updatedMarkup = updatedMarkup.replaceAll(source, replacement);
  }

  const cardDescriptions = [
    'For homes, farms and businesses',
    'Hand and backpack sprayers',
    'Gloves, masks and protective gear',
    'Baits and traps for rodent control',
  ];
  updatedMarkup = updatedMarkup.replaceAll('Request current pricing', '__PRODUCT_DESCRIPTION__');

  for (const description of cardDescriptions) {
    if (!updatedMarkup.includes('__PRODUCT_DESCRIPTION__')) {
      throw new Error('Could not find all pesticide shop product descriptions.');
    }

    updatedMarkup = updatedMarkup.replace('__PRODUCT_DESCRIPTION__', description);
  }

  updatedMarkup = addQuoteFields(updatedMarkup);

  if (updatedMarkup.includes('__PRODUCT_DESCRIPTION__')) {
    throw new Error('Could not fill every pesticide shop product description.');
  }

  updatedMarkup = insertAfterSection(
    updatedMarkup,
    'Pest Control and Fumigation Across Uganda',
    pestStrip,
  );
  updatedMarkup = insertAfterSection(updatedMarkup, 'Three steps. No surprises.', whySection);
  updatedMarkup = insertAfterSection(
    updatedMarkup,
    'Pest control for every kind of property',
    areasSection,
  );
  updatedMarkup = moveSectionAfter(
    updatedMarkup,
    'Pest prevention training for hotels, restaurants and schools',
    'Pesticides, sprayers and rodent control products',
  );

  if (/\[[A-Z][A-Z0-9 ,.'-]*\]/.test(updatedMarkup)) {
    throw new Error('Unfilled copy placeholder in the website design source.');
  }

  return updatedMarkup;
}
