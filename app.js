const city = document.querySelector(".city");
const currentTemp = document.querySelector("#temp");
const tempImg = document.querySelector(".temperature #img");
const date = document.querySelector(".date span");
const humidity = document.querySelector(".para-1 p span");
const visiblity = document.querySelector(".para-2 p span");
const airPressure = document.querySelector(".para-3 p span");
const wind = document.querySelector(".para-4 p span");
const cityInput = document.querySelector("#cityInput");
const findBtn = document.querySelector(".findBtn");
const weatherCard = document.querySelector(".weather-Card");

async function changeParameters() {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=bf46b793c4064945b8c100432231711&q=${cityInput.value}&aqi=no`
  );
  const data = await response.json();

  try {
    city.textContent = data.location.name;
    currentTemp.textContent = data.current.temp_c;
    tempImg.src = data.current.condition.icon;
    date.textContent = data.current.last_updated;
    humidity.textContent = data.current.humidity;
    visiblity.textContent = data.current.vis_km;
    airPressure.textContent = data.current.pressure_mb;
    wind.textContent = data.current.wind_kph;
    weatherCard.classList.add("block");
  } catch (error) {
    console.log(error);
  }
}

findBtn.addEventListener("click", changeParameters);

cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    changeParameters();
  }
});
