const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"]; // 다운로드 이미지를 Array 형식으로 변수지정

// random img - [floor - 주어진 정수에서 버림형식 [random으로 생성]] * 이미지의 갯수
const chosenImage = images[[Math.floor(Math.random() * images.length)]];

const bgImage = document.createElement("img"); // bakcground-img Element를 생성

bgImage.src = `img/${chosenImage}`; // img의 경로 설정

document.body.appendChild(bgImage); // body 자식으로 img Element 생성
