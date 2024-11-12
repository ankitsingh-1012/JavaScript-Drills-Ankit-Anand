import { items } from "../arrays.js";
import { filter } from "../problems/problem5.js";
function cb(val,index)
{
   return val%2===0;
}
let result=filter(items,cb);
console.log(result);
