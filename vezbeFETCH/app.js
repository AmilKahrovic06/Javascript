let glavni = document.querySelector(".container");

async function getAllUser() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");
  let response = data.json();
  return response;
}
let podaciKorisnika;

getAllUser().then((d) => {
  podaciKorisnika = d;
  podaciKorisnika.forEach((element) => {
    createCard(element.name, element.email, element.id);
  });
  console.log(podaciKorisnika);
});

function createCard(name, email, id) {
  let card = document.createElement("div");
  card.className = "card";

  let ime = document.createElement("P");
  ime.innerText = "ime:" + name;

  let mail = document.createElement("P");
  mail.innerText = "email:" + email;

  card.addEventListener("click", () => {
    window.location.href = `index1.html?id=${id}`;
  });
  card.appendChild(ime);
  card.appendChild(mail);
  glavni.appendChild(card);
}
