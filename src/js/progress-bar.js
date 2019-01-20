function userProgress(time) {
    var elem = document.getElementsByClassName("progress-bar-item");
    //var valueElem = elem.getAttribute("data-value");
    var maxTime = 2 * 60 * 60; //2 трен по часу, в сек
    var width = Math.round(time / maxTime);
   // elem.style.width = width + "%";
    elem.dataset.value(width);
}
userProgress(3600);