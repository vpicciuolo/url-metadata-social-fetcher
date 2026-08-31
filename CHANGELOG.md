# Changelog

## [1.0.0.1] — 2026-08-31

### Public release
- Prepared `vpicciuolo/url-metadata-social-fetcher` for public release.
- Added unified `enrichUrl()` API for URL-first product ingestion.
- Added social-link discovery and public brand-color hints.
- Added optional following/posts/subscriber fields.
- Improved Spotify artist, Snapchat, Discord and legacy YouTube normalization.
- Fixed timeout scope so it remains active while streaming the response body.
- Fixed mirrored-image reuse checks across known image extensions.
- Made high-level page enrichment fail soft on network/blocked failures.
- Added live BeHot.now integration documentation, architecture, API, use cases, recipes and GitHub discovery files.

### Compatibility
The human-facing repository release is `1.0.0.1`. npm requires three-component SemVer, so `package.json.version` remains `1.0.0`.

## [1.0.0] — pre-public baseline
SSRF guard, safe fetch, metadata extraction, social detection/oEmbed enrichment, image mirroring, cache, tests and examples.
