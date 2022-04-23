const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const clock = setInterval(function time() {
  let dateToday = new Date();
  let hr = dateToday.getHours();
  let sc = dateToday.getSeconds();
  let mn = dateToday.getMinutes();
  if (hr < 10) {
    hr = "0" + hr;
  }

  if (mn < 10) {
    mn = "0" + mn;
  }

  if (sc < 10) {
    sc = "0" + sc;
  }
  hour.textContent = hr;
  min.textContent = mn;
  sec.textContent = sc;
}, 1000);
