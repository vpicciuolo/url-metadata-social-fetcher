# FAQ

## Is this a scraper?
It is a bounded public-metadata fetcher/parser that can be used inside scraping-like workflows. It is not a browser automation system.

## Does it execute JavaScript?
No. JS-rendered-only metadata may need a separate renderer/unfurl provider.

## Are social metrics guaranteed?
No. Platforms change public metadata and may restrict unauthenticated requests. Results are best-effort and fail soft.

## Does it block localhost/cloud metadata?
The guard blocks common private/loopback/link-local/metadata targets. High-risk deployments should also enforce resolved-IP/egress controls for DNS-rebinding defense.

## Why no Cheerio/JSDOM runtime dependency?
The target is metadata extraction rather than arbitrary DOM manipulation, keeping the core small and portable.

## Why mirror images?
Remote CDN URLs can expire or block hotlinking. Mirroring gives you stable assets and your own cache policy.

## Why release 1.0.0.1 but npm package 1.0.0?
The requested repository release uses four numeric components; npm SemVer uses three. The repository therefore records 1.0.0.1 in `VERSION`, `RELEASE_VERSION` and the changelog while `package.json.version` stays npm-compatible.
