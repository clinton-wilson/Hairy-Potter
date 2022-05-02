const potteryForSale = []

export const toSellOrNotToSell = (potteryObj) => {
    if (potteryObj.cracked === false) {
    if (potteryObj.weight >= 6) {
        potteryObj.price = 40
    }
    else {
        potteryObj.price = 20
    }
        potteryForSale.push(potteryObj)
    }
    return potteryObj
}

export const usePottery = () => {
    return potteryForSale.map(potteryForSale => ({...potteryForSale}))
}  

