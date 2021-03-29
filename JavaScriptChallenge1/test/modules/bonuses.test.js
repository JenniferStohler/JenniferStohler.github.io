describe("bonuses.js", () => {
  describe("camelCase Function", () => {
    let camelCase = window["camelCase"]
    it("Returns a string", () => {
      chai.assert.isString(camelCase("word"), "Be sure to return a string")
    })

    it("Contains no spaces", () => {
      chai.assert.isTrue(!camelCase("team number 2").match(/\W/), "Be sure to remove all whitespaces")
    })

    it("Capitalizes each word correctly", () => {
      chai.assert.strictEqual(camelCase("team number 2"), "teamNumber2", "Be sure to capitalize each word, starting with the second word")
    })
  })
})