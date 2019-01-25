// import * as obj from './array';


const arrayVideos = [{
    name: 'Утренняя тренировка для зарядки',
    duration: '10 минут',
    calories: '80 ккал',
    inv: 'Коврик для йоги',
    src: 'https://www.youtube.com/watch?v=ecrz1jaLV3A&list=PLUV7j0d8hiH2fO6jOTpwpKdvJA5fjnPaw',
    level: 'Простая',
    img: 'https://img.youtube.com/vi/ecrz1jaLV3A/sddefault.jpg',
},
    {
        name: '5-ти минутная тренировка на пресс и ягодицы',
        duration: '5 минут',
        calories: '40 ккал',
        inv: 'Коврик и мяч для йоги',
        src: 'https://www.youtube.com/watch?v=iY4hQd24_d0',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/iY4hQd24_d0/sddefault.jpg',
    },
    {
        name: 'Интенсивная тренировка на все группы мышц',
        duration: '30 минут',
        calories: '300 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=-9jok89UtQk',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/-9jok89UtQk/sddefault.jpg',
    },
    {
        name: 'Йога с элементами суставной гимнастики',
        duration: '50 минут',
        calories: '350 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=QDR_WB_2EHE',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/QDR_WB_2EHE/0.jpg',
    },
    {
        name: 'Аэробика для дома для начинаючих',
        duration: '50 минут',
        calories: '400 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=d5bznQLUUuc',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/d5bznQLUUuc/sddefault.jpg',
    },
    {
        name: 'Функциональная фитнес тренировка',
        duration: '60 минут',
        calories: '600 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=9tDnPfQWUbM',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/9tDnPfQWUbM/sddefault.jpg',
    },
    {
        name: 'Кардио тренировка с элементами бокса',
        duration: '30 минут',
        calories: '300 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=xSUXMwqZ3z0',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/xSUXMwqZ3z0/sddefault.jpg',
    },
    {
        name: 'Интенсивная круговая тренировка',
        duration: '45 минут',
        calories: '500 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=yapXBQ9vBPQ',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/yapXBQ9vBPQ/sddefault.jpg',
    },
    {
        name: '30-ти минутная тренировка с гантелями',
        duration: '30 минут',
        calories: '250 ккал',
        inv: 'Гантели',
        src: 'https://www.youtube.com/watch?v=Z_UWE3pfl6o',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/Z_UWE3pfl6o/sddefault.jpg',
    },
    {
        name: 'Тренировка для рук с гантелями',
        duration: '14 минут',
        calories: '110 ккал',
        inv: 'Коврик для йоги и гантели',
        src: 'https://www.youtube.com/watch?v=oLOAffuSRds&t',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/oLOAffuSRds/sddefault.jpg',
    },
    {
        name: 'Короткая Табата тренировка',
        duration: '10 минут',
        calories: '100 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=irALl4gr9zA&t',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/irALl4gr9zA/sddefault.jpg',
    },
    {
        name: '30-минутная хип-хоп тренировка по системе Табата',
        duration: '30 минут',
        calories: '350 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/watch?v=kwkXyHjgoDM',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/kwkXyHjgoDM/sddefault.jpg',
    },
    {
        name: 'Утренняя тренировка на 15 минут',
        duration: '15 минут',
        calories: '350 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=1fDHrKRqy34',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/1fDHrKRqy34/sddefault.jpg',
    },
    {
        name: '20-минутная жиросжигающая тренировка по системе Табата',
        duration: '20 минут',
        calories: '350 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=lQkD1b5HOPY',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/lQkD1b5HOPY/sddefault.jpg',
    },
    {
        name: '10 минутная тренировка для ягодиц средней сложности',
        duration: '10 минут',
        calories: '80 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/watch?v=RqfkrZA_ie0',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/RqfkrZA_ie0/sddefault.jpg',
    }
];

// let videos = obj.arrayVideos;

// get filters menu items
const filterInventory = document.getElementById('js__filter-inventory');
const filterDifficult = document.getElementById('js__filter-difficult');
const filterCalory = document.getElementById('js__filter-calory');
const filterTime = document.getElementById('js__filter-time');

// get filter inventory menu subitems
const inventoryNone = document.getElementById('js__inventory-none');
const inventoryYogaCarpet = document.getElementById('js__inventory-yoga-carpet');
const inventoryDumbells = document.getElementById('js__inventory-dumbells');
const inventoryYogaCarpetAndBall = document.getElementById('js__inventory-yoga-carpet-and-ball');
const inventoryYogaCarpetAndDumbells = document.getElementById('js__inventory-yoga-carpet-and-dumbells');

// get filter difficult menu subitems
const difficultEasy = document.getElementById('js__difficult-easy');
const difficultMedium = document.getElementById('js__difficult-medium');
const difficultHard = document.getElementById('js__difficult-hard');

// get filter calory menu subitems
const calory40 = document.getElementById('js__calory-40');
const calory80 = document.getElementById('js__calory-80');
const calory100 = document.getElementById('js__calory-100');
const calory110 = document.getElementById('js__calory-110');
const calory250 = document.getElementById('js__calory-250');
const calory300 = document.getElementById('js__calory-300');
const calory350 = document.getElementById('js__calory-350');
const calory400 = document.getElementById('js__calory-400');
const calory500 = document.getElementById('js__calory-500');
const calory600 = document.getElementById('js__calory-600');

