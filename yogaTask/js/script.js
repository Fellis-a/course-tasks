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
});