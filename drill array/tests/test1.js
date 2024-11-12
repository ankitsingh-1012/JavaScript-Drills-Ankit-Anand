import { each } from "../problems/problem1.js";
import { items } from "../arrays.js";

function  cb(val,index)
{
    return val;
}
let result=each(items,cb);
console.log(result);
