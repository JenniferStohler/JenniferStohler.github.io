describe("numbers.js", () => {
  let add = window['add']

  describe("Add Function", () => {
    it("Returns the correct number", () => {
      chai.assert.strictEqual(add(4, 5), 9, "Be sure to use the addition operator")
    })
  })

  describe("Cubed Function", () => {
    let cubed = window['cubed']
    it("Knows the cubed value of 3", () => {
      chai.assert.strictEqual(cubed(3), 27)
    })
    it("Can cube large numbers", () => {
      chai.assert.strictEqual(cubed(286), 23393656)
    })
  })

  describe("DivideWholey Function", () => {
    let divideWholey = window['divideWholey']
    it("Works with simple numbers", () => {
      chai.assert.strictEqual(divideWholey(4, 2), 2)
    })

    it("The whole number should not be rounded", () => {
      chai.assert.isAtMost(divideWholey(5, 2), 2.5)
    })

    it("Returns only whole numbers", () => {
      chai.assert.equal(divideWholey(5, 2), 2)
    })

    it("The return type must be a number", () => {
      chai.assert.strictEqual(divideWholey(10, 3), 3)
    })
  })

  describe("isEven Function", () => {
    let isEven = window['isEven']
    it("The number 4 returns true", () => {
      chai.assert.isTrue(isEven(4), "Be sure to return true for even numbers")
    })
    it("The number 5 returns false", () => {
      let _sut = isEven(5)
      chai.assert.isTrue(!_sut && typeof _sut == 'boolean', "Be sure to return false for odd numbers")
    })
  })

  describe("NumberGenerator Function", () => {
    let numberGenerator = window['numberGenerator']
    it("Returns a whole number", () => {
      chai.assert.isTrue(Number.isInteger(numberGenerator(0, 10)), "Be sure to return a whole number")
    })
    it("Return number is within the provided range", () => {
      chai.assert.isTrue((numberGenerator(50, 60) >= 50 && numberGenerator(50, 60) <= 60), "Be sure to include the provided numbers in your range")
    })
    it("Function still works given that num1 isn't necessarily the smallest number", () => {
      chai.assert.isTrue((numberGenerator(90, 85) >= 85 && numberGenerator(90, 85) <= 90), "Be sure to include the provided numbers in your range")
    })
  })
})
