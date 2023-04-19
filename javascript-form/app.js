const inp1 = document.querySelector(".input1");
const inp2 = document.querySelector(".input2");
const btn = document.querySelector("#btn");

btn.onclick = () => {
  const firstPassword = inp1.value;
  const secondPassword = inp2.value;
  if (firstPassword !== secondPassword) {
    alert("Passwords do not match!");
    inp2.value = "";
  } else {
    alert("Password is correct!");
  }
};
