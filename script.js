function showCity(response) {
  //console.log(response.data);
  document.querySelector("#dream").innerHTML = response.data.name;
  document.querySelector("#celcius").innerHTML = `${Math.round(
    response.data.main.temp
  )}`;
  document.querySelector(
    "h4"
  ).innerHTML = `Humidity ${response.data.main.humidity}%`;
  document.querySelector("h5").innerHTML = `Wind speed:${Math.round(
    response.data.wind.speed
  )}`;
  document
    .querySelector("#icons")
    .setAttribute(
      "src",
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  document.querySelector("h3").innerHTML = response.data.weather[0].description;
  displaycelcius = response.data.main.temp;
}
function showTemperature(event) {
  event.preventDefault();
  let apiKey = "dd148c52602d8cdd859f994ef40ed094";
  let searchInput = document.querySelector("#look-input");
  let city = searchInput.value;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showCity);
}

function showFereniteTemperature(event) {
  event.preventDefault();
  let celciusTemperature = document.querySelector("#celcius");
  let ferenTemperature = Math.round((displaycelcius * 9) / 5 + 32);
  celciusTemperature.innerHTML = ferenTemperature;
}
function displaycelTemperature(event) {
  event.preventDefault();
  let celciusTemperature = document.querySelector("#celcius");
  celciusTemperature.innerHTML = Math.round(displaycelcius);
}
let displaycelcius = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", showTemperature);

function showPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let geoApiKey = "dd148c52602d8cdd859f994ef40ed094";
  let unit = "metric";
  let geoApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${geoApiKey}&units=${unit}`;
  let say = alert(`your latitude is${position.coords.latitude}`);
  console.log(position.coords.latitude);
  console.log(position.coords.latitude);
  axios.get(geoApiUrl).then(showCity);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let button = document.querySelector("button");
button.addEventListener("click", getCurrentPosition);

let fereiniteElement = document.querySelector("#farenheit-link");
fereiniteElement.addEventListener("click", showFereniteTemperature);

let cellElement = document.querySelector("#merits");
cellElement.addEventListener("click", displaycelTemperature);
