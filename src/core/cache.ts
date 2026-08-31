/** Minimal TTL cache with in-flight request de-duplication. */
export interface CacheStore<T> { get(key:string):Promise<T|undefined>; set(key:string,value:T,ttlMs:number):Promise<void>; delete(key:string):Promise<void>; }
interface Entry<T> { value:T; expiresAt:number; }
export class MemoryCache<T> implements CacheStore<T> {
  private readonly map = new Map<string,Entry<T>>();
  constructor(private readonly maxEntries=500) {}
  async get(key:string):Promise<T|undefined> { const hit=this.map.get(key); if(!hit)return undefined; if(hit.expiresAt<Date.now()){this.map.delete(key);return undefined;} return hit.value; }
  async set(key:string,value:T,ttlMs:number):Promise<void> { if(this.map.size>=this.maxEntries){const oldest=this.map.keys().next().value;if(oldest!==undefined)this.map.delete(oldest);} this.map.set(key,{value,expiresAt:Date.now()+ttlMs}); }
  async delete(key:string):Promise<void> { this.map.delete(key); }
}
export function withCache<T>(store:CacheStore<T>,ttlMs:number) { const inflight=new Map<string,Promise<T>>(); return async function cached(key:string,produce:()=>Promise<T>):Promise<T>{ const hit=await store.get(key); if(hit!==undefined)return hit; const running=inflight.get(key); if(running)return running; const promise=produce().then(async value=>{await store.set(key,value,ttlMs);return value;}).finally(()=>inflight.delete(key)); inflight.set(key,promise); return promise; }; }
