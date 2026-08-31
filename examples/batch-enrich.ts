import {enrichUrl} from '../src/index.js';
const inputs=process.argv.slice(2);if(!inputs.length){console.log('Usage: tsx examples/batch-enrich.ts <url> [...more]');process.exit(0);}for(const input of inputs){const result=await enrichUrl(input);console.log(JSON.stringify({input,result},null,2));}
