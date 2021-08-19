const API_KEY = '0f8e03f9be92ca8fc70fdb79af04a021';
//https://api.openweathermap.org/data/2.5/weather?lat=33.499998&lon=126.5166646&appid=0f8e03f9be92ca8fc70fdb79af04a021&units=metric
function openWeatherAPI(lat, lon) {
  //const lat = '33.499998';
  //const lon = '126.5166646';

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())

    .then((data) => {
      const city = document.querySelector('.weather-city');
      const weatherIcon = document.querySelector('.weather .weather-icon');
      const weather = document.querySelector('.weather .weather-temp');

      city.innerText = data.name;
      weather.innerText = `${Math.floor(data.main.temp)}℃`;

      const iconImg = document.createElement('img');
      iconImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      weatherIcon.appendChild(iconImg);
    })
    .catch((error) => console.error(error));
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

openWeatherAPI('33.499998', '126.5166646');
//navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
