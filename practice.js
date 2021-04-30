// PRACTICE METHODS

// const calculateAgeInDogYears = (ageOfPerson) => {
// const ageInDogYears = ageOfPerson / 7

// return ageInDogYears
// }

// BEST IN SHOW

// const favoriteDogBreed = (breed) => {
// if (breed === "schnauzer") {
//     console.log("My favorite dog breed is schnauzer")
//     return
// }
// if (breed === "meow") {
//     console.log("I like cats.")
//     return
// }

// else {
//     console.log(`${breed} is not my favorite.`)
//     return
// }

// }

// const myFavorite = favoriteDogBreed()

// console.log(`When it comes to pets: ${myFavorite}`)

// favoriteDogBreed("meow")

// ADDITION
// const add = (sum1, sum2, sum3) => {
//     return sum1 + sum2 + sum3
// }

// const sum = add(17, 4, 11)

// console.log(sum)

// SELF-DRIVING CARS
// const go = (direction, speed) => {
// if (speed > 75) {
//     console.log(`The car is moving ${direction} at ${speed}. SLOW DOWN!!`)
//     return
// }

//     console.log(`The car is moving ${direction} at ${speed}.`)
//     return
// }

// go("forward", 10)

// EVEN OR ODDS
// const evenOrOdd = (number) => {
//   if (number % 2 === 0) {
//     console.log("Even");
//     return;
//   } else {
//     console.log("Odd");
//     return;
//   }
// };

// evenOrOdd(5);

// DOUBLE FUNCTIONS
// const words = [
//   "The",
//   "killing",
//   "complex",
//   "houses",
//   "married",
//   "kittens",
//   "and",
//   "single",
//   "soldiers",
//   "and",
//   "their",
//   "kleptomaniacal",
//   "families",
// ];

// const filteredArray = words.filter(word => word.startsWith("k") === false) 

// const newArray = filteredArray.join(" ")

// console.log(newArray)

// YOU CAN TUNE A PIANO, BUT YOU CAN'T
// const svenFish = () => {
//     const coin = Math.random() * 2;
//     if(coin <= 1) {
// console.log("Sven hooked a tuna!  :)")
//     }
//     if (coin > 1) {
// console.log("Sven came up empty-handed.  :(")
//     }
// }

// svenFish()

// FAST FOOD
// const burgersAndBurgers = (sandwich, side, drink, dessert) => {
//     return `
//     sandwich: ${sandwich}
//     side: ${side}
//     drink: ${drink}
//     dessert: ${dessert} 
//     `
// }

// const burger = burgersAndBurgers("chicken", "french fries", "Dr. Pepper", "Ice Cream")
// console.log(burger)

// Same Chores, Different Days

const person = {
    firstName: "Jackie",
    lastName: "French"
}

const name = (person) => {
    `${person.firstName} ${person.lastName}`
}

const chores = (chore) => {`${chore}`}

const day = (day) => {`${day}`}


const dayPlanner = (input, plan) => {
    const dayz = plan(input)
    return dayz
}

