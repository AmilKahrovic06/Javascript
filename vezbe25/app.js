console.log("jedan");
console.log("dva");
//callback koja se poziva kao argument neke druge funkcije

//promisa
//async/await
function kvadrat(n) {
  return n * n;
}

function pomnozi(callback) {
  return callback(5); //callstack moze da se zove kako god hoces
}

console.log(pomnozi(kvadrat));

//napraviti funkciju koja mnozi  dva broja

function nekiCall(callback) {
  return callback(3, 5);
}
function mnozi(a, b) {
  return a * b;
}
console.log(nekiCall(mnozi));
////////////////////////////
rezultat = nekiCall(mnozi);
console.log(rezultat);
/////////////////////////////////////////////////
//ispitati niz da li je paran ili ne
function saberi(a) {
  return a % 2 == 0 ? true : false;
}

function parni(arr, callback) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
niz = [1, 4, 7, 8];
console.log(parni(niz, saberi));
