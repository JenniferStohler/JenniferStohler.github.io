// Dog Challenges

// Add the following properties to the dog object: name, legs, tail, and likes. 
// The name property should have a value that is a string, the legs property 
// should have a value that is a number, the tail property should have a 
// boolean value, and the likes property should have a value that is an 
// array.Inside the array, include at least 4 values.
let goodDoggo = {
  name: 'Tuck',
  legs: 4,
  tail: true,
  likes: ['pepperoni', 'squeaky toys', 'pets', 'food']
}


// write a function that returns the value of the legs property on your dog object using dot notation.
function howManyLegs() {
  return goodDoggo.legs
}

// Cat Challenges

let cat = {
  name: "Pickles",
  legs: 4,
  whiskers: true,
  likes: ["napping", "playing", "running at 2:00am", "pets", "stealing food off the counter"]
}

// Write a function that uses bracket notation to change the cat's name from 
// "Pickles" to "Kevin".Then use either dot or bracket notation to return 
// the value of the name property.
function renameCat() {
  let newName = cat['Kevin'];
  return newName
  }

  // your code inside here
}

// Create a function that uses dot or bracket notation to create a property 
// on the cat object called "color" and assign it to any color you'd like. 
// Then return the value of the color property.

function colorTheCat() {
  let color = cat['orange'];
  return color

  // your code inside here
}

// Delete the whiskers property off of the cat object. You may use either dot or bracket notation.

function removeWhiskers(){
  delete cat.whiskers; 

}


// Write a function that uses dot AND bracket notation to access and return the 
// value of the fourth item in the likes array("pets"). 
// Example: objectName.property[indexNumber]

function returnIndex(cat) {
  return cat.likes[3]
  // your code inside here
}