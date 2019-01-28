import createVideo from './template/slider.hbs';
import $ from "jquery";
import "slick-carousel";
import { DH_UNABLE_TO_CHECK_GENERATOR } from 'constants';
import YouTubePlayer from 'youtube-player';




export const arrayVideos = [{
        name: 'Утренняя тренировка для зарядки',
        duration: '10 минут',
        colories: '80 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/embed/ecrz1jaLV3A?enablejsapi=1',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/ecrz1jaLV3A/sddefault.jpg',
    },
    {
        name: '5-ти минутная тренировка на пресс и ягодицы',
        duration: '5 минут',
        colories: '40 ккал',
        inv: 'Коврик и мяч для йоги',
        src: 'https://www.youtube.com/embed/iY4hQd24_d0?enablejsapi=1',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/iY4hQd24_d0/sddefault.jpg',
    },
    {
        name: 'Интенсивная тренировка на все группы мышц',
        duration: '30 минут',
        colories: '300 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/embed/-9jok89UtQk?enablejsapi=1',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/-9jok89UtQk/sddefault.jpg',
    },
    {
        name: 'Йога с элементами суставной гимнастики',
        duration: '50 минут',
        colories: '350 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/embed/QDR_WB_2EHE?enablejsapi=1',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/QDR_WB_2EHE/0.jpg',
    },
    {
        name: 'Аэробика для дома для начинаючих',
        duration: '50 минут',
        colories: '400 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/embed/d5bznQLUUuc?enablejsapi=1',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/d5bznQLUUuc/sddefault.jpg',
    },
    {
        name: 'Функциональная фитнес тренировка',
        duration: '60 минут',
        colories: '600 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/embed/9tDnPfQWUbM?enablejsapi=1',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/9tDnPfQWUbM/sddefault.jpg',
    },
    {
        name: 'Кардио тренировка с элементами бокса',
        duration: '30 минут',
        colories: '300 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/embed/xSUXMwqZ3z0?enablejsapi=1',
        level: 'Средняя',
        img: 'https://img.youtube.com/vi/xSUXMwqZ3z0/sddefault.jpg',
    },
    {
        name: 'Интенсивная круговая тренировка',
        duration: '45 минут',
        colories: '500 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/embed/yapXBQ9vBPQ?enablejsapi=1',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/yapXBQ9vBPQ/sddefault.jpg',
    },
    {
        name: '30-ти минутная тренировка с гантелями',
        duration: '30 минут',
        colories: '250 ккал',
        inv: 'Гантели',
        src: 'https://www.youtube.com/embed/Z_UWE3pfl6o?enablejsapi=1',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/Z_UWE3pfl6o/sddefault.jpg',
    },
    {
        name: 'Тренировка для рук с гантелями',
        duration: '14 минут',
        colories: '110 ккал',
        inv: 'Коврик для йоги и гантели',
        src: 'https://www.youtube.com/embed/oLOAffuSRds&t?enablejsapi=1',
        level: 'Простая',
        img: 'https://img.youtube.com/vi/oLOAffuSRds/sddefault.jpg',
    },
    {
        name: 'Короткая Табата тренировка',
        duration: '10 минут',
        colories: '100 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/embed/irALl4gr9zA&t?enablejsapi=1',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/irALl4gr9zA/sddefault.jpg',
    },
    {
        name: '30-минутная хип-хоп тренировка по системе Табата',
        duration: '30 минут',
        colories: '350 ккал',
        inv: 'Не нужен',
        src: 'https://www.youtube.com/embed/kwkXyHjgoDM?enablejsapi=1',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/kwkXyHjgoDM/sddefault.jpg',
    },
    {
        name: 'Утренняя тренировка на 15 минут',
        duration: '15 минут',
        colories: '350 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/embed/1fDHrKRqy34?enablejsapi=1',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/1fDHrKRqy34/sddefault.jpg',
    },
    {
        name: '20-минутная жиросжигающая тренировка по системе Табата',
        duration: '20 минут',
        colories: '350 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/embed/lQkD1b5HOPY?enablejsapi=1',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/lQkD1b5HOPY/sddefault.jpg',
    },
    {
        name: '10 минутная тренировка для ягодиц средней сложности',
        duration: '10 минут',
        colories: '80 ккал',
        inv: 'Коврик для йоги',
        src: 'https://www.youtube.com/embed/RqfkrZA_ie0?enablejsapi=1',
        level: 'Сложная',
        img: 'https://img.youtube.com/vi/RqfkrZA_ie0/sddefault.jpg',
    }
];


