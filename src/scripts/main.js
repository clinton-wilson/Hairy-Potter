// Imports go first
import {makePottery} from './PotteryWheel.js'
import {firePottery} from './Kiln.js'
import {toSellOrNotToSell} from './PotteryCatalog.js'
import {usePottery} from './PotteryCatalog.js'
import { PotteryList } from './PotteryList.js'
// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 4)
let platter = makePottery("platter", 6, 1)
let bowl = makePottery("bowl", 3, 4)
let vase = makePottery("vase", 9, 7)
let soapDish = makePottery("soap dish", 4, 2)
console.log(mug, platter, bowl, vase, soapDish)
// Fire each piece of pottery in the kiln
const firedMug = firePottery(mug, 1900)
const firedPlatter = firePottery(platter, 2300)
const firedBowl = firePottery(bowl, 2201)
const firedVase = firePottery(vase, 2199)
const firedSoapDish = firePottery(soapDish, 1400)
console.log(firedMug)
console.log(firedPlatter)
console.log(firedBowl)
console.log(firedVase)
console.log(firedSoapDish)
// Determine which ones should be sold, and their price
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedPlatter)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedSoapDish)
console.log(usePottery())
// Invoke the component function that renders the HTML list
const potteryForSale = usePottery()

let parentHTMLElement = document.querySelector(".potteryList")

parentHTMLElement.innerHTML = PotteryList()


