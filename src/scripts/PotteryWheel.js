let potteryObj = {
    id: 1
}

const makePottery = (shape, weight, height) => {
    potteryObj = {
        id: potteryObj.id + 1,
        shape: shape,
        weight: weight,
        height: height
        }
    return potteryObj    
    }



console.log(potteryObj)

export {makePottery}