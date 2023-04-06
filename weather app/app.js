const API_URL = `https://api.openweathermap.org/data/2.5/`;
const API_KEY = `dde669c54dbec53c562abad52d716702`;
const CITY_NAME = "Novi Pazar";
const inp = document.querySelector(".inp");
console.log(inp);
async function getData(city) {
  const data = await fetch(
    `${API_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );
  const response = await data.json();
  return response;
}

function prikaziGrad(data) {
  const grad = document.querySelector(".grad");

  let ime = document.createElement("h2");
  ime.innerText = data.name;

  let drzava = document.createElement("p");
  drzava.innerText = data.sys.country;

  let vreme = document.createElement("p");
  vreme.innerText = "Now: " + data.weather[0].main;

  let detaljnoVreme = document.createElement("p");
  detaljnoVreme.innerText = "More precisely: " + data.weather[0].description;

  let Temperature = document.createElement("p");
  Temperature.innerText = "Temperature: " + data.main.temp + "°C";

  let oseca_se_kao = document.createElement("p");
  oseca_se_kao.innerText = "Feels like: " + data.main.feels_like + "°C";
  weather = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;

  let vetar = document.createElement("p");
  vetar.innerText = "Wind: " + data.wind.speed + "m/s";
  let ikona = document.createElement("img");
  ikona.style.width = "100px";
  ikona.style.height = "100px";
  ikona.src = weather;

  grad.appendChild(ime);
  grad.appendChild(drzava);
  grad.appendChild(ikona);
  grad.appendChild(vreme);
  grad.appendChild(detaljnoVreme);
  grad.appendChild(Temperature);
  grad.appendChild(oseca_se_kao);
  grad.appendChild(vetar);
}

btn.addEventListener("click", () => {
  getData(inp.value).then((res) => {
    console.log(res);
    prikaziGrad(res);
  });
});
