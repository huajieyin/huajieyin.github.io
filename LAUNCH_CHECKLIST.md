# Launch Checklist (GitHub Pages)

Use this checklist before making the site public.

## 1. Legal Basics
- [ ] `impressum.html` contains real legal entity/contact details (no placeholders).
- [ ] `datenschutz.html` reflects actual data processing.
- [ ] Privacy page states hosting provider (GitHub Pages) and possible server log processing.
- [ ] Privacy page states data subject rights and contact channel.
- [ ] Legal links in footer open correctly (`Legal Notice`, `Privacy Policy`).

## 2. Content & Brand
- [ ] Final copy has no draft wording / TODO text.
- [ ] Company/person name, email, year, and claims are accurate.
- [ ] Visual consistency check on desktop + mobile.

## 3. Security & Privacy Hygiene
- [ ] No secrets in repository (`.env`, API keys, private keys, tokens).
- [ ] No unintended personal data or internal docs uploaded.
- [ ] External links use HTTPS and are intentional.
- [ ] Contact email is acceptable to expose publicly.

## 4. Technical QA
- [ ] `index.html` loads without console errors.
- [ ] Fonts load from local `assets/fonts`.
- [ ] `styles.css` and `script.js` are linked and working.
- [ ] `impressum.html` and `datenschutz.html` render correctly.
- [ ] Navigation/buttons work as expected.

## 5. GitHub Repository Readiness
- [ ] `.gitignore` is present and active.
- [ ] Commit history does not include sensitive files.
- [ ] Repository visibility chosen intentionally (`Private` before launch, then `Public` when ready).
- [ ] Optional files reviewed: `README.md`, `LICENSE`, `.nojekyll`.

## 6. GitHub Pages Settings
- [ ] `Settings -> Pages -> Source` is configured intentionally.
- [ ] If not launching yet: Pages source disabled and/or repository private.
- [ ] If launching: branch set correctly (`main` + `/(root)`).
- [ ] Custom domain (`CNAME`) configured only if needed.

## 7. Final Pre-Launch Validation
- [ ] Run local final check in browser.
- [ ] Push latest commit.
- [ ] Verify deployed URL after 1-3 minutes.
- [ ] Hard refresh browser to confirm latest assets.

## 8. Post-Launch
- [ ] Recheck legal links and contact email on live site.
- [ ] Keep legal pages updated when content/processing changes.
- [ ] Track and patch any reported issue quickly.
