import { cacheFunction } from "../problems/problem3.js";

function add(a, b){
    return a + b;   
}

const result = cacheFunction(add);

console.log(result(10, 20));

console.log(result(10, 20));