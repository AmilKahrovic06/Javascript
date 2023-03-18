// let unos = document.querySelector(".inp");

let glavni = document.querySelector(".zadaci");

function Dodaj() {
  let div = document.createElement("div");
  div.className = "item";
  glavni.appendChild(div);

  // let check = document.createElement("input");
  // check.type = "checkbox";
  // glavni.appendChild(check);
}
const btn = document.querySelector("button");
const unos = document.querySelector("input");
const zadaci = document.querySelector(".zadaci");

btn.addEventListener("click", () => {
  if (unos.value === "") {
    alert("Unesite nesto u input");
  } else {
    Dodaj();
    let novielement = document.createElement("h3");
    novielement.innerText = unos.value;
    zadaci.appendChild(novielement);
    let check = document.createElement("input");
    check.type = "checkbox";
    zadaci.appendChild(check);
    check.style.marginLeft = "50%";
    check.style.marginTop = "-6.5%";
    unos.value = "";

    console.log(check.checked);
    if (check.checked) {
      novielement.style.color = "green";
    }

    check.addEventListener("change", function () {
      let check = document.querySelector(".zadaci input[type=checkbox]");
      if (check.checked) {
        novielement.style.textDecoration = "line-through";
      } else {
        novielement.style.textDecoration = "none";
      }
    });
  }
});

//domaci /teskt koji se dodaje na klik
