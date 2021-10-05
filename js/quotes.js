//Math.random()에서 정수만 출력 하는 방법
// Math.round()- 반올림 / Math.ceil() - 올림 / Math.floor() - 버림

const quotes = [
  {
    quote:
      "길이 이끄는 대로 가지 마라. 대신 길이 없는 곳으로 가서 발자국을 남겨라 ",
    author: "랄프 왈도 에머슨",
  },
  {
    quote: "좋아하는 직업을 택하면 평생 하루도 일하지 않아도 될것이니라.",
    author: "공자",
  },
  {
    quote: "지난 일은 어쩔 수 없는 바 슬퍼한 들 이미 엎질러진 물이다.",
    author: "윌리엄 셰익스피어",
  },
  {
    quote: "시작이 반이다",
    author: "마리스토텔레스",
  },
  {
    quote: "끝까지 해보기 전까지는 늘 불가능해 보입니다.",
    author: "넬슨 만델라",
  },
  {
    quote:
      "내일에 대한 준비로 가장 좋은 것은 지금 오늘에 최선을 다하는 것입니다.",
    author: "잭슨 브라운, 주니어",
  },
  {
    quote: "불가능한 일에 도전하는 것은 꽤나 즐거운 일이다.",
    author: "월드 디지니",
  },
  {
    quote:
      "자세히 들여다보면, 대부분의 갑작스러운 성공은 오랜 시간이 걸렸습니다.",
    author: "스티브 잡스",
  },
  {
    quote: "사랑의 치료법은 더욱 사랑하는 것밖에는 없다.",
    author: "헨리 데이비드 소로",
  },
  {
    quote:
      "1년간의 행복을 원한다면 정원을 가꾸고, 평생의 행복을 원한다면 나무를 심으십시오.",
    author: "영국 속담",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math.round()->반올림 .ceil -> 올림 .floor -> 버림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
