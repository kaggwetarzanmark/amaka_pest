const serviceHeadingLinks = [
  ['Fumigation and pest control', 'fumigation-pest-control'],
  ['Rodent control', 'rodent-control'],
  ['Snake and lizard control', 'snake-and-lizard-control'],
  ['Pesticides and sprayers', 'pesticides-and-sprayers'],
  ['Sanitary bin and washroom hygiene', 'sanitary-bin-hygiene'],
  ['Staff training', 'staff-training'],
];

export function linkServiceHeadings(markup) {
  let updatedMarkup = markup;

  for (const [heading, slug] of serviceHeadingLinks) {
    const escapedHeading = heading.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const headingPattern = new RegExp(`(<h3\\b[^>]*>)${escapedHeading}(</h3>)`);

    if (!headingPattern.test(updatedMarkup)) {
      throw new Error(`Could not find the homepage service heading "${heading}".`);
    }

    updatedMarkup = updatedMarkup.replace(
      headingPattern,
      `$1<a href="/services/${slug}/" style="color:inherit;text-decoration:underline;text-decoration-color:#C8102E;text-underline-offset:4px">${heading}</a>$2`,
    );
  }

  return updatedMarkup;
}
