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
            
    if (name.length === 0) {
        errorName = "Вы забыли указать имя и фамилию";
        inputName.style.borderColor = "#DA4A0C";
    } else if (name.length < 2) {
        errorName = "Имя не может быть короче 2-х символов";
        inputName.style.borderColor = "#DA4A0C";
    } else {
        inputName.style.borderColor = "#888888";
    }

    errorElemName.innerText = errorName;
    errorElemName.classList.toggle("visible", errorName);


    let errorRating = "";

    if (rating < 1 || rating > 5) {
        errorRating = "Оценка должна быть от 1 до 5";
        inputRating.style.borderColor = "#DA4A0C";
    } else {
        inputRating.style.borderColor = "#888888";
    }
 
    errorElemRating.innerText = errorRating;
    errorElemRating.classList.toggle("visible", errorRating);

   localStorage.removeItem("name");
   localStorage.removeItem("rating");
   localStorage.removeItem("text");   
   
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