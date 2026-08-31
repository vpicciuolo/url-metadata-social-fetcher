# API reference

## High level
- `enrichUrl(input, options?)` — unified website/social result.
- `enrichPage(url, options?)` — page metadata plus optional text.
- `enrichSocialProfile(input, options?)` — layered social profile enrichment.
- `enrichSocialProfiles(inputs, options?)` — bounded-concurrency batch.

## URL safety
- `assertSafeUrl()` — validates or throws `UnsafeUrlError`.
- `isSafeUrl()` — boolean wrapper.
- `normalizeUrl()` — removes common tracking/fragment/trailing noise.

## Fetching
- `safeFetch()` — timeout, byte, redirect and content-type bounded fetch.
- `fetchDocument()` — HTML/XHTML/plain-text convenience wrapper.
- `fetchImage()` — image convenience wrapper.

## Extraction
- `extractMetadata()` — SEO/Open Graph/canonical/image/social-link metadata.
- `extractJsonLd()` — first useful JSON-LD object.
- `extractText()` — best-effort text excerpt.
- `extractSocialLinks()` — known public social/profile hosts in anchors.

## Providers
- `detectNetwork()`
- `fetchOEmbed()`
- `discoverOEmbed()`
- `parseCompactNumber()`

## Cache
- `MemoryCache<T>`
- `withCache(store, ttlMs)`

## Mirroring
- `keyForUrl()`
- `mirrorImage()` / `mirrorImages()`
- `createFileSystemTarget()`
- `createHttpPutTarget()`
- `createMemoryTarget()`

## Version
- `RELEASE_VERSION = '1.0.0.1'`
- `PACKAGE_VERSION = '1.0.0'`
