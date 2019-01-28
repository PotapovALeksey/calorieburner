import { DayUserProgress, paintingTime } from "./progress-bar";
paintingTime();
//глобальная переменная (со значениями для проверки работы кода)
let TIME = {
  lastDate: [0, 1, 28],
  today: 300,
  week: 1000,
  mounth: 3000
};

const setToLS = value => {
  localStorage.setItem("time", JSON.stringify(value));
};

const getFromLS = () => {
  const data = localStorage.getItem("time");
  return data ? JSON.parse(data) : null;
};

const getCcalFromLS = () => {
  const data = localStorage.getItem("calories");
  return data ? Number(data) : null;
};

// setToLS(TIME);

document.addEventListener("DOMContentLoaded", loadingHandler);

//========================================================================
// Проверка даты и данных в ЛС и отрисовка прогресс-баров
function loadingHandler() {
  let timeLS = getFromLS();
  let currentMounth = new Date().getMonth();
  let currentDate = new Date().getDate();
  let currentDay = new Date().getDay();
  if (!timeLS || !timeLS.lastDate) {
    TIME.lastDate = [currentMounth, currentDay, currentDate];
    setToLS(TIME);
    return;
  } else if (timeLS && timeLS.lastDate) {
    if (
      //месяц совпадает
      currentMounth === timeLS.lastDate[0]
    ) {
      paintMounthBar(timeLS);
      //   alert("1");
    } else if (currentMounth !== timeLS.lastDate[0]) {
      //месяц не совпадает
      timeLS.lastDate[0] = currentMounth;
      timeLS.lastDate[2] = currentDate;
      timeLS.mounth = 0;
      timeLS.today = 0;
      paintTodayBar(timeLS);
      paintMounthBar(timeLS);

      //   alert("2");
    }
    if (
      //день совпадает
      currentDate === timeLS.lastDate[2]
    ) {
      paintTodayBar(timeLS);
      DayUserProgress();
      setCorrectDataToDayProgressbar();
      paintWeekBar(timeLS);
      //   alert("3");
    } else if (currentDate !== timeLS.lastDate[2]) {
      //день не совпадает
      timeLS.today = 0;
      paintTodayBar(timeLS);
      paintWeekBar(timeLS);
      //   alert("4");
    }
    if (currentDay === 1 && timeLS.today === 0) {
      //понедельник первый заход
      //   alert("5");
      timeLS.week = 0;
      paintWeekBar(timeLS);
    }
    timeLS.lastDate = [currentMounth, currentDay, currentDate];
  }

  TIME = timeLS;
  setToLS(TIME);
  return TIME;
}
//===================================================================

const closeBtn = document.querySelector(".madal-btn__close");
closeBtn.addEventListener("click", handleGetAndPaintNewTime); //эмитация, что кликнули на закрытие модального окна видео

//получает время с видео и отрисовывает прогресс
function handleGetAndPaintNewTime() {
  let newTime = getCcalFromLS();

  let timeFromLS = getFromLS();
  console.log(timeFromLS);
  let currentDate = new Date().getDate();
  //   проверяет не наступил ли новый день, пока смотрели видео
  if (currentDate === timeFromLS.lastDate[2]) {
    addNewTime(timeFromLS, newTime);
    setToLS(TIME);
    paintTodayBar(TIME);
    paintWeekBar(TIME);
    paintMounthBar(TIME);
  } else {
    loadingHandler(); //если наступил новый день снова делаем проверки и обнуляем данные.
    //Наверное, стоит сюда написать отдельную ф-цию, которая будет только делать проверку и не отрисовывать прогресс
    addNewTime(TIME, newTime);
    setToLS(TIME);
    paintTodayBar(TIME);
    paintWeekBar(TIME);
    paintMounthBar(TIME);
  }
}
//добавляет к существующему времени новое
function addNewTime(timeFromLS, newTime) {
  console.log(newTime);
  timeFromLS.today += newTime;
  timeFromLS.week += newTime;
  timeFromLS.mounth += newTime;
  return (TIME = timeFromLS);
}
//===================================================================

function paintTodayBar(timeObj) {
  const elem = document.getElementById("bar-today");
  const text = document.getElementById("bar-text-today");
  //   const maxTime = 2 * 60 * 60 * 1000; //2 трен по часу, в mc
  const maxCcal = 1200;
  countWidthAndCal(timeObj.today, elem, text, maxCcal);
}
function paintWeekBar(timeObj) {
  const elem = document.getElementById("bar-week");
  const text = document.getElementById("bar-text-week");
  const maxCcal = 1200 * 7; //2 трен по часу каждый день, в mc
  countWidthAndCal(timeObj.week, elem, text, maxCcal);
}
function paintMounthBar(timeObj) {
  const elem = document.getElementById("bar-mounth");
  const text = document.getElementById("bar-text-mounth");
  const maxCcal = 1200 * 7 * 30; //2 трен по часу каждый день. Сделать проверку на к-во дней в месяце
  countWidthAndCal(timeObj.mounth, elem, text, maxCcal);
}
function countWidthAndCal(ccal, elem1, elem2, maxCcal) {
  const width = Math.round((ccal * 100) / maxCcal);
  //   const ccal = Math.round((time * maxCal) / maxTime);
  elem1.style.width = width + "%";
  elem2.textContent = ccal + "ккал";
}
