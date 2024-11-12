import { carOlder } from "../problem/problem5.js";
import { carInYear } from "../problem/problem4.js";
import { inventory } from "../problem/problem1.js";

// let carYears=carInYear(inventory);
// console.log(inventory);
// console.log(carInYear);
let ans=carOlder(carInYear(inventory));

console.log(ans);