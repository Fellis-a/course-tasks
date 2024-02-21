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
    savings: true,
    //функция для определения обязательных статей расодов

    chooseExpenses: function () {
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
    },
    detectDayBudget: function () {
        //функция для определения бюджета на 1 день
        appData.moneyPerDay = +(appData.budget / 30).toFixed();

        alert('Ваш бюджет на 1 день:' + appData.moneyPerDay);
    },

    //функция для определения уровня дохода
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень дохода');
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень дохода')
        } else if (appData.moneyPerDay > 2000) {
            console.log('Высокий уровень дохода');
        } else {
            console.log('Произошла ошибка')
        }
    },

    //функция дляопределения доходности от накоплений в месяц
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?');

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },

    //функция для определения необязательных статей расходов
    chooseOptExpenses: function () {
        for (let i = 1; i < 4; i++) {

            appData.optionalExpenses[i] = prompt('Статья необязательных расходов?');
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function () {

        while (true) {
            let items = prompt('Что принесет дополнительный доход? (перечислите через запятую)', '');
            if (!isNaN(items) || items == null || items == "") {
                alert("Что-то пошлоо не так! Введите значение заново");
                continue;
            } else {
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?'));
                appData.income.sort();
                //вывод полученных способов заработка
                appData.income.forEach(
                    function (item, i) {
                        alert('Способы доп. заработка:' + (i + 1) + "-" + item)
                    }
                )
                //вывод всех свойств и методов из appData
                for (items in appData) {
                    console.log('Наша программа включает в себя данные:' + items)
                }
                break;
            }
        };



    }
}
