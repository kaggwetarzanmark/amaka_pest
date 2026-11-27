const serviceImages = {
  indoor: {
    imageSrc: '/assets/Upscale_image_7363fbcd.jpg',
    imageAlt: 'Pest-control technician wearing protective clothing and using a backpack sprayer indoors.',
  },
  inspection: {
    imageSrc: '/assets/Upscale_image_efac44d4.jpg',
    imageAlt: 'Pest-control technician in protective clothing inspecting an indoor area.',
  },
  exterior: {
    imageSrc: '/assets/Upscale_image_with_camera_339ece03.jpg',
    imageAlt: 'Pest-control technician wearing protective clothing and using a sprayer outside a building.',
  },
  workplace: {
    imageSrc: '/assets/upscale_this_image_0521ba99.jpg',
    imageAlt: 'Pest-control technician carrying a backpack sprayer into a workplace.',
  },
  bedbug: {
    imageSrc: '/assets/bedbug.jpg',
    imageAlt: 'Illustration of a bed bug for Amata’s bed bug treatment service.',
    imageFit: 'contain',
  },
  cockroach: {
    imageSrc: '/assets/cockroach.jpg',
    imageAlt: 'Illustration of a cockroach for Amata’s cockroach control service.',
    imageFit: 'contain',
  },
  mosquitoes: {
    imageSrc: '/assets/mosquitoes.jpg',
    imageAlt: 'Illustration of a mosquito for Amata’s mosquito control service.',
    imageFit: 'contain',
  },
  reptiles: {
    imageSrc: '/assets/reptiles.jpg',
    imageAlt: 'Illustrations of reptiles, including a snake and lizards.',
    imageFit: 'contain',
  },
  rodents: {
    imageSrc: '/assets/rodents.jpg',
    imageAlt: 'Illustration of a mouse for Amata’s rodent management service.',
    imageFit: 'contain',
  },
  crawlingInsects: {
    imageSrc: '/assets/termite.jpg',
    imageAlt: 'Illustration of an ant, representing a crawling insect.',
    imageFit: 'contain',
  },
};

const commonProcess = [
  {
    title: 'Tell us what you need',
    description:
      'Share the service, property type, affected areas and your town or district. Photos may help explain the enquiry but do not replace an assessment.',
  },
  {
    title: 'Confirm the scope and availability',
    description:
      'We discuss the site and requested work, then confirm whether the service is available for your location and what assessment may be needed.',
  },
  {
    title: 'Review the quote and instructions',
    description:
      'Confirm the proposed work, price and any relevant preparation or safety information before approving a booking.',
  },
];

function createService({
  slug,
  name,
  shortDescription,
  metaTitle,
  metaDescription,
  heroIntro,
  overview,
  concerns,
  image,
  faqQuestion,
  faqAnswer,
  additionalFaqQuestion,
  additionalFaqAnswer,
}) {
  return {
    slug,
    name,
    shortDescription,
    metaTitle,
    metaDescription,
    heroIntro,
    imageLabel: `${name} service`,
    ...image,
    overview,
    concerns,
    process: commonProcess,
    faqs: [
      {
        question: faqQuestion,
        answer: faqAnswer,
      },
      {
        question: additionalFaqQuestion,
        answer: additionalFaqAnswer,
      },
      {
        question: 'How do I confirm service availability and price?',
        answer:
          'Call or WhatsApp with your location, property type and requirements. Availability and price depend on the site and requested work; confirm both with Amata before booking.',
      },
    ],
  };
}

