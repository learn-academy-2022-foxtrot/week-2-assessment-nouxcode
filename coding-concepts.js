// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Foxtrot 2022"
// console.log(cohort.split(""))

// a) Your answer: I think that this will log the output ['F', 'o', 'x', 't', 'r', 'o', 't', ' ', '2', '0', '2', '2']

// b) Verify and explain: My answer was correct because the .split() method was utilized and thst splits strings into arrays.

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: I think that this will log the output Hello, LEARN Student!

// b) Verify and explain: My answer was correct because the string used string interperlation as it was passed within the function.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: I think that this will log the output [ 8, 10, 12, 14, 16 ].

// b) Verify and explain: My answer was correct because the the .map() method as utilized which has implicit return for this operation and other similar operations that are easy to compute.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: I think that this will log the output [ 11, 13, 15 ].

// b) Verify and explain: My answer was correct because the .filter() method created a new array which returned specific elelements from the original array based on the condition of them being odd numbers.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: I think that this will log the output "JavaScript".

// b) Verify and explain: My answer was correct because dot and bracket notation are being utilized to access the info stored inside of the object, the array index which is stored as the key-value pair.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)

// a) Your answer: I think that this will log the output { student: 'George', cohort: 'Foxtrot', year: 2022 }

// b) Verify and explain: My answer was correct because a new object was logged when a new instance of the class was created and saved to the variable learnStudent. "George" was passed into the argument and took the form of theparamter for 'name'. Ultimately all key value pairs correlated with that class become assigned as well.
