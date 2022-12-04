import { useSelector, useDispatch } from "react-redux";
import { addProducts, addLikes } from "../reducer/cart-reducer.js";
import { useState } from "react";

import './Saidbar.css'


function Saidbar() {

    const cart = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    const [clicks, setClicks] = useState(0)



    const handleClickProducts = () => {
        dispatch(addProducts());
        setClicks((prevState) => prevState + 1);
    };
    const handleClickLikes = () => dispatch(addLikes());

    return (
        <div className="advertising">
            <div className="price">
                <div className="price-product">
                    <div className="price-block">
                        <div className="price-old">
                            <div className="price-old__text"> 75 990₽</div>
                            <div className="price-discount">
                                <div className="price-discount__text">-8%</div>
                            </div>
                        </div>
                        <button
                            onClick={handleClickLikes}
                            className={`price-heart ${cart.likes === 1 ? "choise-heart" : ""}`}>
                        </button>
                    </div>
                    <div className="price-new">67 990₽</div>
                </div>
                <div className="delivery">
                    <div className="delivery__text">Самовывоз в четверг, 1 сентября — <b>бесплатно</b></div>
                    <div className="delivery__text">Курьером в четверг, 1 сентября — <b>бесплатно</b></div>
                </div>
                <button
                    onClick={handleClickProducts}
                    className={` ${cart.products === 1 ? 'choise-btn' : 'price-btn'}`}
                >
                    {` ${cart.products === 1 ? 'Товар уже в корзине' : 'Добавить в корзину'}`}
                </button>
            </div>
            <div className="advertising-block">
                <div className="advertising__name">Реклама</div>
                <div className="advertising__list">
                    <iframe src="./advertising.html" className="advertising__frame"></iframe>
                    <iframe src="./advertising.html" className="advertising__frame"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Saidbar;