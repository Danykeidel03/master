/**
 * SCRIPT PARA LA NAVEGACION Y EL TIEMPO
 */

import * as createNewElement from "../dom/createElement.js";
const divCustom = document.querySelector('.divCustom')

export function coordsUser() {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const city = data.address.province;
        knowClimate(city);
      });
  });
}

async function knowClimate(city) {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent("https://www.el-tiempo.net/api/json/v2/provincias")}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const result = JSON.parse(data.contents);
    const valueProv = result.provincias.filter((prov) => prov.NOMBRE_PROVINCIA === city);
    getClimateProv(valueProv[0].CODPROV, city);
  } catch (error) {
    console.error(error);
  }
}

async function getClimateProv(codProv, city) {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://www.el-tiempo.net/api/json/v2/provincias/${codProv}`)}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const result = JSON.parse(data.contents);
    const cities = result.ciudades.filter(c => c.name === city);
    console.log(cities[0]);
    const max = cities[0].temperatures.max;
    const min = cities[0].temperatures.min;
    const description = cities[0].stateSky.description;
    console.log(max,min,description);
    const divContainerClimate = createNewElement.createNewElement('div', 'climate', '')
    const divContainerClimateMax = createNewElement.createNewElement('div', 'climateMax', `${max} °C`)
    const divContainerClimateMin = createNewElement.createNewElement('div', 'climateMin', `${min} °C`)
    const divContainerClimateDescription = createNewElement.createNewElement('div', 'climateDescription', `${city}: ${description}`)
    divContainerClimate.appendChild(divContainerClimateMax);
    divContainerClimate.appendChild(divContainerClimateMin);
    divContainerClimate.appendChild(divContainerClimateDescription);
    divCustom.appendChild(divContainerClimate);
  } catch (error) {
    console.error(error);
  }
}
