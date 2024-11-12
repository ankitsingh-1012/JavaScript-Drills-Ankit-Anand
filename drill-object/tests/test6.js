import { testObject } from "../objects.js";
import { defaults } from "../problems/problem6.js";
let defaultProps={country:"India", age:45, qualification:"Masters"}
console.log(defaults(testObject,defaultProps));