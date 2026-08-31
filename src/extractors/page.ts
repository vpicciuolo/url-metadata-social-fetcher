/** High-level page enrichment: fetch a URL safely and return normalised metadata. */
import {fetchDocument} from '../core/safe-fetch.js';
import {MemoryCache,type CacheStore} from '../core/cache.js';
import {extractMetadata,extractText} from './html-meta.js';
import type {PageMetadata,SafeFetchOptions} from '../types.js';
export type EnrichedPage=PageMetadata&{text?:string};
export interface EnrichPageOptions extends SafeFetchOptions{includeText?:boolean;cacheTtlMs?:number;cache?:CacheStore<EnrichedPage>;}
const defaultCache=new MemoryCache<EnrichedPage>();const inflight=new Map<string,Promise<EnrichedPage|null>>();
export async function enrichPage(url:string,options:EnrichPageOptions={}):Promise<EnrichedPage|null>{const ttl=options.cacheTtlMs??15*60*1000,store=options.cache??defaultCache,key=`page:${url}:${options.includeText?'text':'meta'}`;if(ttl>0){const hit=await store.get(key);if(hit)return hit;const running=inflight.get(key);if(running)return running;}const task=(async():Promise<EnrichedPage|null>=>{try{const response=await fetchDocument(url,options);if(!response.ok||!response.text)return null;const meta=extractMetadata(response.text,response.url);const result:EnrichedPage=options.includeText?{...meta,text:extractText(response.text)}:meta;if(ttl>0)await store.set(key,result,ttl);return result;}catch{return null;}})().finally(()=>inflight.delete(key));if(ttl>0)inflight.set(key,task);return task;}
