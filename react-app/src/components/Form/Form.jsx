import { useState, useEffect } from 'react';
import './Form.css';


function Form() {

    const [name, setName] = useState(localStorage.getItem("name") || '');
    const [score, setScore] = useState(localStorage.getItem("score") || '');
    const [review, setReview] = useState(localStorage.getItem("review") || '');

    const [errorName, setErrorName] = useState();
    const [errorScore, setErrorScore] = useState();        

    const onSubmit = (event) => {
        event.preventDefault();


        if (name.length === 0) {
            setErrorName("Вы забыли указать имя и фамилию");
            return;

        }

        if (name.length < 2) {
            setErrorName("Имя не может быть короче 2-х символов");
            return;
        } else {
            setErrorName();
        }


        if (score < 1 || score > 5 || score === 0 || isNaN(score)) {
            setErrorScore("Оценка должна быть от 1 до 5");
            return;
        } else {
            setErrorScore();
        }
        
        alert("Ваш отзыв был успешно отправлен и будет отображён после модерации")


        localStorage.removeItem("name", name);
        localStorage.removeItem("score", score);
        localStorage.removeItem("review", review);

        event.target.reset();
    }

    useEffect(() => {
        localStorage.setItem("name", name);
        localStorage.setItem("score", score);
        localStorage.setItem("review", review);


    }, [name, score, review])


    return (

        <section className="form-block">
            <h4 className="form-title">Добавить свой отзыв</h4>
            <form className="form" onSubmit={onSubmit}>
                <div className="form-cont">
                    <div className="form-name">

                        <input value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`input-name ${errorName ? "control-name" : ""}`} type="text" name="name" placeholder="Имя и фамилия"
                        />
                        {errorName ? (<div className="error-name">{errorName}</div>) : (<div className="error-name_hidden"></div>)}
                    </div>
                    <div className="form-rating">

                        <input value={score}
                            onChange={(e) => setScore(e.target.value)}
                            className={`input-rating ${errorScore ? "control-rating" : ""}`} type="number" name="rating" placeholder="Оценка"
                        />
                        {errorScore ? (<div className="error-rating">{errorScore}</div>) : (<div className="error-rating_hidden"></div>)}
                    </div>
                </div>
                <textarea value={review}
                    onChange={(e) => setReview(e.target.value)}
                    className="form-area" name="text" placeholder="Текст отзыва"
                />
                <button type="submit" className="form-btn">Отправить отзыв</button>
            </form>
        </section>
    )

}

export default Form;