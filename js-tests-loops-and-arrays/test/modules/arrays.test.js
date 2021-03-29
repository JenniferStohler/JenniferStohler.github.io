describe("arrays.js", () => {
   describe("1. rearranger Function", () => {
      let rearranger = window["rearranger"]
      it("returns an array", () => {
         chai.assert.isArray(rearranger([3, 4]), "The return type must be an array.")
      })
      it("returns the array with the elements in the correct positions", () => {
         chai.assert.includeOrderedMembers(rearranger(['This', 'is', 'a', 'split', 'sentence.']), ['is', 'a', 'split', 'sentence.', 'This'], "Only change the position of the first element. Move it to the end.")
      })
   })
   describe("2. largestNum Function", () => {
      let largestNum = window["largestNum"]
      it("returns a number (or object if attempting the stretch goal)", () => {
         chai.assert.isTrue(typeof largestNum([1, 2, 3]) == "number" || typeof largestNum([1, 2, 3]) == "object", "The return type must be a number or an object if attempting the stretch goal.")
      })
      it("returns the largest number", () => {
         chai.assert.strictEqual(largestNum([10, 12, 3, 2, 42]), 42, "Find and return the largesgt number within the array.")
      })
      describe("Stretch Goal", () => {
         it("if there's duplicates then return an object with the large number as the key and the amount of duplicates as the value", () => {
            chai.assert.propertyVal(largestNum([23, 12, 4, 6, 23, 23, 23, 13]), "23", 4, "Should return an object like: { largestNum: numberOfOccurances }")
         })
      })
   })
   describe("3. elemsTimesLength Function", () => {
      let elemsTimesLength = window["elemsTimesLength"]
      it("returns an array", () => {
         chai.assert.isArray(elemsTimesLength([3]), "The return type must be an array.")
      })
      it("modifies every element correctly", () => {
         chai.assert.includeOrderedMembers(elemsTimesLength([4, 2, 1, 7]), [16, 8, 4, 28], "Returns an array containing modified elements of the given array.")
      })
   })
   describe("4. flightCost Function", () => {
      let flightCost = window["flightCost"]
      it("Flying coach is a lot cheaper than flying firstClass", () => {
         chai.assert.strictEqual(flightCost("LAX", false), 500, "Be sure to return the standard cost if flightClass is set to false")
         chai.assert.strictEqual(flightCost("CAN", false), 750)
      })

      it("Flying to Canada first class can be expensive", () => {
         chai.assert.strictEqual(flightCost("SEA", true), 1200, "Be sure to check if firstClass is set to true")
         chai.assert.strictEqual(flightCost("CAN", true), 6200)
      })
      it("Don't be case sensitive!", () => {
         chai.assert.strictEqual(flightCost('sea', false), 800)
      })
   })
   describe("5. findById Function", () => {
      let findById = window["findById"]
      it("returns an object", () => {
         chai.assert.isObject(findById(1), "The return type must be an object.")
      })
      it("returns the complete user object with the target id", () => {
         chai.assert.hasAllKeys(findById(17), { id: 17, name: 'St. MaryLou de la Playa Carmen' }, "Return the complete user object with the matching id.")
      })
      it("returns an object containing an error message if no matching user", () => {
         chai.assert.hasAllKeys(findById(1000), { error: "No user with that id." }, "Return an object with an error message if no user found with the target id.")
      })
   })
   describe("6. bandMemberDetails Function", () => {
      let bandMemberDetails = window["bandMemberDetails"]
      it("returns a string", () => {
         chai.assert.isString(bandMemberDetails("Kris"), "The return type must be a string.")
      })
      it("returns a correctly formatted string with details of the correct band member", () => {
         chai.assert.strictEqual(bandMemberDetails("Kris"), "Kris is in the band and plays the guitar", "Use string concatenation or interpolation to populate your return string with the correct info.")
      })
      describe("Stretch Goal", () => {
         it("still returns properly if only part of the name is given (case insensitive)", () => {
            chai.assert.strictEqual(bandMemberDetails("John"), "Johnny P is in the band and plays the sax", "The .includes() method could help with this challenge.")
         })
      })
   })
})
