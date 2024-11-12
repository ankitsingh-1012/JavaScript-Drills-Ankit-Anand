import { items } from "../arrays.js";
import { find } from "../problems/problem4.js";
function cb(val, num){
    return val === num;
}

console.log(find(items, cb, 4));
