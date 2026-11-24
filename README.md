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
coverage and product availability before publishing.

The Services, Shop, Training, About and FAQ links point to separate routes.
These pages currently contain only the shared header and footer; their main
content is intentionally blank.
