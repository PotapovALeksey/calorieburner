const moment = require("moment");
// let y = moment().format({ d: day, M: M });
// let x = moment().week();
// console.log(moment.parseZone().format());
// console.log(moment().weekday());
import {
  DayUserProgress,
  WeekUserProgress,
  MonthUserProgress
} from "./progress-bar-time";

let TIME = {
  lastDate: null,
  todayCal: 0,
  weekCal: 0,
  mounthCal: 0,
  todayTime: 0,
  weekTime: 0,
  mounthTime: 0
};

const setToLS = value => {
  localStorage.setItem("time", JSON.stringify(value));
};

const getFromLS = () => {
  const data = localStorage.getItem("time");
  return data ? JSON.parse(data) : null;
};

function getCcalFromLS() {
  const data = localStorage.getItem("caloriess");
  console.log("f", data);
  return data ? Number(data) : null;
}

const getTimeFromLS = () => {
  const data = localStorage.getItem("timeProgress");
  return data ? Number(data) : null;
};

// setToLS(TIME);

document.addEventListener("DOMContentLoaded", loadingHandler);
//========================================================================
//проверяем дату последнего посещения и текущую, обнуляем данные, отрисовываем
function loadingHandler() {
  let timeLS = getFromLS();
  let currentDate = moment();
  let lsDate = moment(timeLS.lastDate);

  if (!timeLS || !timeLS.lastDate) {
    TIME.lastDate = currentDate;
    setToLS(TIME);
    return;
  } else if (timeLS && timeLS.lastDate) {
    if (
      //месяц совпадает
      lsDate.month() === currentDate.month()
    ) {
      paintMounthBar(timeLS);
      MonthUserProgress(timeLS.mounthTime);
      console.log("1");
    } else {
      //месяц не совпадает
      timeLS.mounthCal = 0;
      timeLS.todayCal = 0;
      timeLS.mounthTime = 0;
      timeLS.todayTime = 0;
      paintTodayBar(timeLS);
      DayUserProgress(timeLS.todayTime);
      paintMounthBar(timeLS);
      MonthUserProgress(timeLS.mounthTime);
      alert("2");
    }
    if (
      //неделя совпадает
      lsDate.week() === currentDate.week()
    ) {
      console.log("3", lsDate.week(), currentDate.week());
      paintWeekBar(timeLS);
      WeekUserProgress(timeLS.weekTime);
    } else {
      //неделя не совпадает
      alert("4", lsDate.week(), currentDate.week());
      timeLS.weekCal = 0;
      timeLS.weekTime = 0;
      paintWeekBar(timeLS);
      WeekUserProgress(timeLS.weekTime);
    }
    if (
      //день совпадает
      lsDate.date() === currentDate.date()
    ) {
      paintTodayBar(timeLS);
      DayUserProgress(timeLS.todayTime);

      console.log("5", lsDate.date(), currentDate.date());
    } else {
      //день не совпадает
      timeLS.todayCal = 0;
      timeLS.todayTime = 0;
      paintTodayBar(timeLS);
      DayUserProgress(timeLS.todayTime);

      console.log("6", lsDate.date(), currentDate.date());
    }
    timeLS.lastDate = currentDate;
  }

  TIME = timeLS;
  setToLS(TIME);
  return TIME;
}
//===================================================================

const closeBtn = document.querySelector(".madal-btn__close");
closeBtn.addEventListener("click", handleGetAndPaintNewTime);

//получает время с видео и отрисовывает прогресс
function handleGetAndPaintNewTime() {
  setTimeout(function() {
    let newCal;
    newCal = getCcalFromLS();

    console.log("out", newCal);
    let newTime = getTimeFromLS();
    console.log(newTime);
    let timeFromLS = getFromLS();
    // console.log(timeFromLS);
    let currentDate = new Date().getDate();
    //   проверяет не наступил ли новый день, пока смотрели видео
    if (currentDate === timeFromLS.lastDate[2]) {
      // console.log(newCal);
      addNewTime(timeFromLS, newCal, newTime);
      setToLS(TIME);
      paintTodayBar(TIME);
      DayUserProgress(TIME.todayTime);
      paintWeekBar(TIME);
      WeekUserProgress(TIME.weekTime);
      paintMounthBar(TIME);
      MonthUserProgress(TIME.mounthTime);
    } else {
      loadingHandler(); //если наступил новый день снова делаем проверки и обнуляем данные.
      //Наверное, стоит сюда написать отдельную ф-цию, которая будет только делать проверку и не отрисовывать прогресс
      addNewTime(TIME, newCal, newTime);
      setToLS(TIME);
      paintTodayBar(TIME);
      DayUserProgress(TIME.todayTime);
      paintWeekBar(TIME);
      WeekUserProgress(TIME.weekTime);
      paintMounthBar(TIME);
      MonthUserProgress(TIME.mounthTime);
    }
    window.location.reload();
  }, 0);
}
//добавляет к существующему времени новое
function addNewTime(timeFromLS, newCal, newTime) {
  console.log(newTime);
  if (isNaN(newCal)) return;
  else {
    timeFromLS.todayCal += Number(newCal);
    timeFromLS.weekCal += Number(newCal);
    timeFromLS.mounthCal += Number(newCal);
    timeFromLS.todayTime += Number(newTime);
    timeFromLS.weekTime += Number(newTime);
    timeFromLS.mounthTime += Number(newTime);
    return (TIME = timeFromLS);
  }
}
//===================================================================

function paintTodayBar(timeObj) {
  const elem = document.getElementById("bar-today");
  const text = document.getElementById("bar-text-today");
  //   const maxTime = 2 * 60 * 60 * 1000; //2 трен по часу, в mc
  const maxCcal = 1200;
  countWidthAndCal(timeObj.todayCal, elem, text, maxCcal);
}
function paintWeekBar(timeObj) {
  const elem = document.getElementById("bar-week");
  const text = document.getElementById("bar-text-week");
  const maxCcal = 1200 * 7; //2 трен по часу каждый день, в mc
  countWidthAndCal(timeObj.weekCal, elem, text, maxCcal);
}
function paintMounthBar(timeObj) {
  const elem = document.getElementById("bar-mounth");
  const text = document.getElementById("bar-text-mounth");
  const maxCcal = 1200 * 7 * 30; //2 трен по часу каждый день. Сделать проверку на к-во дней в месяце
  countWidthAndCal(timeObj.mounthCal, elem, text, maxCcal);
}
function countWidthAndCal(ccal, elem1, elem2, maxCcal) {
  const width = Math.round((ccal * 100) / maxCcal);
  //   const ccal = Math.round((time * maxCal) / maxTime);
  elem1.style.width = width + "%";
  elem2.textContent = ccal + "ккал";
}
