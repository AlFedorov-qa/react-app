"use strict";

// Упражнение 1
const object = {
    userName: `John`,
};

/**
 * Check any object
 * @param {object} nameObject
 * @param {string} key
 * @returns true if object is empty
 */
function isEmpty(nameObject) {
    for (let key in nameObject) {
        return false;
    }
    return true;
}

console.log(isEmpty(object));

// Упражнение 3
let salaries = {
    John: 100000,
    Ann: 160000,
    Pete: 130000,
};

/**
 * Функция увелечивает ЗП на определенный процент 
 * @param {number} perzent Процент увеличения ЗП
 * @param {number} key Заработная плата одного сотрудника
 * @return Возвращает уже увеличенное значение
 */
function raiseSalary(perzent) {
    let newSalaries = {};

    for (let key in salaries) {
        let raise = (salaries[key] * perzent) / 100;

        newSalaries[key] = Math.floor(salaries[key] + raise);
    }

    return newSalaries;
}

/**
 * Функция суммирует значение всех ЗП в одну сумму
 * @param {number} obj значение заработной платы
 * @return выводит сложеное значение
 */
function calsSumm(obj) {
    let summ = 0;

    for (let key in obj) {
        summ += obj[key];
    }

    return summ;
}

let resurlt = raiseSalary (5);
let summ = calsSumm(resurlt);

console.log(resurlt, summ);