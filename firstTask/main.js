'use strict'

let money = +prompt('Ваш бюджет на месяц?', 50000);
let time = prompt('Введите дату в формате YYYY-MM-DD');


let appData = {
    budget: money,
    timeData: time,
    expences: {},
    optionalExpences: {},
    income: [],
    savings: false
}

for (let i = 0; i < 2; i++) {
    let nameExpences = prompt('Введите обязательную статью расходов в этим месяце:', 'Стоматолог');
    let costExpences = +prompt('Во сколько обойдется?', 10000);

    if ((nameExpences != "") && (costExpences >= 0) && (typeof (costExpences) == 'number')) {
        appData.expences[nameExpences] = costExpences;
        console.log(appData.expences);
    } else {
        alert('вы ввели неверное значение!');
    }
}

alert('Ваш бюджет на 1 день:' + appData.budget / 30);

