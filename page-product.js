"use strict";

let form = document.querySelector(".form");

let inputNameBlock = form.querySelector(".form-name");
let inputRatingBlock = form.querySelector(".form-rating");

let inputName = inputNameBlock.querySelector(".input-name");
let inputRating = inputRatingBlock.querySelector(".input-rating");
let inputArea = form.querySelector(".form-area");

let errorElemName = inputNameBlock.querySelector(".error-name")
let errorElemRating = inputRatingBlock.querySelector(".error-rating")

function handleSubmit (event) {
    event.preventDefault();    

    let name = inputName.value;
    let rating = inputRating.value;

    let errorName = "";
    
    let isNameError = name.length === 0;
    let isNameError1 = name.length < 2;

            
    if (isNameError) {
        errorName = "Вы забыли указать имя и фамилию";
        inputName.style.borderColor = "#DA4A0C";        
    } else if (isNameError1) {
        errorName = "Имя не может быть короче 2-х символов";
        inputName.style.borderColor = "#DA4A0C";        
    } else {
        inputName.style.borderColor = "#888888";        
    }

    errorElemName.innerText = errorName;
    errorElemName.classList.toggle("visible", errorName);


    let errorRating = "";

    let isRatingError = rating < 1 || rating > 5;

    if (isRatingError) {
        errorRating = "Оценка должна быть от 1 до 5";
        inputRating.style.borderColor = "#DA4A0C";
    } else {
        inputRating.style.borderColor = "#888888";
    }
 
    errorElemRating.innerText = errorRating;
    errorElemRating.classList.toggle("visible", errorRating);

    if (!isNameError && !isNameError1 && !isRatingError) {
        localStorage.removeItem("name");
        localStorage.removeItem("rating");
        localStorage.removeItem("text"); 
    }

   console.log("Sumbit");
}

function handleInput(event) {
    let name = event.target.getAttribute("name");
    let rating = event.target.getAttribute("rating");
    let text = event.target.getAttribute("text");

    localStorage.setItem(name, event.target.value);
    localStorage.setItem(rating, event.target.value);
    localStorage.setItem(text, event.target.value);
}

inputName.value = localStorage.getItem("name");
inputRating.value = localStorage.getItem("rating");
inputArea.value = localStorage.getItem("text");

form.addEventListener("submit", handleSubmit);
window.addEventListener("input", handleInput);


let advertising = document.querySelector(".advertising");
let choiseButton = document.querySelector(".price > .price-btn");

let header = document.querySelector(".header");
let CartNumber = document.querySelector(".counter__text");

choiseButton.value = +localStorage.getItem("productCount");

choiseButton.addEventListener("click", changeCart);
console.log(+choiseButton.value);

function changeCart(event) {
    if (+choiseButton.value === 0) {
      choiseButton.value += 1;
      console.log(+choiseButton.value);
      message.classList.add("message-cart");
  
      setTimeout(function () {
        message.classList.remove("message-cart");
      }, 3900);
  
      choiseButton.classList.add("sidebar__button_choise");
      CartNumber.classList.add("cart-number-1");
      choiseButton.innerHTML = "Товар уже в корзине";
      localStorage.setItem("productCount", +choiseButton.value);
    } else {
      choiseButton.value -= 1;
      console.log(+choiseButton.value);
      choiseButton.classList.remove("sidebar__button_choise");
      CartNumber.classList.remove("cart-number-1");
      message.classList.remove("message-cart");
      choiseButton.innerHTML = "Добавить в корзину";
      localStorage.removeItem("productCount", +choiseButton.value);
      return;
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {  
    if (+choiseButton.value === 0) {
      choiseButton.classList.remove("sidebar__button_choise");
      CartNumber.classList.remove("cart-number-1");
      choiseButton.innerHTML = "Добавить в корзину";
    } else {
      choiseButton.classList.add("sidebar__button_choise");
      CartNumber.classList.add("cart-number-1");
      choiseButton.innerHTML = "Товар уже в корзине";
      return;
    }
  });
  