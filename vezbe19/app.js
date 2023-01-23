//There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

function busRiders(stops) {
  let riders = 0;
  for (let i = 0; i < stops.length; i++) {
    riders += stops[i][0] - stops[i][1];
  }
  return riders;
}

console.log(
  "Zao nam je,",
  busRiders([
    [10, 0],
    [3, 5],
    [5, 8],
    [10, 2],
    [3, 2],
    [2, 1],
    [1, 0],
    [10, 5],
    [0, 0],
  ]),
  "vas mora izaci ;-("
);
// Return a function that will trim a string (the first argument given) if it is longer than the maximum string length (the second argument given). The result should also end with "..."

// These dots at the end also add to the string length.

// So in the above example, trim("Creating kata is fun", 14) should return "Creating ka..."

// If the string is smaller than or equal to 3 characters then the length of the dots is not added to the string length.

// e.g. trim("He", 1) should return "H..."

// If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

// e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"
function trim(str, maxLength) {
  if (str.length <= maxLength) return str;
  if (maxLength <= 3) return str.slice(0, maxLength) + "...";
  return str.slice(0, maxLength - 3) + "...";
}
console.log(trim("Kreiranje kata je zabavno", 14)); // Output: "Kreiranje ka..."
console.log(trim("On", 1)); // Output: "H..."
console.log(trim("Code Vars je prilično rad", 50)); // Output: "Code Vars je prilično rad"
console.log(trim("", 10)); // Output: ""
