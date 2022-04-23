setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-min-hand]");
const secondHand = document.querySelector("[data-sec-hand]");

function setClock() {
  const currentDate = new Date();
  const secondRatio = currentDate.getSeconds() / 60;
  const minutseRatio = (secondRatio + currentDate.getMinutes()) / 60;
  const hoursRation = (minutseRatio + currentDate.getHours()) / 12;

  setRotation(secondHand, secondRatio);
  setRotation(minuteHand, minutseRatio);
  setRotation(hourHand, hoursRation);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}
