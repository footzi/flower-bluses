import { products as pendants } from "./data-pendants.js"
import { products as earrings } from "./data-earrings.js"
import { products as rings } from "./data-rings.js"
import { products as clips } from "./data-clips.js"
import { products as sets } from "./data-sets.js"
import { products as another } from "./data-another.js"

let products = pendants.concat(earrings).concat(rings).concat(clips).concat(sets).concat(another)
export default products
 