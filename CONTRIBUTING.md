# Contributing

```bash
npm install
npm run typecheck
npm test
npm run build
```

## Rules
- Keep the core runtime dependency-free.
- Never weaken URL/redirect safety without explicit reasoning and negative tests.
- High-level enrichment must fail soft when upstreams are unavailable.
- Tests must be offline and deterministic.
- Treat fetched strings as untrusted input.
- Export/document every public API.
- Keep Node-specific filesystem behavior isolated to storage.

## Social providers
Update detection rules, canonical paths, oEmbed only when documented, tests and docs. Do not promise metrics a platform does not reliably expose.

## Security
Do not open a public issue for SSRF/private-network vulnerabilities. Follow `SECURITY.md`.
