let start = document.getElementById('start');
let optionalExpenses = document.querySelectorAll('.optionalexpenses-item');
let budgetValue = document.querySelector('.budget-value');
let dayBudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalExpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthSavingsValue = document.querySelector('.monthsavings-value');
let yearSavingsValue = document.querySelector('.yearsavings-value');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let expenses = document.getElementsByClassName('expenses-item');
let sumValue = document.getElementById('sum');
let percentValue = document.getElementById('percent');
let checkSavings = document.querySelector('#savings');
let chooseIncome = document.querySelector('.choose-income'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];

let money, time;

//функция для запроса даты и месячного бюджета при запуске приложения 

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

start.addEventListener('click', function () {


    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;


    time = prompt('Введите дату в формате YYYY-MM-DD');
    money = +prompt('Ваш бюджет на месяц?', 50000);

    while (isNaN(money) || money == '' || money == null) { // null чтобы пользователь не мог нажать кнопка отмена 

        money = prompt('Ваш бюджет?');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expenses.length; i++) {
        let nameExpenses = expenses[i].value;
        let costExpenses = expenses[++i].value;

        if ((nameExpenses != "") && (costExpenses != "") && (costExpenses >= 0) && (typeof (costExpenses) !== null) && (typeof (nameExpenses) !== null)) {
            appData.expenses[nameExpenses] = costExpenses;
            console.log(appData.expenses);
            sum += +costExpenses;
        } else {
            i = i - 1;
        }
    };
    expensesValue.textContent = sum;

});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpenses.length; i++) {
        let opt = optionalExpenses[i].value;
        appData.optionalExpenses[i] = opt;
        console.log(appData.optionalExpenses);
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
})

countBtn.addEventListener('click', function () {

    if (appData != undefined) {//если объект существует (уже нажата кнопка произведения рассчетов), допустить следующие действия

        if (expensesValue.textContent != undefined) {
            appData.moneyPerDay = +((appData.budget - +(expensesValue.textContent)) / 30).toFixed();
            console.log(expensesValue.textContent);
        } else {
            appData.moneyPerDay = +(appData.budget / 30).toFixed();
        }

        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень дохода'
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень дохода'
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень дохода'
        } else {
            levelValue.textContent = 'Произошла ошибка'
        }

    } else {
        dayBudgetValue.textContent = "Произошла ошибка";

    }


});

chooseIncome.addEventListener('input', function () {
    let items = chooseIncome.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;

})

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

//создаем объект для хранения данных в нашем приложении
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}


