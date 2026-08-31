# Integration recipes

## Draft listing
```ts
const result = await enrichUrl(input, { timeoutMs: 6000, maxBytes: 1_500_000 });
const draft = result ? {
  sourceUrl: input,
  canonicalUrl: result.canonicalUrl,
  title: result.title ?? '',
  description: result.description ?? '',
  imageUrl: result.imageUrl ?? result.iconUrl ?? '',
  socialLinks: result.socialLinks,
  tags: result.keywords.slice(0, 10),
  sourceNetwork: result.network,
  status: 'draft'
} : { sourceUrl: input, title: '', description: '', status: 'draft' };
```

## Allowlist-only importer
```ts
await enrichUrl(url, { allowHosts: ['example.com', 'partner.example'] });
```

## Strict preview
```ts
await enrichPage(url, { timeoutMs: 4000, maxBytes: 750_000, maxRedirects: 2 });
```

## Stable image
Enrich first, then call `mirrorImage(enriched.imageUrl, target)` and persist the returned stable URL.

## Scheduled refresh
Keep imported `source_*` fields separate from user-edited public fields. Compare later enrichment results rather than silently overwriting editorial content.

## Scale
For bulk imports, queue enrichment workers, preserve the same URL guard in workers and replace `MemoryCache` with Redis/Valkey/KV via the three-method `CacheStore` interface.
