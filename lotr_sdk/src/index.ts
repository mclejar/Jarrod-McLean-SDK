// src/index.ts

import { Base } from './base';
import { Movies } from './movies';
import { applyMixins } from './utils';

class LotrSDK extends Base{}
interface LotrSDK extends Movies{}

applyMixins(LotrSDK, [Movies]);

export default LotrSDK;

// export class Library {
//   posts: Posts;

//   constructor(config: { apiKey: string; baseUrl?: string }) {
//     this.posts = new Posts(config);
//   }
// }
