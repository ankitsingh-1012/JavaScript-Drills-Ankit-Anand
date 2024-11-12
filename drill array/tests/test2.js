import { items } from "../arrays.js";
import { map } from "../problems/problem2.js";
function cb(val,index)
{
    return val*val;
}
let ans=map(items, cb);
console.log(ans);
