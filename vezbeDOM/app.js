// let naslov = document.getElementById("naslov");
// console.log(naslov.innerText);

// let naslovClass = document.getElementsByClassName("nas");
// console.log(naslovClass);

// let naslovByTag = document.getElementsByTagName("h1");
// console.log(naslovByTag);

// let naslovByQuery = document.querySelector(".nas");
// console.log(naslovByQuery);

// let naslovByQueryAll = document.querySelectorAll(".nas");
// console.log(naslovByQueryAll);

// naslov.style.color = "red";
// naslov.innerText = "Promena";
// naslov.style.fontSize = "4 rem";

// let lista = document.getElementsByClassName("lista");
// for (let i = 0; i < lista.length; i++) {
//   lista[i].style.color = "green";
//   lista[i].fontSize = "6rem";
// }

// let dugme = document.querySelector("button");
// dugme.addEventListener("mouseover", () => {
//   naslov.style.color = "purple";
//   naslov.style.fontSize = "6rem";
// });
// dugme.addEventListener("mouseout", () => {
//   naslov.style.color = "yellow";
//   naslov.style.fontSize = "5rem";
// });
// let item1 = document.querySelector(".lis");
// item1.innerText = "item3";
// item1.style.color = "green";
// item1.style.fontSize = "4rem";
let incr = document.querySelector(".increment");
let decr = document.querySelector(".decerement");
let broj = document.querySelector(".brojac");
let brojac = 0;
broj.innerText = brojac;

incr.addEventListener("click", () => {
  brojac++;
  broj.innerText = brojac;
});
function decrement() {
  brojac--;
  broj.innerText = brojac;
}

localStorage.setItem("name", "nekoIme");
let ime = localStorage.getItem("name");
console.log(ime);

localStorage.removeItem("name");
console.log(ime);
sessionStorage.setItem;
let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");
let card = document.querySelector(".card");
btn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("Unesite nesto u input");
  } else {
    let h = document.createElement("h1");
    h.innerText = inp.value;
    card.appendChild(h);
    inp.value = "";
  }
});

//DOMACI-TO DO LISTA!!!
