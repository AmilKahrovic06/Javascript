// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log("Hello, world!");

// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
// console.log(addTwo(3));
// console.log(addTwo(10));

//Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
// console.log(addS("pizza"));
// console.log(addS("bagel"));

function multiplyByTwo(num) {
  return num * 2;
}

// Challenge 3
function map(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i]));
  }
  return newArray;
}

// console.log(map([1, 2, 3], addTwo));
// console.log(map([1, 2, 3, 4, 5], multiplyByTwo));

// Challenge 4
function forEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
}

// see for yourself if your forEach works!

// Challenge 5
function mapWith(array, callback) {
  let newArray = [];
  forEach(array, (num) => newArray.push(calback(num)));
  return newArray;
}

// console.log(map([1, 2, 3], addTwo));
// console.log(map([1, 2, 3, 4, 5], multiplyByTwo));

// Challenge 6
function reduce(array, callback, initialValue) {
  if (typeof initialValue === "undefined") {
    initialValue = array[0];
    array.shift();
  }
  for (let i = 0; i < array.length; i++) {
    initialValue = callback(initialValue, array[i]);
  }
  return initialValue;
}

const nums = [4, 1, 3];
const add = function (a, b) {
  return a + b;
};
// console.log(reduce(nums, add, 0));
// console.log(reduce([16, 2, 1, 5], add, 3));

// Challenge 7
function checkSameValue(arr1, arr2) {
  const newArray = [];
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.includes(arr2[i])) {
      newArray.push(arr2[i]);
    }
  }
  return newArray;
}
function intersection(arrays) {
  return reduce(arrays, checkSameValue);
}

// console.log(
//   intersection([
//     [5, 1, 10, 15, 20],
//     [15, 88, 1, 5, 7],
//     [1, 10, 15, 5, 20],
//   ])
// );
// should log: [5, 15]

// console.log(intersection([[5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]]));
// should log: [5, 15]

function concatTwoArray(array1, array2) {
  let newArray = array1;
  for (let i = 0; i < array2.length; i++) {
    if (!array1.includes(array2[i])) {
      newArray.push(array2[i]);
    }
  }
  return newArray;
}
// Challenge 8
function union(arrays) {
  return reduce(arrays, concatTwoArray);
}

console.log(
  union([
    [5, 10, 15],
    [15, 88, 1, 5, 7],
    [100, 15, 10, 1, 5],
  ])
);
// should log: [5, 10, 15, 88, 1, 7, 100]

// Challenge 9
function objOfMatches(array1, array2, callback) {
  let obj = {};
  for (let i = 0; i < array1.length; i++) {
    if (callback(array1[i]) === array2[i]) {
      obj[array1[i]] = array2[i];
    }
  }
  return obj;
}

console.log(
  objOfMatches(
    ["hi", "howdy", "bye", "later", "hello"],
    ["HI", "Howdy", "BYE", "LATER", "hello"],
    function (str) {
      return str.toUpperCase();
    }
  )
);
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

// Challenge 10
function multiMap(arrVals, arrCallbacks) {
  let obj = {};
  let niz = [];
  for (let i = 0; i < arrVals.length; i++) {
    for (let j = 0; j < arrCallbacks.length; j++) {
      niz.push(arrCallbacks[j](arrVals[i]));
    }
    obj[arrVals[i]] = niz;
    niz = [];
  }
  return obj;
}
console.log(
  multiMap(
    ["catfood", "glue", "beer"],
    [
      function (str) {
        return str.toUpperCase();
      },
      function (str) {
        return str[0].toUpperCase() + str.slice(1).toLowerCase();
      },
      function (str) {
        return str + str;
      },
    ]
  )
);
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// Challenge 11
function objectFilter(obj, callback) {
  let newObj = {};

  for (let el in obj) {
    if (obj[el] === callback(obj[el])) {
      newObj[el] = obj[el];
    }
  }
  return newObj;
}