export const services = [
  createService({
    slug: 'fumigation-pest-control',
    name: 'General fumigation',
    shortDescription:
      'General fumigation enquiries for homes, hotels, workplaces and other properties.',
    metaTitle: 'Fumigation Services in Uganda | Amata',
    metaDescription:
      'Need fumigation services in Uganda? Discuss the property, pest concern and preparation with Amata. Kampala-based; confirm coverage and get a quote.',
    heroIntro:
      'Tell us about the property and the pest concern. Amata can discuss a fumigation enquiry, the proposed scope, preparation guidance and a quote before work begins.',
    overview:
      'Amata accepts enquiries for general fumigation at residential and commercial properties. The pest, site conditions and people using the space affect the proposed work. Contact the team to discuss an assessment, scope, preparation guidance and price.',
    concerns: [
      'General fumigation enquiries for homes and apartments',
      'Pest concerns at hotels and guest facilities',
      'Fumigation enquiries for offices and commercial properties',
    ],
    image: serviceImages.exterior,
    faqQuestion: 'What does general fumigation include?',
    faqAnswer:
      'The scope depends on the property and pest concern. Describe the affected areas and ask Amata to confirm the proposed work, preparation and quote before booking.',
    additionalFaqQuestion: 'How do I get a fumigation quote in Uganda?',
    additionalFaqAnswer:
      'Share your town or district, property type and size, pest concern, and affected areas. Amata can confirm availability and the proposed scope before providing a quote.',
  }),
  createService({
    slug: 'rodent-control',
    name: 'Rodent management',
    shortDescription:
      'Discuss rat and mouse activity, control options and practical prevention for your property.',
    metaTitle: 'Rodent Control in Uganda | Amata',
    metaDescription:
      'Looking for rodent control in Uganda? Share signs of rats or mice, your property type and town to confirm scope, availability and a quote.',
    heroIntro:
      'Droppings, gnaw marks or repeated sightings can signal rodent activity. Share where the signs appear and how the space is used so Amata can discuss the next steps.',
    overview:
      'Rodent management starts with understanding the signs, affected areas and how the property is used. Amata discusses the enquiry and any assessment needed before confirming control options, preparation and price.',
    concerns: [
      'Rats or mice seen inside or around a property',
      'Droppings, gnaw marks or disturbed stored items',
      'Rodent concerns in homes, kitchens, shops or storage areas',
    ],
    image: serviceImages.rodents,
    faqQuestion: 'What information should I share about rodent activity?',
    faqAnswer:
      'Describe where and when you noticed activity, the type of property and any affected storage or work areas. Keep children and pets away from unknown baits or devices.',
    additionalFaqQuestion: 'Does Amata offer rodent control in Kampala?',
    additionalFaqAnswer:
      'Amata is based in Kampala and accepts enquiries from across Uganda. Availability depends on your location, site and requested scope, so share your district when you contact the team.',
  }),
  createService({
    slug: 'mosquito-control',
    name: 'Mosquito control',
    shortDescription:
      'Ask about mosquito-control options for homes, workplaces and outdoor areas.',
    metaTitle: 'Mosquito Control in Uganda | Amata',
    metaDescription:
      'Ask about mosquito control in Uganda for indoor or outdoor areas. Share the affected spaces and district to confirm availability and pricing.',
    heroIntro:
      'Tell us where mosquitoes are a concern, whether the activity is indoors or outdoors and the type of property. Amata can discuss available service options and site-specific next steps.',
    overview:
      'Mosquito-control enquiries depend on the property, the areas affected and the source of the concern. Contact Amata to discuss an assessment, the proposed service and any instructions before booking.',
    concerns: [
      'Mosquito activity inside rooms or shared spaces',
      'Mosquito concerns around compounds and outdoor areas',
      'Mosquito-control enquiries for homes and workplaces',
    ],
    image: serviceImages.mosquitoes,
    faqQuestion: 'Can mosquito control cover indoor and outdoor areas?',
    faqAnswer:
      'The areas included depend on the site and proposed service. Describe the affected spaces and confirm the scope and any preparation instructions with Amata.',
    additionalFaqQuestion: 'Can I ask about mosquito control for my home or business?',
    additionalFaqAnswer:
      'Yes, you can enquire about mosquito concerns at a home or business. Tell Amata which indoor or outdoor areas are affected and where the property is so the team can confirm scope and availability.',
  }),
  createService({
    slug: 'snake-and-lizard-control',
    name: 'Snake and reptiles control',
    shortDescription:
      'Contact the team about snake or reptile sightings around buildings and compounds.',
    metaTitle: 'Snake and Reptile Control in Uganda | Amata',
    metaDescription:
      'Need snake or reptile control in Uganda? Keep clear and contact Amata in Kampala to ask about help and confirm availability for your area.',
    heroIntro:
      'If you see a snake or reptile, keep a safe distance and keep other people and pets away. Share its last known location with Amata and confirm whether assistance is available in your area.',
    overview:
      'Snake and reptile enquiries depend on the animal, its location and whether it is still visible. Do not try to catch, corner or handle it. Keep people away from the area and call to discuss safe next steps and local availability.',
    concerns: [
      'Snake sightings inside a room, roof space, garden or compound',
      'Reptile sightings around buildings and property boundaries',
      'Possible access points around roofs, walls or vegetation',
    ],
    image: serviceImages.reptiles,
    faqQuestion: 'What should I do if I see a snake?',
    faqAnswer:
      'Keep a safe distance, do not try to catch or kill it, and keep people and pets away. Call to ask about help in your area. If someone has been bitten, seek urgent medical care immediately.',
    additionalFaqQuestion: 'Does Amata provide snake control outside Kampala?',
    additionalFaqAnswer:
      'Amata accepts enquiries from across Uganda, but availability depends on the location and situation. Keep people and pets away from the animal and contact the team to confirm whether assistance is available.',
  }),
  createService({
    slug: 'cockroach-control',
    name: 'Cockroach control',
    shortDescription:
      'Discuss cockroach activity and treatment enquiries for homes and commercial properties.',
    metaTitle: 'Cockroach Control in Uganda | Amata',
    metaDescription:
      'Ask about cockroach control in Uganda for homes or workplaces. Share where you see activity and your town to confirm preparation and a quote.',
    heroIntro:
      'Share where cockroaches have been seen, how often they appear and what type of property is affected. Amata can discuss an assessment and suitable next steps.',
    overview:
      'Cockroach-control enquiries are considered in the context of the affected areas and how the property is used. Contact Amata to discuss the signs, proposed service, preparation guidance and quote before treatment.',
    concerns: [
      'Cockroach sightings in kitchens, bathrooms or storage areas',
      'Activity in homes, restaurants, hotels or workplaces',
      'Recurring sightings or signs in multiple areas',
    ],
    image: serviceImages.cockroach,
    faqQuestion: 'How should I prepare for cockroach treatment?',
    faqAnswer:
      'Preparation depends on the proposed service and the areas affected. Confirm the instructions with Amata before the appointment rather than assuming one preparation list applies to every property.',
    additionalFaqQuestion: 'Can I enquire about cockroach treatment for a kitchen?',
    additionalFaqAnswer:
      'Yes. Describe the kitchen, how it is used and where cockroaches have been seen. Confirm the proposed scope and any food-area preparation instructions directly with Amata before booking.',
  }),
  createService({
    slug: 'termite-treatment',
    name: 'Termite treatment',
    shortDescription:
      'Ask about termite treatment enquiries for pre-construction and existing buildings.',
    metaTitle: 'Termite Treatment in Uganda | Amata',
    metaDescription:
      'Enquire about pre- or post-construction termite treatment in Uganda. Share the project stage and location to confirm scope and a quote.',
    heroIntro:
      'Amata accepts enquiries about termite treatment before construction and for existing buildings. Share the project stage, location and signs observed so the team can discuss the requested scope.',
    overview:
      'Termite treatment enquiries can relate to a building before construction or to an existing property. The appropriate scope depends on the site and stage of work. Contact Amata to confirm assessment needs, service availability, quote and instructions.',
    concerns: [
      'Pre-construction termite treatment enquiries',
      'Termite concerns in existing buildings',
      'Visible signs or suspected termite activity around a property',
    ],
    image: serviceImages.workplace,
    faqQuestion: 'Do you handle both pre- and post-construction termite treatment?',
    faqAnswer:
      'The poster lists pre- and post-construction termite treatment. Contact Amata with the site location and construction stage to confirm scope, availability and a quote.',
    additionalFaqQuestion: 'How much does termite treatment cost in Uganda?',
    additionalFaqAnswer:
      'The price depends on the site, construction stage, affected area and requested scope. Share the project details and location so Amata can confirm whether an assessment is needed and provide a quote.',
  }),
  createService({
    slug: 'bed-bug-treatment',
    name: 'Bed bug (Cimex) treatment',
    shortDescription:
      'Discuss suspected bed bug activity in bedrooms and accommodation settings.',
    metaTitle: 'Bed Bug Treatment in Uganda | Amata',
    metaDescription:
      'Ask about bed bug (Cimex) treatment in Uganda. Share affected rooms and your location to discuss assessment, preparation and pricing.',
    heroIntro:
      'If you suspect bed bugs, share where you have noticed signs and the type of property. Amata can discuss an assessment, preparation guidance and the proposed treatment.',
    overview:
      'Bed bug treatment enquiries depend on the rooms affected, the signs observed and the property. Contact Amata to discuss an assessment and confirm treatment scope, preparation and price before booking.',
    concerns: [
      'Suspected bed bug activity in bedrooms',
      'Bed bug enquiries from homes, hotels and guest facilities',
      'Signs reported in one room or across multiple rooms',
    ],
    image: serviceImages.bedbug,
    faqQuestion: 'What should I do before a bed bug treatment?',
    faqAnswer:
      'Preparation depends on the treatment plan and affected rooms. Ask Amata for the specific instructions after discussing the site; do not move potentially affected items to other rooms without guidance.',
    additionalFaqQuestion: 'Can I ask about bed bug treatment for a hotel?',
    additionalFaqAnswer:
      'Yes. Share the property location, affected rooms and any relevant access or occupancy details. Amata can confirm availability, proposed scope and preparation instructions.',
  }),
  createService({
    slug: 'crawling-flying-insect-control',
    name: 'Crawling and flying insect control',
    shortDescription:
      'Enquire about control of crawling and flying insects affecting your property.',
    metaTitle: 'Crawling and Flying Insect Control in Uganda | Amata',
    metaDescription:
      'Need crawling or flying insect control in Uganda? Describe the insect, affected areas and town to confirm service scope and availability.',
    heroIntro:
      'Tell us which insects you have noticed, where they appear and how the property is used. Amata can discuss the site and confirm suitable next steps.',
    overview:
      'This service covers enquiries about crawling and flying insects. The insect, affected areas and property conditions help determine the proposed scope. Contact Amata to discuss the issue, an assessment if needed, preparation and pricing.',
    concerns: [
      'Crawling insects in homes or workplaces',
      'Flying insect activity indoors or around a property',
      'Insect concerns at hospitality and commercial facilities',
    ],
    image: serviceImages.crawlingInsects,
    faqQuestion: 'Which insects are included in this service?',
    faqAnswer:
      'Share the insect you have seen or describe the signs and affected area. Amata can confirm whether the enquiry fits this service and what options are available.',
    additionalFaqQuestion: 'Can I request insect control for a home or workplace?',
    additionalFaqAnswer:
      'The published service category covers crawling and flying insects. Describe or photograph what you have seen and the affected area so Amata can confirm whether it fits the service.',
  }),
  createService({
    slug: 'manhole-sewer-treatment',
    name: 'Manhole and sewer treatment',
    shortDescription:
      'Ask about treatment enquiries for manholes and sewer areas at your property.',
    metaTitle: 'Manhole and Sewer Treatment in Uganda | Amata',
    metaDescription:
      'Ask about manhole and sewer treatment in Uganda. Share site access, affected area and town to confirm scope, availability and a quote.',
    heroIntro:
      'Contact Amata with the property location and details of the manhole or sewer concern. The team can discuss the requested area, access and service availability.',
    overview:
      'Amata accepts enquiries for treatment of manholes and sewer areas. Requirements depend on the site, access and requested work. Contact the team to discuss scope, safety considerations, availability and a quote before arranging a visit.',
    concerns: [
      'Treatment enquiries for property manholes',
      'Sewer-area pest concerns',
      'Manhole and sewer treatment for residential or commercial sites',
    ],
    image: serviceImages.workplace,
    faqQuestion: 'What details should I provide for a manhole or sewer enquiry?',
    faqAnswer:
      'Share the site location, the affected manhole or sewer area, access arrangements and the issue you have noticed. Confirm the service scope and any access instructions with Amata.',
    additionalFaqQuestion: 'Can I request manhole treatment outside Kampala?',
    additionalFaqAnswer:
      'Contact Amata with the site location and access details. The team can confirm service availability and scope for your area before arranging any work.',
  }),
  createService({
    slug: 'sanitary-bin-hygiene',
    name: 'Sanitary feminine hygiene',
    shortDescription:
      'Discuss cleaning, disinfection and servicing of sanitary bins in ladies’ washrooms.',
    metaTitle: 'Sanitary Bin Cleaning in Uganda | Amata',
    metaDescription:
      'Enquire about sanitary bin cleaning, disinfecting and dressing in ladies’ washrooms in Uganda. Ask Amata to confirm facility scope and availability.',
    heroIntro:
      'Amata accepts enquiries about cleaning, disinfecting and dressing sanitary bins in ladies’ washrooms. Share your facility location and requirements to discuss the service scope.',
    overview:
      'The poster lists cleaning, disinfecting and dressing sanitary bins in ladies’ washrooms. Contact Amata to discuss the number of washrooms, the requested service arrangement, availability and a quote.',
    concerns: [
      'Cleaning and disinfection of sanitary bins',
      'Sanitary-bin dressing in ladies’ washrooms',
      'Feminine hygiene service enquiries for workplaces and facilities',
    ],
    image: serviceImages.indoor,
    faqQuestion: 'What is included in the sanitary feminine hygiene service?',
    faqAnswer:
      'The listed service includes cleaning, disinfecting and dressing sanitary bins in ladies’ washrooms. Confirm the scope, schedule and availability for your facility directly with Amata.',
    additionalFaqQuestion: 'How often can sanitary bins be serviced?',
    additionalFaqAnswer:
      'The service schedule should be discussed for your facility. Share the number of washrooms, location and requirements so Amata can confirm available arrangements.',
  }),
  createService({
    slug: 'staff-training',
    name: 'Consultancy and training',
    shortDescription:
      'Discuss hotel staff training on pest identification and practical pest prevention.',
    metaTitle: 'Pest Consultancy and Training in Uganda | Amata',
    metaDescription:
      'Ask about pest identification and prevention training for hotel staff in Uganda. Share team needs and location to confirm topics and availability.',
    heroIntro:
      'Amata accepts consultancy and training enquiries for hotel staff on identifying pest activity and prevention. Share your facility, team needs and location to discuss suitable topics.',
    overview:
      'The poster lists consultancy and training on hotel staff identification of pests and pest prevention. Contact Amata to discuss team requirements, proposed topics, delivery arrangements, availability and cost.',
    concerns: [
      'Helping hotel staff identify signs of pest activity',
      'Pest-prevention routines for hotel teams',
      'Consultancy and training enquiries for hospitality facilities',
    ],
    image: serviceImages.workplace,
    faqQuestion: 'Who can enquire about consultancy and training?',
    faqAnswer:
      'The listed service is for hotel staff training on pest identification and prevention. Contact Amata with your facility type, location and team requirements to confirm available arrangements.',
    additionalFaqQuestion: 'What does pest training for hotel staff cover?',
    additionalFaqAnswer:
      'The published training service focuses on identifying pests and prevention. Contact Amata to discuss team needs, proposed topics and the format available for your hotel.',
  }),
];

export const servicesBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));
