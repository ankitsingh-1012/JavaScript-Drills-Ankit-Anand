import { limitFunctionCallCount } from "../problems/problem2.js";
function cb(args)
{
    return args*10;
}
let result=limitFunctionCallCount(cb,4);
console.log(result(5));
console.log(result(6));
console.log(result(7));
console.log(result(8));
console.log(result(9));
console.log(result(10));