// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]


// b) Create the function that makes the test pass.



// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.


//PSEUDOCODE:
// In order to create the fucntion that takes a object as an argument and decides if the number inside it is evenly divisible by three or not I will start by identifying the info that will go in the function. 
// I recognize that the function will accept an object, and use comparison operators to decide if the value of said object is divisible by three.
// I will declare a function called divisibleByThree which will accept an object as a parameter.
// Next I'll make an empty variable which I'll call testVariable which will hold the array containing the value of the key-value pair using the command Object.value().
// Afterwards I'll establish a comparison operator to figure out if the value of the resulting array is divisible by three.
// If the value of the array is divisible by three it will return `${testVariable} is divisible by three`, if it is not divisible by three it will return `${testVariable} is not divisible by three`, and I'll also include a catch all error message as well.


// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"



describe("divisibleByThree", () => {
    it("returns whether the number is divisible by three.", () => {
      expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
      expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
      expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
  })

// *Test Suites: 1 failed, 1 total.
// Error message: ReferenceError: divisiblebyThree is not defined. 
// This is considered "good fail".

// b) Create the function that makes the test pass.

const divisibleByThree = (object) => {
  if (object.number % 3 === 0) {
    return `${object.number} is divisible by three`
  } else if (object.number % 3 !== 0) {
    return `${object.number} is not divisible by three`
  } else {
    return "DoEs NoT CoMpUtE!11!!11."
  }
}

//*Test Suites: 1 passed, 1 total
// The test passed, all systems go :)

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.


//PSEUDOCODE:
// In order to create the fucntion that takes in an array of words and returns an array with all the words capitalized I will first identify the info which will go in the function.
// I recognize that the function will accept and array, iterate through said array, and then return all the strings with the first letter in caps.
// I will declare a function called capitalizedArray that will accept an array, then I will use the .slice() method to remove the the first letter of the element thats presently iterated.
// Lastly, I'll add the end of the string to the uppercase letter.

// a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp","potato", "teeth", "conclusion", "nephew",];
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
const randomNouns3 = ["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO"];
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalizedArray", () => {
    const randomNouns1 = ["streetlamp","potato","teeth","conclusion","nephew"]
    const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
    const randomNouns3 = ["TEMPERATURE", "DATABASE", "CHOPSTICKS", "MANGO"]
    it(`Takes in an array of words and returns an array with all words capitalized.`, () => {
      expect(capitalizedArray(randomNouns1)).toEqual(["Streetlamp","Potato","Teeth","Conclusion","Nephew"])
      expect(capitalizedArray(randomNouns2)).toEqual(["Temperature","Database","Chopsticks","Mango"])
      expect(capitalizedArray(randomNouns3)).toEqual(["Temperature","Database", "Chopsticks", "Mango"])
    })
  })
  
// *Test Suites: 1 failed, 1 total.
// Error message: ReferenceError: capitializedArray is not defined. 
// This is considered "good fail".
  
// b) Create the function that makes the test pass.
  

  const capitalizedArray = (array) => {
    return array.map((value) => {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    })
  }

//*Test Suites: 1 passed, 1 total
// The test passed, all systems go :)
  
  
  
// --------------------3) Create a function that takes in a string and logs the index of the first vowel.
  
// a) Create a test with expect statements for each of the variables provided.
  
  describe("firstVowel", () => {
    it(`Takes in a string and logs the index of the first vowel.`, () => {
      const vowelTester1 = "learn"
      // Expected output: 1
      const vowelTester2 = "academy"
      // Expected output: 0
      const vowelTester3 = "challenges"
      // Expected output: 2
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)
      expect(firstVowel("glyph")).toEqual("glyph does not contain a vowel.")
    })
  })
  
// *Test Suites: 1 failed, 1 total.
// Error message: ReferenceError: firstVowel is not defined. 
// This is considered "good fail".


  
// b) Create the function that makes the test pass.
  
//PSEUDOCODE:
// In order to create the fucntion that takes in a string and logs the index of the first vowel I will first identify the infomation that will go in the function.
// I recognize that the function will take in a string and return the indexof the first vowel.
// I will declare a function called firstVowel that will accept the string as a parameter.
// Next, I'll ultilize a for loop to iterate through said string in order to check the value of each index.
// Afterwards, I'll utilize a conditional statement to decide if the index contains vowels, and thrn return the index of the first vowel.

  const firstVowel = (string) => {
    for (let i = 0; i < string.length; i++) {
      if (
        string[i] === "a" ||
        string[i] === "e" ||
        string[i] === "i" ||
        string[i] === "o" ||
        string[i] === "u"
      ) {
        return i
      }
    }
    return `${string} does not contain a vowel.`
  }
  
//*Test Suites: 1 passed, 1 total
// The test passed, all systems go :)

