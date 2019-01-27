function DayUserProgress() {

    let currentVideoTime = 3600; // Basically get from localstorage
    let targetVideoTime = 7200;

    let progressElement = document.getElementById("ldBar-left");

    let percentage = (currentVideoTime / targetVideoTime)*100;
    progressElement.setAttribute("data-value", percentage.toString());

}
DayUserProgress();



function func() {
    function setCorrectDataToDayProgressbar() {

        let paintTime = document.getElementsByClassName('ldBar-label');
        console.log(paintTime);
        console.log(paintTime[0]);
        console.log(paintTime.length);

        paintTime[0].innerHTML = "939"

    }

    function setCorrectDataToWeekProgressbar() {

        let paintTime = document.getElementsByClassName('ldBar-label');
        console.log(paintTime);
        console.log(paintTime[1]);
        console.log(paintTime.length);

    }

    function setCorrectDataToMonthProgressbar() {

        let paintTime = document.getElementsByClassName('ldBar-label');
        console.log(paintTime);
        console.log(paintTime[2]);
        console.log(paintTime.length);

    }

    setCorrectDataToDayProgressbar();
    setCorrectDataToWeekProgressbar();
    setCorrectDataToMonthProgressbar();
}

setTimeout(func, 1500);



/*

function func() {
    function userProgress(time) {
        //time - брать из Local  Storage
        var dayWatch, weekWatch, monthWatch;
        var elem = document.getElementsByClassName("progress-bar-item-first");
        var maxTime = 2 * 60 * 60; //2 трен по часу, в сек
        var width = Math.round(time / maxTime);
        var timeCounter = document.getElementBy
        var currentDay = new Date();

        var paintTime = document.getElementsByClassName('ldBar-label');
        console.log(paintTime);
        console.log(paintTime[0]);
        console.log(paintTime.length);


        //elem.setAttribute("data-value", width);
        //elem.dataset.value(width);

    }
    userProgress(3600)
}

setTimeout(func, 2000);
*/






//userProgress(3600);