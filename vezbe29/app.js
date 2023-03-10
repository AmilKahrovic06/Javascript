// // (function (a) {
// //   console.log(1);
// //   setTimeout(function () {
// //     console.log(2);
// //   }, 1000);
// //   setTimeout(function () {
// //     console.log(3);
// //   }, 0);
// //   console.log(4);
// // })();
// // //GET
// // //POST
// // //PUT
// // //DELETE

// // // JSON.stringify;-metoda
// // // JSON.parse;-metoda

// // let str = JSON.stringify(nesto);
// // console.log(str);
// // console.log(typeof str);

// // // const json="{""""""objekat
// // const obj = (str = JSON.parse(json));
// // console.log(objekt);

// // //PROMISI

// // // .try,.catch

// // let p = new Promise((resolve, reject) => {
// //   let a = 2;
// //   if (a == 2) {
// //     resolve("Succes");
// //   } else {
// //     reject("Failed");
// //   }
// // });
// // p.then((message) => {
// //   console.log("This is in then" + message);
// // }).catch((messsage) => {
// //   console.log("This is in catch" + message);
// // });

// //////////////////////////////////////////////////////////////////////////////////////////7
// let godine = 15;
// let pro = new Promise((resolve, reject) => {
//   if (godine >= 18) {
//     resolve("Osoba je punoletna");
//   } else {
//     reject("Osoba nije punoletna");
//   }
// });
// pro
//   .then((message) => {
//     console.log("Status:" + message);
//   })
//   .catch((message) => {
//     console.log("KUKU MAJKO:" + message);
//   });

// function wait() {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve("Proslo je 2 sekunde");
//     }, 2000);
//   });
// }

// wait().then((broj) => {
//   console.log("Koliko je proslo?", broj);
// });

// function izPozitivan(br) {
//   return new Promise((resolve, reject) => {
//     if (br > 0) {
//       resolve(`Broj je pozitivan ${br}`); //bolje
//     } else {
//       reject("Broj nije pozitivan");
//     }
//   });
// }

// izPozitivan(5).then((broj) => {
//   console.log(broj);
// });

// async function mojaF() {
//   return "Hello";
// }

// mojaF().then((val) => {
//   console.log(val);
// });
// function ispis() {
//   console.log("Helloe");
// }
// ispis();
// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// async function myDisplay() {
//   let myPromise = new Promise((resolve, reject) => {
//     resolve("Ispisi nesto");
//   });
//   await myPromise.then((v) => {
//     console.log(v);
//   });
// }

// myDisplay();
// const fetch = require("node-fetch");
// //FETCH GET

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//FETCH POST

// post sluzi da dodamo neke podatke na serveru

const data = {
  title: "Nova obaveza",
  completed: false,
};
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// FETCH PUT

const dataPUT = {
  id: 1,
  title: "izmenjena obaveza",
  completed: true,
};
fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "PUT",
  body: JSON.stringify(dataPUT),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch("https://run.mocky.io/v3/e8d794ad-aee6-4df4-91bb-d35954225d21")
  .then((odgovor) => odgovor.json())
  .then((pod) => console.log(pod));

//FETCH DELETE

fetch("https://jsonplaceholder.typicode.com/todos/1", {
  method: "DELETE",
}).then((response) => console.log("Odgovor sa statusom", response.status));
