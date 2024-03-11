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
    let deadline = '2024-04-01';

    function getTimeRemaining(endTime) {
        let t = Date.parse(endTime) - Date.parse(new Date);
        let seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / (1000 * 60 * 60) - 3);
        //Если нужны дни
        //hours = Math.floor((t/1000/60/60)%24);
        //days = Math.floor((t/(1000*60*60*24)));

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

    //Modal window

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelectorAll('.popup-close');

    function openWindow() {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }

    close.forEach(btn => {
        btn.addEventListener('click', function () {
            overlay.style.display = 'none';
            btn.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    });

    more.addEventListener('click', function () {
        openWindow();
    });

    let descButton = document.querySelectorAll('.description-btn');
    descButton.forEach(btn => {
        btn.addEventListener('click', function () {
            openWindow();
        });
    });

    //Form 

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    }

    let form = document.querySelector('.main-form');
    let input = document.getElementsByTagName('input');
    let statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        //чтобы предотвратить перезагрузку страницы при нажатии на кнопку отправки формы

        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        //заголовок, который говорит нам, что мы работаем с формой 
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        //чтобы не использовать json, можно через formdata прописать значения в формате ключ/значение

        //Для использования json формата 
        //request.setRequestHeader( 'Content-type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        //Если используется JSON
        /* let obj = {};
        formData.forEach(function (value, key) {
        obj[key] = value;
        });
 
        let json = JSON.stringify(obj);
 
        request.send(json);*/

        request.send(formData);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        }
        );

        for (let i = 0; 1 < input.length; i++) {
            input[i].value = '';
        }

    })


});