//get filter time menu subitems
const time5Min = document.getElementById('js__time-5min');
const time10Min = document.getElementById('js__time-10min');
const time14Min = document.getElementById('js__time-14min');
const time20Min = document.getElementById('js__time-20min');
const time30Min = document.getElementById('js__time-30min');
const time45Min = document.getElementById('js__time-45min');
const time50Min = document.getElementById('js__time-50min');
const time60Min = document.getElementById('js__time-60min');

// get filter submenu items
const submenuInventory = document.getElementById('js__submenu-inventory');
const submenuDifficult = document.getElementById('js__submenu-difficult');
const submenuCalory = document.getElementById('js__submenu-calory');
const submenuTime = document.getElementById('js__submenu-time');

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

// add evt listeners to menu Inventory subitems
const filterBox = document.getElementById('filter_box');
// const inputs = filterBox.querySelectorAll('input');
// inputs.addEventListener('click', getChecked);

filterBox.addEventListener('click', function (e) {
    if (e.target.nodeName === 'INPUT') {
        // console.log(e.target);
        // getChecked(e)
    }
    console.log(e.target.nodeName);
});
console.log(filterBox);
// filter functions
const filter = {
    inv: [],
    level: [],
    calories: [],
    duration: [],
};

function getChecked(e) {
    e.preventDefault();
    const arrInputs = Array.from(inputs);
    arrInputs.filter(input => input.checked).map(item => {
        if (item.name === 'inventory') {
            filter.inv.push(item.value)
        }
        if (item.name === 'difficult') {
            filter.level.push(item.value)
        }
        if (item.name === 'calory') {
            filter.calories.push(item.value)
        }
        if (item.name === 'time') {
            filter.duration.push(item.value)
        }
    });

    function filterItems(arrayVideos, filter) {
        return undefined;
    }

    const finalArray = filterItems(arrayVideos, filter);
    console.log(finalArray);
}

const getVideoByInv = (arr, inventory) =>
    arr.filter(product => inventory.length ?
        inventory.some((inv) => product.inv === inv) :
        true);

const getVideoByDifficult = (arr, difficulty) =>
    arr.filter(product => difficulty.length ?
        difficulty.some((difficult) => product.difficult === difficult) :
        true);

const getVideoByCalory = (arr, calories) =>
    arr.filter(product => calories.length ?
        calories.some((calory) => product.calory === calory) :
        true);

const getVideoByTime = (arr, dates) =>
    arr.filter(product => dates.length ?
        dates.some((time) => product.time === time) :
        true);



// (function filterCatch() {
//
//     let filterInputs = document.querySelectorAll("input");
//     let filterInventory = document.getElementsByClassName('check1');
//     let filterDifficult = document.getElementsByClassName('check2');
//     let filterCalory = document.getElementsByClassName('check3');
//     let filterTime = document.getElementsByClassName('check4');
//     if (filterInventory.checked || filterDifficult.checked || filterCalory.checked || filterTime.checked) {
//         getChecked();
//     }
// }());


// //Первоначальная разметка
// marcupHTML(laptops);
// let filterBox = document.getElementById('filter_box');
//по нажатию на кнопк 2 события: формирование объекта ФИЛЬТР и Выборка нужных карточек из Списка товаров
// filterBox.addEventListener("click", getChecked);
// filterBox.addEventListener("reset", clearFilter);


// const cards = document.querySelector(".js-cards");
// const form = document.querySelector(".js-form");
// const reset = form.querySelector('button[type="reset"]');
//
//
// // const source = document.querySelector(".template-card").innerHTML.trim();
//
// // const template = Handlebars.compile(source);
//
// const filter = e => {
//   e.preventDefault();
//     debugger
//   const filter = [...document.querySelectorAll("input:checked")].reduce(
//     (acc, { name, value }) => {
//       if (!acc.hasOwnProperty(name)) {
//         acc[name] = [];
//       }
//
//       acc[name].push(value);
//
//       return acc;
//     },
//     {}
//   );
//
//   let isSize;
//   let isColor;
//   let isRelease_date;
//
//   const laptopsFilter = arrayVideos.filter(lap => {
//
//     if (filter.inventory) {
//       isSize = filter.inventory.includes(String(lap.inventory));
//     } else {
//       isSize = true;
//     }
//     if (filter.difficult) {
//       isColor = filter.difficult.includes(lap.difficult);
//     } else {
//       isColor = true;
//     }
//     if (filter.calory) {
//       isRelease_date = filter.calory.includes(String(lap.calory));
//     } else {
//       isRelease_date = true;
//     }
//     console.log(isSize && isColor && isRelease_date);
//     return isSize && isColor && isRelease_date;
//   });
//
//   // CREATE HTML
//   const markup = laptopsFilter.reduce((acc, lap) => (acc += template(lap)), "");
//
//   cards.innerHTML = markup;
// };
//
// form.addEventListener("submit", filter);
// reset.addEventListener("click", () => {
//   cards.innerHTML = "";
// });
