let Nasumicni_broj = Math.floor(Math.random() * 5 + 1);

let unos = document.querySelector("input");

function guessthenumber() {
  if (unos.value == Nasumicni_broj) {
    alert("Tacno! Vas broj se poklapa sa nasim!");
  } else {
    alert("Pokusaj opet");
  }
}
