const moment = require("moment");

import {
  DayUserProgress,
  WeekUserProgress,
  MonthUserProgress
} from "./progress-bar-time";

class ProgressBar {
  constructor(DayUserProgress, WeekUserProgress, MonthUserProgress) {
    (this.TIME = {
      lastDate: null,
      todayCal: 0,
      weekCal: 0,
      mounthCal: 0,
      todayTime: 0,
      weekTime: 0,
      mounthTime: 0
    }),
      (this.closeBtn = document.querySelector(".madal-btn__close"));
    (this.timeLS = null), (this.currentDate = null);
    (this.lsDate = null),
      (this.DayUserProgress = DayUserProgress),
      (this.WeekUserProgress = WeekUserProgress),
      (this.MonthUserProgress = MonthUserProgress);
  }
  setTimeObjToLS(value) {
    localStorage.setItem("time", JSON.stringify(value));
  }

  getTimeObjFromLS() {
    const data = localStorage.getItem("time");
    return data ? JSON.parse(data) : null;
  }

  getCcalFromLS() {
    const data = localStorage.getItem("caloriess");
    return data ? Number(data) : null;
  }

  getTimeFromLS() {
    const data = localStorage.getItem("timeProgress");
    return data ? Number(data) : null;
  }

  addListeners() {
    document.addEventListener(
      "DOMContentLoaded",
      this.loadingHandler.bind(this)
    );
    this.closeBtn.addEventListener(
      "click",
      this.handleGetAndPaintNewTime.bind(this)
    );
  }

  //проверяем дату последнего посещения и текущую, обнуляем данные, отрисовываем
  loadingHandler() {
    this.timeLS = this.getTimeObjFromLS();
    this.currentDate = moment();
    this.lsDate = moment(this.timeLS.lastDate);

    if (!this.timeLS || !this.timeLS.lastDate) {
      this.TIME.lastDate = this.currentDate;
      this.setTimeObjToLS(this.TIME);
      return;
    } else if (this.timeLS && this.timeLS.lastDate) {
      if (
        //месяц совпадает
        this.lsDate.month() === this.currentDate.month()
      ) {
        this.paintMounthBar(this.timeLS);
        this.MonthUserProgress(this.timeLS.mounthTime);
      } else {
        //месяц не совпадает
        this.timeLS.mounthCal = 0;
        this.timeLS.todayCal = 0;
        this.timeLS.mounthTime = 0;
        this.timeLS.todayTime = 0;
        this.paintTodayBar(this.timeLS);
        this.DayUserProgress(this.timeLS.todayTime);
        this.paintMounthBar(this.timeLS);
        this.MonthUserProgress(this.timeLS.mounthTime);
      }
      if (
        //неделя совпадает
        this.lsDate.week() === this.currentDate.week()
      ) {
        this.paintWeekBar(this.timeLS);
        this.WeekUserProgress(this.timeLS.weekTime);
      } else {
        //неделя не совпадает
        this.timeLS.weekCal = 0;
        this.timeLS.weekTime = 0;
        this.paintWeekBar(this.timeLS);
        this.WeekUserProgress(this.timeLS.weekTime);
      }
      if (
        //день совпадает
        this.lsDate.date() === this.currentDate.date()
      ) {
        this.paintTodayBar(this.timeLS);
        this.DayUserProgress(this.timeLS.todayTime);
      } else {
        //день не совпадает
        this.timeLS.todayCal = 0;
        this.timeLS.todayTime = 0;
        this.paintTodayBar(this.timeLS);
        this.DayUserProgress(this.timeLS.todayTime);
      }
      this.timeLS.lastDate = this.currentDate;
    }

    this.TIME = this.timeLS;
    this.setTimeObjToLS(this.TIME);
    return this.TIME;
  }
  //===================================================================
  //получает время с видео и отрисовывает прогресс
  handleGetAndPaintNewTime() {
    const newCal = this.getCcalFromLS();
    const newTime = this.getTimeFromLS();
    this.timeFromLS = this.getTimeObjFromLS();
    this.currentDate = moment();
    //   проверяет не наступил ли новый день, пока смотрели видео
    if (this.lsDate.date() === this.currentDate.date()) {
      this.addNewTime(this.timeFromLS, newCal, newTime);
      this.setTimeObjToLS(this.TIME);
      this.paintTodayBar(this.TIME);
      this.DayUserProgress(this.TIME.todayTime);
      this.paintWeekBar(this.TIME);
      this.WeekUserProgress(this.TIME.weekTime);
      this.paintMounthBar(this.TIME);
      this.MonthUserProgress(this.TIME.mounthTime);
    } else {
      this.loadingHandler(); //если наступил новый день снова делаем проверки и обнуляем данные.
      //Наверное, стоит сюда написать отдельную ф-цию, которая будет только делать проверку и не отрисовывать прогресс
      this.addNewTime(this.TIME, newCal, newTime);
      this.setTimeObjToLS(this.TIME);
      this.paintTodayBar(this.TIME);
      this.DayUserProgress(this.TIME.todayTime);
      this.paintWeekBar(this.TIME);
      this.WeekUserProgress(this.TIME.weekTime);
      this.paintMounthBar(this.TIME);
      this.MonthUserProgress(this.TIME.mounthTime);
    }
    window.location.reload();
  }
  //добавляет к существующему времени новое
  addNewTime(timeFromLS, newCal, newTime) {
    if (isNaN(newCal)) return;
    else {
      timeFromLS.todayCal += Number(newCal);
      timeFromLS.weekCal += Number(newCal);
      timeFromLS.mounthCal += Number(newCal);
      timeFromLS.todayTime += Number(newTime);
      timeFromLS.weekTime += Number(newTime);
      timeFromLS.mounthTime += Number(newTime);
      return (this.TIME = timeFromLS);
    }
  }
  //===================================================================
  paintTodayBar(timeObj) {
    const elem = document.getElementById("bar-today");
    const text = document.getElementById("bar-text-today");
    const maxCcal = 1200; //2 трен по часу, в mc
    this.countWidthAndCal(timeObj.todayCal, elem, text, maxCcal);
  }
  paintWeekBar(timeObj) {
    const elem = document.getElementById("bar-week");
    const text = document.getElementById("bar-text-week");
    const maxCcal = 1200 * 7; //2 трен по часу каждый день, в mc
    this.countWidthAndCal(timeObj.weekCal, elem, text, maxCcal);
  }
  paintMounthBar(timeObj) {
    const elem = document.getElementById("bar-mounth");
    const text = document.getElementById("bar-text-mounth");
    const maxCcal = 1200 * 7 * 30; //2 трен по часу каждый день. Сделать проверку на к-во дней в месяце
    this.countWidthAndCal(timeObj.mounthCal, elem, text, maxCcal);
  }
  countWidthAndCal(ccal, elem1, elem2, maxCcal) {
    const width = Math.round((ccal * 100) / maxCcal);
    elem1.style.width = width + "%";
    elem2.textContent = ccal + "ккал";
  }
}

const progress = new ProgressBar(
  DayUserProgress,
  WeekUserProgress,
  MonthUserProgress
);
progress.addListeners();
