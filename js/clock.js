const clock = document.querySelector("h2#clock");

// 시간을 얻어오는 함수
function getClock() {
  const date = new Date(); // 현재 시간을 받아옴
  // 문자열로 변환하며, padStart - 2자리의 수를 가지게 해줌 ex) 1s -> 01s
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`; // 위에 변수 설정 된 것을 표기
}

getClock(); // 함수 실행
setInterval(getClock, 1000); // 시간간격 1000ms
