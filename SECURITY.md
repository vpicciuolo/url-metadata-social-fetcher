# Security Policy

## Supported versions
The latest public release and `main` receive security fixes.

## Reporting
Do not publish an SSRF bypass, private-network reachability bug or exploitable resource-exhaustion issue in a public issue. Use GitHub private vulnerability reporting/security advisories when available and include affected version, proof of concept, runtime and redirect/DNS details.

## Threat model
The library handles untrusted user-submitted public URLs. It blocks common loopback/private/link-local/metadata targets, non-web schemes, credential-bearing URLs, internal-style hostnames, unexpected ports, redirect-to-private chains, oversized responses and stalled bodies.

## DNS rebinding
Portable hostname validation cannot guarantee that a hostname resolves only to public IP space. High-risk/multi-tenant deployments should enforce resolved-IP rules with an egress proxy, firewall or runtime-specific resolver/dispatcher.

## Content trust
Fetched metadata is still untrusted input. Do not evaluate it, render raw HTML, treat metadata as moderation truth, or bypass platform access controls.
