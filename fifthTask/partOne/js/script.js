let menu = document.querySelector('.menu'),
    menuItems = document.querySelectorAll('.menu-item'),
    replacedItem = document.createElement('li'),
    replacedItemText = document.createTextNode('Третий пункт'),
    newItem = document.createElement('li'),
    newItemText = document.createTextNode('Пятый пункт');

//Меняем местами второй и третий пункты
menu.replaceChild(menuItems[2], menuItems[1]); //третий пункт заменяем на второй

replacedItem.classList.add("menu-item"); //добавляем аналгоичный класс к элементу
replacedItem.appendChild(replacedItemText);//добавляем текст к элементу
menu.insertBefore(replacedItem, menuItems[3]); //вставляем созданный элемент в нужное место

//Добавляем пятый пункт в меню
newItem.classList.add('menu-item');//добавляем новый элемент
newItem.appendChild(newItemText);
menu.appendChild(newItem);

//Замена фона на сайте
document.body.style.background = 'url(../partOne/img/apple_true.jpg) center no-repeat';

//Замена заголовка
let newTitle = document.getElementById('title');
newTitle.textContent = ' Мы продаем только подлинную технику Apple';

//Удаление постера с рекламой
let column = document.getElementsByClassName('column');
adv = document.getElementsByClassName('adv')[0];
column[1].removeChild(adv);

//Заносим ответ пользователья в блок на сайте
let answer = prompt('Какое у вас отношение к технике Apple?', 'Нейтральное'),
    showAnswer = document.getElementById('prompt');
showAnswer.innerHTML = 'Ваше отношение к технике Apple: ' + answer;









