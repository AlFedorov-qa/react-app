"use strict";

class AddReviewForm {
    finish() {
        alert('Форма отправлена');
    }
}

class Form extends AddReviewForm {

    constructor(
        formSelector,

        nameSelector,
        ratingSelector,
        textSelector,

        nameErrorSelector,
        ratingErrorSelector,
    ) {
        super();

        this.form = document.querySelector(formSelector);

        this.name = document.querySelector(nameSelector);
        this.nameError = document.querySelector(nameErrorSelector);

        this.rating = document.querySelector(ratingSelector);
        this.ratingError = document.querySelector(ratingErrorSelector);

        this.text = document.querySelector(textSelector);

        this.name.value = localStorage.getItem("name");
        this.rating.value = localStorage.getItem("rating");
        this.text.value = localStorage.getItem("text");

        this.form.addEventListener('submit', this.handleSubmit.bind(this));
        this.window.addEventListener("input", this.handleInput.bind(this));
    }

    handleSubmit(event) {
        event.preventDefault();

        let name = this.name.value;
        let rating = +this.rating.value;

        let errorName = "";

        let isNameError = name.length === 0;
        let isNameError1 = name.length < 2;

        if (isNameError) {
            this.fillErrorName();
        } else if (isNameError1) {
            this.fillErrorName1();
        }else {
            this.fillErrorName2();       
        }

        errorElemName.innerText = errorName;
        errorElemName.classList.toggle("visible", errorName);

        let errorRating = "";

        let isRatingError = rating < 1 || rating > 5;

        if (isRatingError) {
            this.fillErrorRating();
        } else {
            this.fillErrorRating1();
        }

        errorElemRating.innerText = errorRating;
        errorElemRating.classList.toggle("visible", errorRating);


        
        localStorage.removeItem("name");
        localStorage.removeItem("rating");
        localStorage.removeItem("text");
        console.log("Sumbit");

        this.finish();
    }

    handleInput(event) {
        let name = event.target.getAttribute("name");
        let rating = event.target.getAttribute("rating");
        let text = event.target.getAttribute("text");

        localStorage.setItem(name, event.target.value);
        localStorage.setItem(rating, event.target.value);
        localStorage.setItem(text, event.target.value);
    }

    fillErrorName() {
        errorName = "Вы забыли указать имя и фамилию";
        inputName.style.borderColor = "#DA4A0C"; 
    }

    fillErrorName1() {
        errorName = "Имя не может быть короче 2-х символов";
        inputName.style.borderColor = "#DA4A0C";
    }

    fillErrorName2() {
        inputName.style.borderColor = "#888888";
    }



    fillErrorRating() {
        this.errorRating = "Оценка должна быть от 1 до 5";
        this.inputRating.style.borderColor = "#DA4A0C";
    }

    fillErrorRating1() {
        this.inputRating.style.borderColor = "#888888";
    }






}

let review = new AddReviewForm(
    '.form',
    '..input-name',
    '.input-rating',
    '.form-area',
    '.error-name',
    '.error-rating'
);