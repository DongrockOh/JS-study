// 개인 site API
const API_KEY = "917ad46fcc88b50c4a674ebcee37c39b";

function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  // api 호출 사이트
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  // url을 fetch하고 그 다음으로 response을 받고 response의 json을 얻음
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} @ ${data.main.temp}`;
    });
}
// 위치정보를 못불러 올 시 Error alert 발생 함수
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

// 현재 위치를 불러옴 (성공시, 실패시)
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
