async function getCountries() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function getCountryDetails(name) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function displayCountries() {
  const countries = await getCountries();
  const countriesContainer = document.getElementById("countries");
  countries.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.className = "country-card";

    const imgFlag = document.createElement("img");
    imgFlag.className = "flag";
    imgFlag.src = country.flags.png;

    countryCard.appendChild(imgFlag);

    const countryName = document.createElement("div");
    countryName.className = "country-name";
    countryName.textContent = country.name.common;
    countryCard.appendChild(countryName);

    countryCard.addEventListener("click", () => {
      window.location.href = `index1.html?name=${country.name.common}`;
    });
    countriesContainer.appendChild(countryCard);
  });
}

displayCountries();
