async function getCountryDetails(name) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    const [data] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayCountryDetails() {
  const searchParams = new URLSearchParams(window.location.search);
  const name = searchParams.get("name");

  const country = await getCountryDetails(name);

  const countryName = document.createElement("h2");
  countryName.textContent = country.name.common;

  const capital = document.createElement("p");
  capital.textContent = `Capital: ${country.capital}`;

  const population = document.createElement("p");
  population.textContent = `Population: ${country.population}`;

  const imgFlag = document.createElement("img");
  imgFlag.src = country.flags.png;

  const currencies = document.createElement("p");
  currencies.textContent = `Currencies: ${Object.values(country.currencies)
    .map((c) => c.name)
    .join(", ")}`;

  const languages = document.createElement("p");
  languages.textContent = `Languages: ${Object.values(country.languages).join(
    ", "
  )}`;

  const region = document.createElement("p");
  region.textContent = `Region: ${country.region}`;

  const subregion = document.createElement("p");
  subregion.textContent = `Subregion: ${country.subregion}`;
  const container = document.getElementById("country-details");

  container.appendChild(countryName);
  container.appendChild(capital);
  container.appendChild(population);
  container.appendChild(currencies);
  container.appendChild(languages);
  container.appendChild(region);
  container.appendChild(subregion);
  container.appendChild(imgFlag);
}

displayCountryDetails();
