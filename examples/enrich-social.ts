import {enrichSocialProfiles} from '../src/index.js';
const inputs=process.argv.slice(2);if(!inputs.length){console.log('Usage: tsx examples/enrich-social.ts <url-or-handle> [...more]');process.exit(0);}const profiles=await enrichSocialProfiles(inputs);for(const profile of profiles)console.log(JSON.stringify(profile,null,2));
