// console.log("hello world!")

//DATA TYPES

//Primitive (Value) Types
  //STRINGS
  //DEFAULT TO SINGLE QUOTES FOR STRINGS UNLESS YOU REALLY WANT AN APOSTROPHE IN YOUR STRING
  let fullName = 'Gwen Stohler'

  //JOINING STRINGS
  let firstName = "Gwen"
  let lastName = "Stohler"
  
    //Concatentation
    let fullName = firstName + ' '+ lastName
    //interpolation (template literal)--MUST USE BACKTICK
    let fullName = ${firstName} ${lastName} ${1+1}
  //NUMBERS
    let myNum = 1
    // Increment and decrement
    //myNum++
    //myNum--
    // Assignment with =

    //BONUS
    // Math.()
  //BOOLEAN
    let myBool = true
    // ! operator flips the bool
    //General Equality uses 2 equal signs

  //NULL (undefined) for removing the value of a variable or starting it without a value
    let myVar = "some thing"
    myVar = undefined
    myVar = null
  //var (hoisted)

 // var x = 1;
  //console.log(x);

  //let (unhoisted)
console.log(x);
  let x = 1;

  //const (unhoisted)

  const x = 1;
  console.log(x);
  x = 4;
  //Non-Primitives
    //Array(Collection of like items)
    let nums = [1,2,3,4]
    //0 based index, each element can be grabbed by the index starting with 0

    //when accessing a value from an array, provide the address in full from variable name 'at' [] index
    //Arry.length = the number of elements in an array
    //You can get the last element in an array with Array[array.length - 1]
    //DO NOT MIX ELEMENTS
      //nums[nums.length-1]

    //BONUS (.map(), .filter(), .find(), .indexOf(), .forEach(), .join(), .sort())


    //OBJECTS
      //Objects are made of keys and values
      // EVERYTHING IS AN OBJECT
      let car= {
          color: 'red',
          brand: 'honda',
          year: 1989,
          seats: ["driver seat", "passenger seat", "back seat"]
          tires: {
            fr: {
            brand: 'goodyear',
            fr: 'flat',
            airPressure: 40
            }
          }
      }
      //Accessing Objects
        //Dot Notation

        //Bracket Notation
          // when accessing an object using another variable
          let myVar = 'year'


    //NaN
      //only comes up if math fails
      