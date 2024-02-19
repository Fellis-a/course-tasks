'use strict'

let money, time;

//функция для запроса даты и месячногобюджета при запуске приложения 
function start() {
    time = prompt('Введите дату в формате YYYY-MM-DD');
    while (isNaN(money) || money == '' || money == null) { // null чтобы пользователь не мог нажать кнопка отмена 

        money = +prompt('Ваш бюджет на месяц?', 50000);
    }
}

start();

//создаем объект для хранения данных в нашем приложении
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

//функция для определения обязательных статей расодов
function chooseExpenses() {

    for (let i = 0; i < 2; i++) {
        let nameExpenses = prompt('Введите обязательную статью расходов в этим месяце:', 'Стоматолог');
        let costExpenses = +prompt('Во сколько обойдется?', 10000);

        if ((nameExpenses != "") && (costExpenses >= 0) && (typeof (costExpenses) == 'number')) {
            appData.expenses[nameExpenses] = costExpenses;
            console.log(appData.expenses);
        } else {
            alert('Вы ввели неверное значение!');
        }
    }

}

chooseExpenses();

//функция для определения необязательных статей расходов
function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {

        appData.optionalExpenses[i] = prompt('Статья необязательных расходов?');
        console.log(appData.optionalExpenses);
    }
}

chooseOptExpenses();

//функция для определения бюджета на 1 день
function detectDayBudget() {
    appData.moneyPerDay = +(appData.budget / 30).toFixed();

    alert('Ваш бюджет на 1 день:' + appData.moneyPerDay);
}

detectDayBudget();


//функция для определения уровня дохода
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень дохода');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень дохода')
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень дохода');
    } else {
        console.log('Произошла ошибка')
    }
}

detectLevel();

//функция дляопределения доходности от накоплений в месяц
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('Какова сумма накоплений?'),
            percent = +prompt('Под какой процент?');

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();
