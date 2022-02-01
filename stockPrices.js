function best(nums) {
    let lowest
    let lowestIndex
    let highest
    let hightestIndex

    for (let i =0; i < nums.length; i++) {
        if ((nums[i] < lowest || lowest === undefined) && (i < hightestIndex || lowestIndex === undefined || hightestIndex === undefined)) {
            lowest = nums[i]
            lowestIndex = i
        } else if ((nums[i] > highest || highest === undefined) && (i > lowestIndex || hightestIndex === undefined)) {
            highest = nums[i]
            hightestIndex = i
        } else {
            continue
        }

    }

    if (lowest < highest) {
        console.log(`profit: $${highest - lowest}`)
        console.log(`buy at $${lowest}, sell at $${highest}`)
    } else {
        console.log(`profit: $0`)
    }

}

console.log("---------------")
best([15, 10, 20, 22, 1, 9])
console.log("---------------")
best([1, 2, 3, 4, 5])
console.log("---------------")
best([2, 3, 10, 6, 4, 8, 1])
console.log("---------------")
best([7, 9, 5, 6, 3, 2])
console.log("---------------")
best([0, 100])
console.log("---------------")
best([5, 4 , 3, 2, 1])
console.log("---------------")
best([100])
console.log("---------------")
best([100, 0])
console.log("---------------")