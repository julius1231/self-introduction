const countdown = () => {
  const countDate = new Date("2022-10-17").getTime();
  const now = new Date().getTime();
  const gap = countDate - now ;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = String(Math.floor((gap % day) / hour)).padStart(2,'0');
  const textMinute = String(Math.floor((gap % hour) / minute)).padStart(2,'0');
  const textSecond = String(Math.floor((gap % minute) / second)).padStart(2,'0');

  document.querySelector('#time').innerText = `D-day : ${textDay}d ${textHour}h ${textMinute}m ${textSecond}s`;
}

countdown();
setInterval(countdown, 1000);