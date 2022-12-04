import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./IndexPage.css"


function IndexPage() {

    return (
        <div className="wrapper">
            <Header />

            <div className="page">
                <div>
                Здесь должно быть содержимое главной страницы.
                <br />
                Но в рамках курса главная страница используется лишь
                <br />
                в демонстрационных целях
                </div>
                <div className="link">
                    <Link to="/product"><div className="product">Перейти на страницу товара</div></Link>
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default IndexPage;