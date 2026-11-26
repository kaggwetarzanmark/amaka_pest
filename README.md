# Amata Pest Control Heroes

Static Astro website using JavaScript. The desktop layout is based on
`design2/I.dc.html`; at widths up to 720px, the page switches to the mobile
layout from `mobile/IM.dc.html`. Both layouts reuse their supplied markup and
design styles inside the Astro page.

## Run locally

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The source mockups include prototype controls; the quote form is not connected
to a service yet. Confirm the contact numbers, legal business name, service
coverage and product availability before publishing. Add only verified
credentials, staff qualifications, customer stories and service guarantees.

The site includes the home, Services overview, Shop, Training, About and FAQ
routes. Individual service detail pages are generated from
`src/data/services.js` under `/services/<slug>/`. Confirm service scope,
availability, pesticide details, preparation and safety instructions with the
business before publishing.
