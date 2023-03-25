const categoriesDiv = document.getElementById("categories");
const jokeDiv = document.getElementById("joke");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function getCategories() {
  fetch("https://api.chucknorris.io/jokes/categories")
    .then((response) => response.json())
    .then((categories) => {
      categories.forEach((category) => {
        const categoryDiv = document.createElement("divCat");
        categoryDiv.classList.add("category");
        categoryDiv.textContent = category;
        categoryDiv.addEventListener("click", () => {
          getRandomJoke(category);
        });
        categoriesDiv.appendChild(categoryDiv);
      });
    });
}

function getRandomJoke(category) {
  jokeDiv.textContent = "Ucitavanje...";
  const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
  fetch(url)
    .then((response) => response.json())
    .then((joke) => {
      jokeDiv.textContent = joke.value;
    });
}

function searchForJoke(query) {
  if (searchInput.value == "" || searchInput.value == " ") {
    jokeDiv.textContent = "Morate nesto uneti...";
  } else {
    jokeDiv.textContent = "Ucitavanje...";
    const url = `https://api.chucknorris.io/jokes/search?query=${query}`;
    fetch(url)
      .then((response) => response.json())
      .then((results) => {
        if (results.total === 0) {
          jokeDiv.textContent = "Nema nista pronadjeno.";
        } else {
          const index = Math.floor(Math.random() * results.total);
          jokeDiv.textContent = results.result[index].value;
        }
      });
  }
}

getCategories();

searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  searchForJoke(query);
});