/* <iframe id="ytplayer" type="text/html" width="220" height="200"
src="https://www.youtube.com/embed/RqfkrZA_ie0"
frameborder="0" allowfullscreen></iframe> */
window.addEventListener('DOMContentLoaded', viewAllVideos);
function viewAllVideos() {
    const markUp = createVideo({
        arrayVideos
    });
    const out = document.querySelector('.slider-list');
    out.insertAdjacentHTML('afterbegin', markUp);
    $('.slider-list').slick({
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1,
               
    });
   
    function showText() {
        const x = window.matchMedia("(max-width: 767px)");
        let div = document.querySelector('.slick-active');
        let text = div.querySelector('.slider-text-pos');
        text.style.display = 'block';
        const allDiv = [...document.querySelectorAll('.slick-slide')];
        
        if (x.matches) {
        allDiv.forEach(elem => {
              if (!elem.classList.contains('slick-active')) {
                elem.querySelector('.slider-text-pos').style.display = 'block';
            }
        })} else {
            allDiv.forEach(elem => {
                  if (!elem.classList.contains('slick-active')) {
                    elem.querySelector('.slider-text-pos').style.display = 'none';
                }
            })}
    }

    const conttt = document.querySelector('.slider-list');
    conttt.addEventListener('mousemove', showText);


    const mod = document.querySelector('.modal');
    const sliderList = document.querySelector('.slick-track');
    sliderList.addEventListener('click', showModal);
    function showModal(event) {
        event.preventDefault();
        if (event.target.nodeName !== 'IMG') return;
        const newSrc = event.target.parentNode.href;
        // const mod = document.querySelector('.modal');
        const modalSrc = document.querySelector('#player');
        modalSrc.src = newSrc;
        mod.style.display = "block";

        let player;
 
  
        let caloriesToExport;
   const closeBtn = document.querySelector('.madal-btn__close');
   closeBtn.addEventListener('click', closeModal);
   function closeModal(event) {
    event.preventDefault();
    mod.style.display = "none";
    player.stopVideo();
    localStorage.setItem("calories", caloriesToExport);

   }
   
   player = YouTubePlayer('player');
        
   player.on('stateChange', onPlayerStateChange);

   
   
   
   let TIMER_ID;
   let calloriesForSecond;
   let callories;
   let COUNTER = 0;

   function onPlayerStateChange(event) {
       let duration;
       let currentTime;
        
       if (event.data == 1)
       {
           TIMER_ID = setInterval(triggerFunction, 1000);
       }
       else {
              clearInterval(TIMER_ID);
       }
            
   
       function triggerFunction() {
           incrementCounter();
           currentTime = Math.floor(event.target.getCurrentTime());
           duration = Math.floor(event.target.getDuration());
           calloriesForSecond = 200 / duration;
           callories = Math.round(COUNTER * calloriesForSecond);
           let res = formatedValue(callories);
           displayResult(res);
      
       }
   
                  
       function formatedValue(time) {
         let value = time < 10 ? "00" + time : time < 100 ? "0" + time : time;
         return value;
       }
   
       function displayResult(value) {
         const counterElem = document.querySelector(
           ".js-modal-content__counter-num"
         );
   
         counterElem.innerHTML = value;
         caloriesToExport = value;

       }
       function incrementCounter() {
        return COUNTER++;
      }
   
     
   }
   









}

}

// let xx = localStorage.getItem("calories");
//    console.log(xx);