async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function createCountryElement(country) {
  const element = document.createElement("div");
  element.className = "country";

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = `Flag of ${country.name.common}`;
  flag.className = "flag";

  const name = document.createElement("span");
  name.innerText = country.name.common;
  name.className = "name";

  element.appendChild(flag);
  element.appendChild(name);

  element.addEventListener("click", () => {
    showCountryDetails(country);
  });

  return element;
}

async function showCountryDetails(country) {
  const details = document.getElementById("country-details");
  details.innerHTML = "";

  const name = document.createElement("h2");
  name.innerText = country.name.common;

  const capital = document.createElement("p");
  capital.innerHTML = `<b>Capital:</b> ${country.capital[0]}`;

  const region = document.createElement("p");
  region.innerHTML = `<b>Region:</b> ${country.region}`;

  const subregion = document.createElement("p");
  subregion.innerHTML = `<b>Subregion:</b> ${country.subregion}`;

  const population = document.createElement("p");
  population.innerHTML = `<b>Population:</b> ${country.population}`;

  const currencies = document.createElement("p");
  currencies.innerHTML = `<b>Currencies:</b> ${Object.values(country.currencies)
    .map((currency) => currency.name)
    .join(", ")}`;

  const languages = document.createElement("p");
  languages.innerHTML = `<b>Languages:</b> ${Object.values(country.languages)
    .map((language) => language.name)
    .join(", ")}`;

  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = `Flag of ${country.name.common}`;
  flag.className = "flag-big";

  details.appendChild(name);
  details.appendChild(capital);
  details.appendChild(region);
  details.appendChild(subregion);
  details.appendChild(population);
  details.appendChild(currencies);
  details.appendChild(languages);
  details.appendChild(flag);
}

async function renderCountries() {
  const countries = await getCountries();
  const countriesContainer = document.getElementById("countries");

  countries.forEach((country) => {
    const countryElement = createCountryElement(country);
    countriesContainer.appendChild(countryElement);
  });
}

renderCountries();
