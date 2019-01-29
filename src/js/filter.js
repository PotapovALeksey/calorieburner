import * as array from './array.js';
let arrayVideos = array.arrayVideos;
console.log(arrayVideos);

// const arrayVideos = [{
//     name: 'Утренняя тренировка для зарядки',
//     duration: '10 минут',
//     calories: '80 ккал',
//     inv: 'Коврик для йоги',
//     src: 'https://www.youtube.com/watch?v=ecrz1jaLV3A&list=PLUV7j0d8hiH2fO6jOTpwpKdvJA5fjnPaw',
//     level: 'Простая',
//     img: 'https://img.youtube.com/vi/ecrz1jaLV3A/sddefault.jpg',
// },
//     {
//         name: '5-ти минутная тренировка на пресс и ягодицы',
//         duration: '5 минут',
//         calories: '40 ккал',
//         inv: 'Коврик и мяч для йоги',
//         src: 'https://www.youtube.com/watch?v=iY4hQd24_d0',
//         level: 'Средняя',
//         img: 'https://img.youtube.com/vi/iY4hQd24_d0/sddefault.jpg',
//     },
//     {
//         name: 'Интенсивная тренировка на все группы мышц',
//         duration: '30 минут',
//         calories: '300 ккал',
//         inv: 'Не нужен',
//         src: 'https://www.youtube.com/watch?v=-9jok89UtQk',
//         level: 'Средняя',
//         img: 'https://img.youtube.com/vi/-9jok89UtQk/sddefault.jpg',
//     },
//     {
//         name: 'Йога с элементами суставной гимнастики',
//         duration: '50 минут',
//         calories: '350 ккал',
//         inv: 'Коврик для йоги',
//         src: 'https://www.youtube.com/watch?v=QDR_WB_2EHE',
//         level: 'Средняя',
//         img: 'https://img.youtube.com/vi/QDR_WB_2EHE/0.jpg',
//     },
//     {
//         name: 'Аэробика для дома для начинаючих',
//         duration: '50 минут',
//         calories: '400 ккал',
//         inv: 'Не нужен',
//         src: 'https://www.youtube.com/watch?v=d5bznQLUUuc',
//         level: 'Простая',
//         img: 'https://img.youtube.com/vi/d5bznQLUUuc/sddefault.jpg',
//     },
//     {
//         name: 'Функциональная фитнес тренировка',
//         duration: '60 минут',
//         calories: '600 ккал',
//         inv: 'Коврик для йоги',
//         src: 'https://www.youtube.com/watch?v=9tDnPfQWUbM',
//         level: 'Простая',
//         img: 'https://img.youtube.com/vi/9tDnPfQWUbM/sddefault.jpg',
//     },
//     {
//         name: 'Кардио тренировка с элементами бокса',
//         duration: '30 минут',
//         calories: '300 ккал',
//         inv: 'Не нужен',
//         src: 'https://www.youtube.com/watch?v=xSUXMwqZ3z0',
//         level: 'Средняя',
//         img: 'https://img.youtube.com/vi/xSUXMwqZ3z0/sddefault.jpg',
//     },
//     {
//         name: 'Интенсивная круговая тренировка',
//         duration: '45 минут',
//         calories: '500 ккал',
//         inv: 'Не нужен',
//         src: 'https://www.youtube.com/watch?v=yapXBQ9vBPQ',
//         level: 'Сложная',
//         img: 'https://img.youtube.com/vi/yapXBQ9vBPQ/sddefault.jpg',
//     },
//     {
//         name: '30-ти минутная тренировка с гантелями',
//         duration: '30 минут',
//         calories: '250 ккал',
//         inv: 'Гантели',
//         src: 'https://www.youtube.com/watch?v=Z_UWE3pfl6o',
//         level: 'Сложная',
//         img: 'https://img.youtube.com/vi/Z_UWE3pfl6o/sddefault.jpg',
//     },
//     {
//         name: 'Тренировка для рук с гантелями',
//         duration: '14 минут',
//         calories: '110 ккал',
//         inv: 'Коврик для йоги и гантели',
//         src: 'https://www.youtube.com/watch?v=oLOAffuSRds&t',
//         level: 'Простая',
//         img: 'https://img.youtube.com/vi/oLOAffuSRds/sddefault.jpg',
//     },
//     {
//         name: 'Короткая Табата тренировка',
//         duration: '10 минут',
//         calories: '100 ккал',
//         inv: 'Не нужен',
//         src: 'https://www.youtube.com/watch?v=irALl4gr9zA&t',
//         level: 'Сложная',
//         img: 'https://img.youtube.com/vi/irALl4gr9zA/sddefault.jpg',
//     },
//     {
//         name: '30-минутная хип-хоп тренировка по системе Табата',
//         duration: '30 минут',
//         calories: '350 ккал',
//         inv: 'Не нужен',
//         src: 'https://www.youtube.com/watch?v=kwkXyHjgoDM',
//         level: 'Сложная',
//         img: 'https://img.youtube.com/vi/kwkXyHjgoDM/sddefault.jpg',
//     },
//     {
//         name: 'Утренняя тренировка на 15 минут',
//         duration: '15 минут',
//         calories: '350 ккал',
//         inv: 'Коврик для йоги',
//         src: 'https://www.youtube.com/watch?v=1fDHrKRqy34',
//         level: 'Сложная',
//         img: 'https://img.youtube.com/vi/1fDHrKRqy34/sddefault.jpg',
//     },
//     {
//         name: '20-минутная жиросжигающая тренировка по системе Табата',
//         duration: '20 минут',
//         calories: '350 ккал',
//         inv: 'Коврик для йоги',
//         src: 'https://www.youtube.com/watch?v=lQkD1b5HOPY',
//         level: 'Сложная',
//         img: 'https://img.youtube.com/vi/lQkD1b5HOPY/sddefault.jpg',
//     },
//     {
//         name: '10 минутная тренировка для ягодиц средней сложности',
//         duration: '10 минут',
//         calories: '80 ккал',
//         inv: 'Коврик для йоги',
//         src: 'https://www.youtube.com/watch?v=RqfkrZA_ie0',
//         level: 'Сложная',
//         img: 'https://img.youtube.com/vi/RqfkrZA_ie0/sddefault.jpg',
//     }
// ];

