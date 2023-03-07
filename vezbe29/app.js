// (function (a) {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();
// //GET
// //POST
// //PUT
// //DELETE

// // JSON.stringify;-metoda
// // JSON.parse;-metoda

// let str = JSON.stringify(nesto);
// console.log(str);
// console.log(typeof str);

// // const json="{""""""objekat
// const obj = (str = JSON.parse(json));
// console.log(objekt);

// //PROMISI

// // .try,.catch

// let p = new Promise((resolve, reject) => {
//   let a = 2;
//   if (a == 2) {
//     resolve("Succes");
//   } else {
//     reject("Failed");
//   }
// });
// p.then((message) => {
//   console.log("This is in then" + message);
// }).catch((messsage) => {
//   console.log("This is in catch" + message);
// });

//////////////////////////////////////////////////////////////////////////////////////////7
let godine = 15;
let pro = new Promise((resolve, reject) => {
  if (godine >= 18) {
    resolve("Osoba je punoletna");
  } else {
    reject("Osoba nije punoletna");
  }
});
pro
  .then((message) => {
    console.log("Status:" + message);
  })
  .catch((message) => {
    console.log("KUKU MAJKO:" + message);
  });

function wait() {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("Proslo je 2 sekunde");
    }, 2000);
  });
}

wait().then((broj) => {
  console.log("Koliko je proslo?", broj);
});

function izPozitivan(br) {
  return new Promise((resolve, reject) => {
    if (br > 0) {
      resolve(`Broj je pozitivan ${br}`); //bolje
    } else {
      reject("Broj nije pozitivan");
    }
  });
}

izPozitivan(5).then((broj) => {
  console.log(broj);
});
