const serviceHeadingLinks = [
  ['General fumigation', '/services/fumigation-pest-control/'],
  ['Rodent management', '/services/rodent-control/'],
  ['Snake and reptiles control', '/services/snake-and-lizard-control/'],
  ['Shop pesticides and sprayers', '/shop/'],
  ['Sanitary feminine hygiene', '/services/sanitary-bin-hygiene/'],
  ['Consultancy and training', '/services/staff-training/'],
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
      `$1<a href="${slug}" style="color:inherit;text-decoration:underline;text-decoration-color:#C8102E;text-underline-offset:4px">${heading}</a>$2`,
    );
  }

  return updatedMarkup;
}
