window.addEventListener('DOMContentLoaded', function () {//скрипты будут работать, когда весь контент будет загружен на странице

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'),//сами табы
        info = document.querySelector('.info-header'),//контейнер для табов
        tabContent = document.querySelectorAll('.info-tabcontent');//блоки, которые будут вызывать табы

    function hideTabContent(a) {//а-блок, до которого показываются все блоки 
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    };

    hideTabContent(1);//1 так как у нас 1 tabContent не должен скрываться

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target; //получаем элемент, на который нажжимаем
        if (target && target.classList.contains('info-header-tab')) { //если нажимаем именно на блок, который таб
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) { //сопоставляем таб, на который нажимаем и слайд, подходящий по счету цикла
                    hideTabContent(0);//скрываем все блоки контента
                    showTabContent(i);//показываем блок, который совпадает с табом
                    break;
                }
            }
        }
    })


    //Timer
    let deadline = '2024-03-01';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date);
        let seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60) - 3);
        //Если нужны дни
        //hours = Math.floor((t/1000/60/60)%24);
        //days = Math.floor((t/(1000*60*60*24)));

        console.log(t);
        console.log(hours);
        console.log(minutes);
        console.log(seconds);

        if (t <= 0) {
            return {
                'total': '00',
                'hours': '00',
                'minutes': '00',
                'seconds': '00'
            };

        } else {

            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }
    }

    function setClock(id, endTime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endTime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

            if (t.total == "00") {
                clearInterval(timeInterval);
            }

            let reg = /\d/;
            if (String(t.hours)[0].match(reg) && String(t.hours)[1] == undefined) {
                hours.textContent = '0' + t.hours;
            }
            if (String(t.minutes)[0].match(reg) && String(t.minutes)[1] == undefined) {
                minutes.textContent = '0' + t.minutes;
            }
            if (String(t.seconds)[0].match(reg) && (String(t.seconds)[1] == undefined)) {
                seconds.textContent = '0' + t.seconds;
            }



        }
    }

    setClock('timer', deadline);
});