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
        knowClimate(lat,lon, city);
      });
  });
}
async function knowClimate(lat, lon, city) {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://wttr.in/${lat},${lon}?format=3`)}`;
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const content = data.contents.split(':')
    const divContainerClimate = createNewElement.createNewElement('div', 'climate', '')
    const divContainerClimateCelsius = createNewElement.createNewElement('div', 'climateMax', `${content[1]}`)
    const divContainerClimateDescription = createNewElement.createNewElement('div', 'climateDescription', `${city}: `)
    divContainerClimate.appendChild(divContainerClimateCelsius);
    divContainerClimate.appendChild(divContainerClimateDescription);
    divCustom.appendChild(divContainerClimate);
  } catch (error) {
    console.error(error);
  }
}