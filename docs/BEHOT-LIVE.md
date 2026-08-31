# Live production pattern — BeHot.now

[BeHot.now](https://behot.now) is a live attention marketplace operated by HRN Innovation Technologies Ltd. Its public [Get Hot](https://behot.now/get-hot) flow starts from a URL: a user pastes a link and the platform builds a draft listing. The public [How it works](https://behot.now/how-it-works) page describes auto-fill of name, logo, description and socials followed by human approval.

This repository packages the reusable engineering pattern behind that workflow.

## URL-first onboarding
Instead of asking users to retype title, description, logo and multiple social URLs, accept one high-signal URL, enrich it, then present an editable draft.

| Enrichment field | Listing use |
| --- | --- |
| `title` | name/title |
| `description` | draft description |
| `imageUrl` | cover/logo/avatar candidate |
| `iconUrl` | fallback icon |
| `canonicalUrl` | external destination |
| `keywords` | candidate tags |
| `socialLinks` | public social links |
| `profile.handle` | handle |
| `profile.network` | source network |

## Outbid / paid-ranking adaptation
1. User pastes the thing to rank.
2. Enrich the target URL.
3. Create an editable draft listing.
4. Mirror the selected preview asset.
5. User chooses board/category.
6. Complete your bid/payment/credit mechanic.
7. Moderate if required.
8. Publish the ranking entry.

This cleanly separates **URL identity/enrichment** from **ranking mechanics**.
