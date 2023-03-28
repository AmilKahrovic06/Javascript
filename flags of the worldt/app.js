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
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
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
    imgFlag.alt = `${country.name.common} flag`;
    countryCard.appendChild(imgFlag);

    const countryName = document.createElement("div");
    countryName.className = "country-name";
    countryName.textContent = country.name.common;
    countryCard.appendChild(countryName);

    countryCard.addEventListener("click", async () => {
      const countryDetails = await getCountryDetails(country.name.common);
      const detailsWindow = window.open("", "_blank");
      detailsWindow.document.write(`
            <h1>${countryDetails[0].name.common}</h1>
            <img src="${countryDetails[0].flags.png}" alt="${
        countryDetails[0].name.common
      } flag">
            <p>Glavni grad: ${countryDetails[0].capital}</p>
            <p>Populacija: ${countryDetails[0].population}</p>
            <p>Region: ${countryDetails[0].region}</p>
            <p>Subregion: ${countryDetails[0].subregion}</p>
            <p>Jezici: ${Object.values(countryDetails[0].languages).join(
              ", "
            )}</p>
           
          `);
    });

    countriesContainer.appendChild(countryCard);
  });
}

displayCountries();
