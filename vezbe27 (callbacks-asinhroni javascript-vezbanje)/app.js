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

// const cities = {
// London: 'LONDON',
// LA: 'Los Angeles',
// Paris: 'PARIS',
// };
// console.log(objectFilter(cities, city => city.toUpperCase())) // Should log { London: 'LONDON', Paris: 'PARIS'}

// Challenge 12
function majority(array, callback) {}

// /*** Uncomment these to check your work! ***/
// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false

// Challenge 13
function prioritize(array, callback) {
  let niz1 = [];
  let niz2 = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      niz1.push(array[i]);
    } else {
      niz2.push(array[i]);
    }
  }
  return niz1.concat(niz2);
}

// /*** Uncomment these to check your work! ***/
const startsWithS = function (str) {
  return str[0] === "s" || str[0] === "S";
};
console.log(
  prioritize(
    ["curb", "rickandmorty", "seinfeld", "sunny", "friends"],
    startsWithS
  )
); // should log:
//['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

// Challenge 14
function countBy(array, callback) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let kljuc = callback(array[i]);
    if (obj[kljuc]) {
      obj[kljuc] += 1;
    } else {
      obj[kljuc] = 1;
    }
  }
  return obj;
}

// /*** Uncomment these to check your work! ***/
console.log(
  countBy([1, 2, 3, 4, 5], function (num) {
    if (num % 2 === 0) return "even";
    else return "odd";
  })
); // should log: { odd: 3, even: 2 }

// Challenge 15
function groupBy(array, callback) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    let kljuc = callback(array[i]);
    if (obj[kljuc]) {
      obj[kljuc].push(array[i]);
    } else {
      obj[kljuc] = [array[i]];
    }
  }
  return obj;
}

// /*** Uncomment these to check your work! ***/
const decimals = [1.3, 2.1, 2.4, 2.5, 2.6, 2.9];
const floored = function (num) {
  return Math.floor(num);
};
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// Challenge 16
function goodKeys(obj, callback) {
  let niz1 = [];
  for (let el in obj) {
    if (callback(obj[el])) {
      niz1.push(el);
    }
  }
  return niz1;
}

// /*** Uncomment these to check your work! ***/
const sunny = {
  mac: "priest",
  dennis: "calculating",
  charlie: "birdlaw",
  dee: "bird",
  frank: "warthog",
};
const startsWithBird = function (str) {
  return str.slice(0, 4).toLowerCase() === "bird";
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']

// Challenge 17
function commutative(func1, func2, value) {
  let a = func1(value);
  let b = func2(a);
  let c = func2(value);
  let d = func1(value);

  return a == d;
}

// /*** Uncomment these to check your work! ***/
const multBy3 = (n) => n * 3;
const divBy4 = (n) => n / 4;
const subtract5 = (n) => n - 5;
console.log(commutative(multBy3, divBy4, 11)); // should log: true
console.log(commutative(multBy3, subtract5, 10)); // should log: false
console.log(commutative(divBy4, subtract5, 48)); // should log: false
