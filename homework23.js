"use strict";

// Упражнение 1
let number = prompt("Введите число");

let i = setInterval(function () {

    number--;

    console.log(`Осталось ${number}`);

    if (number === 0) {
        clearInterval(i);
        console.log(`Время вышло!`);
    }
}, 1000);

// Упражнение 2
let promise = fetch("https://reqres.in/api/users");

promise.then(function (response) {
    return response.json();
}).then(function (response) {
    let users = response.data;
    let message = '';
    message += `Получили пользователей: ${users.length} \n`;
    users.forEach(function (user) {
        message += `- ${user.first_name} ${user.last_name} (${user.email}) \n`;
    });
    console.log(message);
});


