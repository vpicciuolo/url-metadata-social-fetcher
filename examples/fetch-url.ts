import {enrichPage} from '../src/index.js';
const url=process.argv[2]??'https://example.com';const result=await enrichPage(url,{includeText:true});if(!result){console.error('Could not enrich:',url);process.exit(1);}console.log(JSON.stringify(result,null,2));