// clear filters
// const clearFilterButton = document.getElementById('filter_link_txt');
// clearFilterButton.addEventListener('click', clearFilter);

// function clearFilter() {
//     resultFilter = arrayVideos;
// }

// get filters menu items
const filterInventory = document.getElementById('js__filter-inventory');
const filterDifficult = document.getElementById('js__filter-difficult');
const filterCalory = document.getElementById('js__filter-calory');
const filterTime = document.getElementById('js__filter-time');

// get filter submenu items
const submenuInventory = document.getElementById('js__submenu-inventory');
const submenuDifficult = document.getElementById('js__submenu-difficult');
const submenuCalory = document.getElementById('js__submenu-calory');
const submenuTime = document.getElementById('js__submenu-time');

// add event listeners
document.addEventListener("DOMContentLoaded", addEvtListeners);

// show/close filter menus
function showFilterInventory() {
    if (submenuInventory.style.display === 'none') {
        submenuInventory.style.display = 'flex';
        submenuDifficult.style.display = 'none';
        submenuCalory.style.display = 'none';
        submenuTime.style.display = 'none';
    } else {
        submenuInventory.style.display = 'none';
    }
}

function showFilterDifficult() {
    if (submenuDifficult.style.display === 'none') {
        submenuDifficult.style.display = 'flex';
        submenuInventory.style.display = 'none';
        submenuCalory.style.display = 'none';
        submenuTime.style.display = 'none';
    } else {
        submenuDifficult.style.display = 'none';
    }
}

function showFilterCalory() {
    if (submenuCalory.style.display === 'none') {
        submenuCalory.style.display = 'flex';
        submenuInventory.style.display = 'none';
        submenuDifficult.style.display = 'none';
        submenuTime.style.display = 'none';
    } else {
        submenuCalory.style.display = 'none';
    }
}

function showFilterTime() {
    if (submenuTime.style.display === 'none') {
        submenuTime.style.display = 'flex';
        submenuInventory.style.display = 'none';
        submenuDifficult.style.display = 'none';
        submenuCalory.style.display = 'none';
    } else {
        submenuTime.style.display = 'none';
    }
}
// add event listeners
function addEvtListeners() {
    // add evtlisteners to menu items
    filterInventory.addEventListener('click', showFilterInventory);
    let submenuInventoryStyle = window.getComputedStyle(submenuInventory, "");
    submenuInventory.style.display = (submenuInventoryStyle.display === 'none') ? 'none' : 'flex';
    filterDifficult.addEventListener('click', showFilterDifficult);
    let submenuDifficultStyle = window.getComputedStyle(submenuDifficult, "");
    submenuDifficult.style.display = (submenuDifficultStyle.display === 'none') ? 'none' : 'flex';
    filterCalory.addEventListener('click', showFilterCalory);
    let submenuCaloryStyle = window.getComputedStyle(submenuCalory, "");
    submenuCalory.style.display = (submenuCaloryStyle.display === 'none') ? 'none' : 'flex';
    filterTime.addEventListener('click', showFilterTime);
    let submenuTimeStyle = window.getComputedStyle(submenuTime, "");
    submenuTime.style.display = (submenuTimeStyle.display === 'none') ? 'none' : 'flex';
}

document.addEventListener("DOMContentLoaded", addEvtListeners);
let arrCheck;
let filter;
let markup;
let isInv;
let isLevel;
let isCalories;
let isDuration;
let resultFilter;
const filterBox = document.getElementById('filter_box');
filterBox.addEventListener('click', function (e) {

    if (e.target.parentNode.nodeName === 'LI') {
        if (e.target.nodeName === "UL") {
            return;
        }
        toggleCheckbox(e.target);

        arrCheck = [...filterBox.querySelectorAll('input:checked')];
        filter = arrCheck.reduce((acc, item) => {
            if (acc[item.dataset.type]) {
                acc[item.dataset.type].push(item.dataset.value);
            } else {
                acc[item.dataset.type] = [];

                acc[item.dataset.type].push(item.dataset.value);
            }
            return acc;
        }, {});

        resultFilter = arrayVideos.filter(el => {
            if (filter.inv) {
                isInv = filter.inv.includes(el.inv);
            } else {
                isInv = true;
            }
            if (filter.level) {
                isLevel = filter.level.includes(el.level);
            } else {
                isLevel = true;
            }
            if (filter.calories) {
                isCalories = filter.calories.includes(el.calories);
            } else {
                isCalories = true;
            }
            if (filter.duration) {
                isDuration = filter.duration.includes(el.duration);
            } else {
                isDuration = true;
            }

            return isInv && isLevel && isCalories && isDuration;
        });
        console.log(resultFilter);
    }
});

function toggleCheckbox(target) {
    let li = target.closest("li");
    let input = li.querySelector("input");
    let svg = li.querySelector("svg");
    let text = li.querySelector("p");

    input.click();

    if (input.checked) {
        svg.style.fill = "blue";
        text.style.fontWeight = "bold";
        text.style.color = "#000";
    } else {
        svg.style.fill = "#51566b";
        text.style.fontWeight = "regular";
        text.style.color = "#51566b";
    }
}