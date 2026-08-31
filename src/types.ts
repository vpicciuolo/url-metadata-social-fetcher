/** Shared types for url-metadata-social-fetcher. */
export interface SafeFetchOptions {
  timeoutMs?: number; maxBytes?: number; maxRedirects?: number; userAgent?: string;
  headers?: Record<string,string>; method?: string; allowContentTypes?: string[];
  allowHosts?: string[]; denyHosts?: string[];
}
export interface SafeFetchResult { ok:boolean; status:number; url:string; contentType:string; bytes:Uint8Array; text:string; truncated:boolean; }
export interface PageMetadata {
  url:string; canonicalUrl?:string; title?:string; description?:string; siteName?:string; imageUrl?:string; iconUrl?:string;
  themeColor?:string; brandColors:string[]; locale?:string; author?:string; publishedAt?:string; type?:string;
  keywords:string[]; socialLinks:string[]; raw:Record<string,string>;
}
export type SocialNetwork = 'instagram'|'threads'|'facebook'|'tiktok'|'youtube'|'soundcloud'|'twitch'|'spotify'|'x'|'github'|'linkedin'|'telegram'|'pinterest'|'snapchat'|'discord'|'website';
export interface SocialProfile { network:SocialNetwork; handle?:string; displayName?:string; bio?:string; avatarUrl?:string; bannerUrl?:string; followers?:number; following?:number; posts?:number; subscribers?:number; verified?:boolean; canonicalUrl:string; source:string; }
export interface MirrorTarget { put(key:string, bytes:Uint8Array, contentType:string):Promise<string>; get?(key:string):Promise<string|null>; }
export interface MirrorResult { ok:boolean; url?:string; contentType?:string; bytes?:number; reason?:string; }
export interface UrlEnrichment { input:string; kind:'website'|'social-profile'; network:SocialNetwork; canonicalUrl:string; title?:string; description?:string; imageUrl?:string; iconUrl?:string; themeColor?:string; brandColors:string[]; keywords:string[]; socialLinks:string[]; profile?:SocialProfile; page?:PageMetadata & {text?:string}; }
