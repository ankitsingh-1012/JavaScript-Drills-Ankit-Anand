import { testObject } from "../objects.js";
import { mapObject } from "../problems/problem3.js";
function cb(value,key,obj)
{
    value=obj[key];
    return value;
}
let result=mapObject(testObject,cb);
console.log(result);