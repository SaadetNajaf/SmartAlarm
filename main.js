const time = document.querySelector("#clock");
const date = document.querySelector("#date");
const alarmForm = document.querySelector("#alarm-form");
const alarmTimeInput = document.querySelector("#alarm-time");
const alarmsList = document.querySelector("#alarms-list");
const alarmSound = document.querySelector("#alarm-sound");

let alarms = [];

document.addEventListener("DOMContentLoaded", () => {
  const firstTime = new Date(Date.now()).toLocaleString();
  const splitTime = firstTime.split(" ");
  date.innerHTML = splitTime[0];
  time.innerHTML = splitTime[1];

  setInterval(() => {
    const firstTime = new Date(Date.now()).toLocaleString();
    const splitTime = firstTime.split(" ");
    date.innerHTML = splitTime[0];
    time.innerHTML = splitTime[1];

    alarms.map((alarm) => {
      if (alarm === splitTime[1]) {
        alarmSound.play();
      }
    });
  }, 1000);
});

alarmForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newAlarmTime = alarmTimeInput.value + ":00";
  alarms.push(newAlarmTime);

  renderAlarms();
});
const renderAlarms = () => {
  alarmsList.innerHTML = alarms.map((alarm) => `<li>${alarm}</li>`).join("");
};
