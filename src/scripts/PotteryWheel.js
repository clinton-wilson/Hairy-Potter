let potteryObj = {
    id: 0
}

export const makePottery = (shape, weight, height) => {
    potteryObj = {
        id: potteryObj.id + 1,
        shape: shape,
        weight: weight,
        height: height
        }
    return potteryObj    
    }



console.log(potteryObj)
