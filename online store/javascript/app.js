
const productsListElement = document.getElementById("productsList");
const categoriesListElement = document.getElementById("categoriesList");
const productDetailsElement = document.getElementById("productDetails");
const addProductFormElement = document.getElementById("addProductForm");
const loginBtnElement = document.getElementById("loginBtn");
const logoutBtnElement = document.getElementById("logoutBtn");

let user = null;

loginBtnElement.addEventListener("click", handleLogin);
logoutBtnElement.addEventListener("click", handleLogout);

function fetchProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => {
      productsListElement.innerHTML = "";
      products.forEach((product) => {
        const productCardElement = document.createElement("div");
        const productimg = document.createElement("img");
        productimg.src = product.image;
        productimg.alt = product.name;
        productCardElement.appendChild(productimg);

        const productName = document.createElement("h3");
        productName.innerHTML = product.title;
        productCardElement.appendChild(productName);

        const productPrice = document.createElement("p");
        productPrice.className="price";
        productPrice.innerHTML = "$" + product.price;
        productCardElement.appendChild(productPrice);



        const Details = document.createElement("button");
        Details.className="details";
        Details.innerHTML = "Details";
        Details.addEventListener("click", () => {
          window.location.href = `index1.html?id=${product.id}`;
        });
        productCardElement.appendChild(Details);

        productsListElement.appendChild(productCardElement);
      });
    })
    .catch((error) => console.error("Error fetching products:", error));
}

function saveUser(user) {
  sessionStorage.setItem("user", JSON.stringify(user));
}

function handleLogin() {
  var username;
  if (sessionStorage.getItem("user")) {
    user = JSON.parse(sessionStorage.getItem("user"));
    loginBtnElement.style.display = "none";
    logoutBtnElement.style.display = "inline-block";
    fetchProducts();
    return;
  }

  username = prompt("Enter username:");

  saveUser(username);
  if (username) {
    user = username;
    loginBtnElement.style.display = "none";
    logoutBtnElement.style.display = "inline-block";
    fetchProducts();
  }
}


function handleLogout() {
  sessionStorage.removeItem("user");
  loginBtnElement.style.display = "inline-block";
  logoutBtnElement.style.display = "none";
  productListElement.innerHTML = "";
}


if (user) {
  fetchProducts();
}