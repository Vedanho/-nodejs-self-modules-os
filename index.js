import os from 'os';
import {greeting} from "./welcome.js"
console.log(os.homedir())
console.log(os.hostname())
console.log(os.version())
console.log(os.type())
console.log(greeting())