# AccelPro Affiliate website

Three plain HTML pages for the free checklist and Affiliate Funnel Launch Program.

## Assets and settings

- `assets/amit-coach.png` — Amit Chakraborty's real portrait, included in this repository for both About sections.
- `assets/affiliate-funnel-starter-checklist.pdf` — the real PDF checklist. The download button already points here; no placeholder PDF was created.
- Set `GROUP_LINK` in `config.js` when the real group invite link is available. Other editable site details are in the same file.

## Run locally

Run `npm run dev` from this folder, then open the local URL printed by `serve`. Node.js and npm are required. You can also open the HTML files directly for a quick visual preview.

The Netlify form is handled by Netlify after deployment. A local static server cannot process submissions; it may navigate to the thank-you page without saving a lead.

## Deploy

Add the real assets, then deploy this folder as a static site to Netlify. No build command is needed; use this folder as the publish directory. Netlify will detect the `leads` form. Set the production domain to `accelproaffiliate.com` and verify a test form submission, download, and WhatsApp links after deployment.
