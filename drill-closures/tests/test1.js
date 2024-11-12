import { counterFactory } from "../problems/problem1.js";
const counter=counterFactory();
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());