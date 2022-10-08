// const clock = document.querySelector("h2#clock");

// function getClock() {
//   const date = new Date();
//   clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// };

// getClock();
// setInterval(getClock, 1000); 

// =======================================================

// 설명
// element 찾기 document.qurerySelector(””);
// new Date() : 현재 시각을 한 번 제공해줌
// new Date().getHours()현재 시간의 시간만 number로 가져옴 (getMinutes(), getSeconds())
// 00:00:00 다음과 같은 형태로 만들어주기 위해 padStart 사용
// string.padStart(2,문자열) : 문자열 앞에 padding을 추가함 (문자열 길이, 문자열길이기 안맞을 경우 해당 문자열을 빈 공간에 집어 넣음)
// padStart는 문자열에만 사용이 가능하기 떄문에 String()을 이용해 getHours()의 number을 string으로 바꿔준다.
// 결과물을 id가 clock인 h2 태그에 붙여넣기 (innerText사용)
// setInterval을 통해 밀리초단위 시간마다 해당 함수를 반복 실행한다 (setInterval(함수, 시간))

//수정1 (padStart 넣기)
const clock = document.querySelector("h2#clock"); //element 찾기

function getClock() {
  const date = new Date(); //현재시각 변수에 저장
  const hours = String(date.getHours()).padStart(2, "0");  //현재 시각의 시간을 변수에 저장
  const minutes = String(date.getMinutes()).padStart(2, "0"); //현재 시각의 분을 변수에 저장
  const seconds = String(date.getSeconds()).padStart(2, "0"); //현재 시각의 초를 변수에 저장
  clock.innerText = `${hours}:${minutes}:${seconds}`; //#clock인 태그에 해당 택스트 삽입
}

getClock(); //시작하자마자 시간 띄워주기
setInterval(getClock, 1000); //해당 함수를 1초마다 반복해서 실행하기
