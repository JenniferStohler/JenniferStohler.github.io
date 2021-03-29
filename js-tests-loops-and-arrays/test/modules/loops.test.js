describe("loops.js", () => {
    describe("1. factorials Function", () => {
        let factorials = window["factorials"]
        it("returns a number", () => {
            chai.assert.isNumber(factorials(4), "The return type must be a number.")
        })
        it("returns the correct number given 4", () => {
            chai.assert.strictEqual(factorials(4), 24, "Be sure to use the multiplication operator")
        })
        it("returns the correct number given 10", () => {
            chai.assert.strictEqual(factorials(10), 3628800, "Be sure to use the multiplication operator")
        })
    })
    describe("2. rangeTotal Function", () => {
        let rangeTotal = window["rangeTotal"]
        it("returns a number", () => {
            chai.assert.isNumber(rangeTotal(1, 3), "The return type must be a number.")
        })
        it("returns the correct sum", () => {
            chai.assert.strictEqual(rangeTotal(2, 6), 20, "Sum the range inclusive.")
        })
    })
    describe("3. rangeDivisor Function", () => {
        let rangeDivisor = window["rangeDivisor"]
        it("returns a number", () => {
            chai.assert.isNumber(rangeDivisor(15, 20, 5), "The return type must be a number.")
        })
        it("returns the correct total of numbers divisible end of range exclusive", () => {
            chai.assert.isAtLeast(rangeDivisor(15, 20, 5), 1, "Total divisible numbers in the range exclusive.")
            chai.assert.isAtMost(rangeDivisor(15, 20, 5), 2, "Total divisible numbers in the range exclusive.")
        })
        it("returns the correct total of numbers divisible end of range inclusive", () => {
            chai.assert.strictEqual(rangeDivisor(15, 20, 5), 2, "Total divisible numbers in the range inclusive.")
        })
    })
})