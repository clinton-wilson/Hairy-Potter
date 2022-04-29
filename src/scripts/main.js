// Imports go first
import {makePottery} from './PotteryWheel.js'
import {firePottery} from './Kiln.js'
import {toSellOrNotToSell} from './PotteryCatalog.js'
import {usePottery} from './PotteryCatalog.js'
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 4)
let platter = makePottery("platter", 3, 1)
let bowl = makePottery("bowl", 3, 4)
let vase = makePottery("vase", 5, 7)
let soapDish = makePottery("soap dish", 4, 2)
console.log(mug, platter, bowl, vase, soapDish)
// Fire each piece of pottery in the kiln
console.log(firePottery(mug, 1900))
console.log(firePottery(platter, 2300))
console.log(firePottery(bowl, 2201))
console.log(firePottery(vase, 2199))
console.log(firePottery(soapDish, 1400))
// Determine which ones should be sold, and their price
toSellOrNotToSell(mug)
toSellOrNotToSell(platter)
toSellOrNotToSell(bowl)
toSellOrNotToSell(vase)
toSellOrNotToSell(soapDish)
console.log(usePottery())
// Invoke the component function that renders the HTML list



