const BASE_API = `https://api.github.com/users/`;

const btn = document.querySelector(".btn");
const search = document.querySelector("#search");
const main = document.querySelector(".main");

async function getData(username) {
  const data = await fetch(BASE_API + username);
  const response = await data.json();
  return response;
}

async function getRepositories(username) {
  const data = await fetch(`${BASE_API}${username}/repos`);
  const response = await data.json();
  return response;
}

async function showCard(data) {
  console.log(data);

  const slika = document.createElement("img");
  slika.style.width = "200px";
  slika.style.height = "200px";
  slika.src = data.avatar_url;

  const name = document.createElement("p");
  name.innerHTML = data.name;
  name.className = "name";

  const bio = document.createElement("p");
  bio.innerHTML = data.bio;
  bio.className = "bio";

  const username = document.createElement("p");
  username.innerHTML = data.login;
  username.className = "username";

  const followers = document.createElement("p");
  followers.innerHTML = "Followers: " + data.followers;
  followers.className = "followers";

  const following = document.createElement("p");
  following.innerHTML = "Following: " + data.following;
  following.className = "following";

  const public_repos = document.createElement("p");
  public_repos.innerHTML = "Public repositories: " + data.public_repos;
  public_repos.className = "public_repos";

  console.log("jej");
  main.appendChild(slika);
  main.appendChild(username);
  main.appendChild(name);
  main.appendChild(bio);
  main.appendChild(public_repos);
  main.appendChild(followers);
  main.appendChild(following);

  const repositories = await getRepositories(data.login);
  const repoNames = repositories.map((repo) => repo.name);
  const repoList = document.createElement("ul");
  repoNames.forEach((name) => {
    const repoItem = document.createElement("li");
    repoItem.innerText = name;
    repoList.appendChild(repoItem);
  });
  main.appendChild(repoList);
}

btn.addEventListener(`click`, () => {
  const user = search.value;
  getData(user).then((data) => {
    showCard(data);
  });
  main.innerText = "";
});
