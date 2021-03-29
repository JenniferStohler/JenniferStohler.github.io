describe("Strings.js", () => {
  describe("LetterAtPosition Function", () => {
    let letterAtPos = window['letterAtPosition']
    it("it works with one character", () => {
      chai.assert.strictEqual(letterAtPos("i", 0), "i")
    })

    it("Works with more than one character input", () => {
      chai.assert.strictEqual(letterAtPos("hello i call myself joan", 9), "a")
    })
  })

  describe("Concat Function", () => {
    let concat = window['concat']
    it("Will join two strings with the default seperator", () => {
      chai.assert.strictEqual(concat("Javascript", "is awesome!"), "Javascript is awesome!")
    })

    it("Will accept the optional seperator", () => {
      chai.assert.strictEqual(concat("JavaScript", "is Awesome!!!", ", "), "JavaScript, is Awesome!!!")
    })
  })

  describe("Capitalizer Function", () => {
    let capitalizer = window['capitalizer']
    it("Returns a string", () => {
      chai.assert.isString(capitalizer("string", 1))
    })

    it("Capitalizes the character at the target position", () => {
      chai.assert.strictEqual(capitalizer("bananana", 2), "N")
    })

    it("Works with any length of string", () => {
      chai.assert.strictEqual(capitalizer("How much wood could a woodchuck chuck if a woodchuck could chuck wood", 22), "W")
    })

  })
})