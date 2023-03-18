let dugme = document.querySelectorAll(".btn");
console.log(dugme);
var i = 0;

function ispis(btn) {
  if (i % 2 == 0) {
    btn.innerText = "X";
  } else {
    btn.innerText = "O";
  }
  i++;
}
