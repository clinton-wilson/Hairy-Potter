const potteryForSale = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.weight >= 6) {
        potteryObj.price = 40
    }
    else if (potteryObj.weight < 6) {
        potteryObj.price = 20
    }
    if (potteryObj.cracked === false) {
        potteryForSale.push(potteryObj)
    }
    return potteryForSale
}

export const usePottery = () => {
    return potteryForSale.map(potteryForSale => ({...potteryForSale}))
}