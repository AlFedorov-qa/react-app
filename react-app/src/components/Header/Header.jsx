import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import './Header.css'


function Header() {
    const cart = useSelector((store) => store.cart);

    return (
        <header>
            <div className="header">
                <Link to="/">
                    <div className="header-block">
                        <img className="logo" src="./img/favicon.svg" alt="логотип" />
                        <h1 className="header-title"><span className="header-title__orange">Мой</span><span className="header-title__black">Маркет</span></h1>
                    </div>
                </Link>
                <div className="header-icon">
                    <button className="header-icon__heart"></button>
                    <div className={`heart ${cart.likes ? "" : "hidden"}`}>1</div>
                </div>
                <div className="header-icon">
                    <button className="header-icon__btn"></button>
                    <div className={`basket ${cart.products ? "" : "hidden"}`}>1</div>
                </div>
            </div>

        </header >
    )
}

export default Header;


