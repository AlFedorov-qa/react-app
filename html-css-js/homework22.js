"use strict";

// Упражнение 1
let arr = [2, 'd', 5, {}, 6, 12];

function getSumm(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            sum += arr[i];
        }        
    }
    return sum;
}

console.log(getSumm(arr));



// Упражнение 3
// В корзине один товар
let cart = [4884];

function addToCart(productId) {
    let hasInCart = cart.includes(productId);

    if(hasInCart) return;

    cart.push(productId);
}

function removeFromCart(productId) {
    cart = cart.filter(function(id) {
        return id !== productId;
    });
}

// Добавили товар
addToCart(3456);
addToCart(3456);

// Удалили товар
removeFromCart(4884);

console.log(cart);