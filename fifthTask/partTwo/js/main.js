let start = document.getElementById('start');
let optionalExpenses = document.querySelectorAll('optionalexpenses-item');
let budgetValue = document.querySelector('budget-value');
let daybudgetValue = document.querySelector('daybudget-value');
let levelValue = document.querySelector('level-value');
let expensesValue = document.querySelector('expenses-value');
let optionalexpensesValue = document.querySelector('optionalexpenses-value');
let incomeValue = document.querySelector('income-value');
let monthsavingsValue = document.querySelector('monthsavings-value');
let yearsavingsValue = document.querySelector('yearsavings-value');
let yearValue = document.querySelector('year-value');
let monthValue = document.querySelector('month-value');
let dayValue = document.querySelector('day-value');

let expenses = document.getElementsByClassName('expenses-item');
let sum = document.getElementById('sum');
let percent = document.getElementById('percent');
let checkbox = document.querySelector('#savings');
let chooseIncome = document.querySelector('.choose-income'),
    buttons = document.getElementsByTagName('button'),
    accept1 = document.querySelector('.expenses-item-btn'),
    accept2 = document.querySelector('.optionalexpenses-btn'),
    count = document.querySelector('.count-budget-btn');
