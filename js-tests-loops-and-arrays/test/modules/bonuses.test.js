// #region sumCanEqual helpers
function arrayMaker() {
   let out = []
   while (out.length < 1000000) {
      out.push(Math.floor(Math.random() * 1000))
   }
   return out
}

let bigArr = arrayMaker()
// #endregion

// #region oddAscender helpers
function arraysMatch(act, exp) {
   if (act.length != exp.length) return false
   for (let i = 0; i < act.length; i++) {
      if (act[i] != exp[i]) return false
   }
   return true
}
// #endregion

describe("bonuses.js", () => {
   describe("1. letterChecker Function", () => {
      let letterChecker = window["letterChecker"]
      it("returns a string", () => {
         chai.assert.isString(letterChecker('qrsuv'), "The return type must be a string.")
      })
      it("returns the missing letter", () => {
         chai.assert.strictEqual(letterChecker('qrsuv'), 't', "You must return the missing letter.")
      })
      it('returns "no missing letters" if all letters are accounted for', () => {
         chai.assert.strictEqual(letterChecker('cdefghi'), 'no missing letters', "If all letters are account for, return 'no missing letters'.")
      })
   })
   describe("2. sumEqualsTarget Function", () => {
      let sumEqualsTarget = window["sumEqualsTarget"]
      it("returns a bool", () => {
         chai.assert.isBoolean(sumEqualsTarget([1, 1], 2), "The return type must be a bool.")
      })
      it("returns true if a pair of numbers' sum equals the target number", () => {
         chai.assert.strictEqual(sumEqualsTarget([2, 6, 4, 3], 7), true, "If any pair's sum equals the target return true.")
      })
      it("processes large data inputs quickly", function () {
         this.timeout(50)
         chai.assert.isBoolean(sumEqualsTarget(bigArr, 42), "You have 50ms to process an array of 1 million numbers. Good luck!")
      })
   })
   describe("3. oddAscender Function", () => {
      let oddAscender = window["oddAscender"]
      it("returns an array", () => {
         chai.assert.isArray(oddAscender([1, 2]), "The return type must be an array.")
      })
      it("don't change the position of even numbers", () => {
         chai.assert.isTrue(arraysMatch(oddAscender([2, 8, 4]), [2, 8, 4]), "Only change the position of odd numbers!")
      })
      it("sorts odd numbers ascending", () => {
         chai.assert.isTrue(arraysMatch(oddAscender([2, 9, 4, 3, 6, 6, 1, 5, 8]), [2, 1, 4, 3, 6, 6, 5, 9, 8]), "Return the array with evens in same positions and odds ascending.")
      })
   })
})