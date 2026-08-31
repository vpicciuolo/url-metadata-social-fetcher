import {createFileSystemTarget,mirrorImage} from '../src/index.js';
const source=process.argv[2];if(!source){console.log('Usage: tsx examples/mirror-image.ts <image-url>');process.exit(0);}const target=createFileSystemTarget('./public/media','/media');const result=await mirrorImage(source,target);console.log(result);if(!result.ok)process.exit(1);
