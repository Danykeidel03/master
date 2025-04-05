/**
 * SCRIPT PARA LA NAVEGACION Y EL TIEMPO
 */

export function coordsUser() {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
    )
      .then((res) => res.json())
      .then((data) => {
        const city = data.address.city;
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
    const max = cities[0].temperatures.max;
    const min = cities[0].temperatures.min;
    const description = cities[0].stateSky.description;
    console.log(max,min,description);
  } catch (error) {
    console.error(error);
  }
}
