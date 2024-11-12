import { items } from "../arrays.js";
import { reduce } from "../problems/problem3.js";
function cb(res, val)
{
     return res+val;
}
let result=reduce(items,cb);
console.log(result);
