const firePottery = (potteryObj, temperature) => {
    potteryObj.fired = true
    if (temperature > 2200) {
        potteryObj.cracked = true
    }
    else {
        potteryObj.cracked = false
    }
    return potteryObj
}

export {firePottery}