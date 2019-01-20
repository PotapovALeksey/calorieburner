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

// add event listeners
document.addEventListener("DOMContentLoaded", addEvtListeners);

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
  // add evt listeners to menu Inventory subitems
  inventoryNone.addEventListener('click', filterInventoryNone);
  inventoryYogaCarpet.addEventListener('click', filterInventoryYogaCarpet);
  inventoryDumbells.addEventListener('click', filterInventoryDumbells);
  inventoryYogaCarpetAndBall.addEventListener('click', filterInventoryYogaCarpetAndBall);
  inventoryYogaCarpetAndDumbells.addEventListener('click', filterInventoryYogaCarpetAndDumbells);
  // add evt listeners to menu Difficult subitems
  difficultEasy.addEventListener('click', filterDifficultNone);
  difficultMedium.addEventListener('click', filterDifficultMedium);
  difficultHard.addEventListener('click', filterDifficultHard);
  // add evt listeners to menu Calory subitems
  calory40.addEventListener('click', filterCalory40);
  calory80.addEventListener('click', filterCalory80);
  calory100.addEventListener('click', filterCalory100);
  calory110.addEventListener('click', filterCalory110);
  calory250.addEventListener('click', filterCalory250);
  calory300.addEventListener('click', filterCalory300);
  calory350.addEventListener('click', filterCalory350);
  calory400.addEventListener('click', filterCalory400);
  calory500.addEventListener('click', filterCalory500);
  calory600.addEventListener('click', filterCalory600);
  // add evt listeners to menu Time subitems
  time5Min.addEventListener('click', filterTime5Min);
  time10Min.addEventListener('click', filterTime10Min);
  time14Min.addEventListener('click', filterTime14Min);
  time20Min.addEventListener('click', filterTime20Min);
  time30Min.addEventListener('click', filterTime30Min);
  time45Min.addEventListener('click', filterTime45Min);
  time50Min.addEventListener('click', filterTime50Min);
  time60Min.addEventListener('click', filterTime60Min);
}

function showFilterInventory() {
  submenuInventory.style.display = (submenuInventory.style.display === 'none') ? 'flex' : 'none';
}

function showFilterDifficult() {
  submenuDifficult.style.display = (submenuDifficult.style.display === 'none') ? 'flex' : 'none';
}

function showFilterCalory() {
  submenuCalory.style.display = (submenuCalory.style.display === 'none') ? 'flex' : 'none';
}

function showFilterTime() {
  submenuTime.style.display = (submenuTime.style.display === 'none') ? 'flex' : 'none';
}



function filterInventoryNone() {
  alert('It works!');
}

function filterInventoryYogaCarpet() {

}

function filterInventoryDumbells() {

}

function filterInventoryYogaCarpetAndBall() {

}

function filterInventoryYogaCarpetAndDumbells() {

}

function filterDifficultNone() {

}

function filterDifficultMedium() {

}

function filterDifficultHard() {

}

function filterCalory40() {

}

function filterCalory80() {

}

function filterCalory100() {

}

function filterCalory110() {

}

function filterCalory250() {

}

function filterCalory300() {

}

function filterCalory350() {

}

function filterCalory400() {

}

function filterCalory500() {

}

function filterCalory600() {

}

function filterTime5Min() {

}

function filterTime10Min() {

}

function filterTime14Min() {

}

function filterTime20Min() {

}

function filterTime30Min() {

}

function filterTime45Min() {

}

function filterTime50Min() {

}

function filterTime60Min() {

}