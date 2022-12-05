import React from 'react';
import './PageProduct.css';
import Color from '../Colors/Color';
import Config from '../Configs/Config';
import Review from '../Reviews/Review';
import Table from '../Table/Table';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Saidbar from '../Saidbar/Saidbar';
import Form from '../Form/Form';


function PageProduct() {
    return (

        <div className="wrapper">
            
            <Header />

            <div className="wrapper__padding">
                <nav className="breadcrumbs">
                    <div className="breadcrumbs__link">
                        <a href="#">Электроника</a>
                        <span>{'>'}</span>
                        <a href="#">Смартфоны и гаджеты</a>
                        <span>{'>'}</span>
                        <a href="#">Мобильные телефоны</a>
                        <span>{'>'}</span>
                        <a href="#">Apple</a>
                    </div>
                </nav>
                <div className="product">
                    <h1 className="product-title">Смартфон Apple iPhone 13, синий</h1>
                    <div className="product-photos">
                        <img src="./img/image-1.webp" className="product-img" alt="Первая картинка" />
                        <img src="./img/image-2.webp" className="product-img" alt="Вторая картинка" />
                        <img src="./img/image-3.webp" className="product-img" alt="Третья картинка" />
                        <img src="./img/image-4.webp" className="product-img" alt="Четвертая картинка" />
                        <img src="./img/image-5.webp" className="product-img" alt="Пятая картинка" />
                    </div>
                </div>
                <main>
                    <div className="wrapper__flex">
                        <div className="characteristics">
                            <div className="characteristics-color">
                                <h3 className="characteristics-color__name"> Цвет товара: cиний</h3>
                                <Color />
                            </div>

                            <div className="configuration">
                                <h3 className="configuration__name">Конфигурация памяти: 128 ГБ</h3>
                                <Config />                               
                            </div>

                            <div className="characteristic">
                                <h3 className="characteristic__name">Характеристики товара</h3>
                                <ul className="characteristic__list">
                                    <li>Экран: <b>6.1</b></li>
                                    <li>Встроенная память: <b>128 ГБ</b></li>
                                    <li>Операционная система: <b>iOS 15</b></li>
                                    <li>Беспроводные интерфейсы: <b>NFC, Bluetooth, Wi-Fi</b></li>
                                    <li>Процессор:<b><a href="https://ru.wikipedia.org/wiki/Apple_A15" target="_blank">Appel
                                        A15 Bionic</a></b></li>
                                    <li>Вес: <b>173 г</b></li>
                                </ul>
                            </div>

                            <div className="description">
                                <h3 className="description__name">Описание</h3>
                                <div className="description__text">
                                    <p>Наша самая cовершенная система двух камер.<br />
                                        Особый взгляд на прочность дисплея.<br />
                                        Чип, с которым всё супербыстро.<br />
                                        Аккумулятор держится заметно дольше.<br />
                                        <i>iPhone 13 - сильный мира всего.</i>
                                    </p>
                                    <p>Мы разработали совершенно новую схему расположения и развернулиобъективы на 45
                                        градусов.
                                        Благодаря этому внутри корпуса поместилась нашалучшая система двух камер с
                                        увеличенной
                                        матрицей широкоугольной камеры. Кроме того, мы освободили место для системы
                                        оптической
                                        стабилизацииизображения
                                        сдвигом матрицы. И повысили скорость работы матрицы насверхширокоугольной камере.
                                    </p>
                                    <p>
                                        Новая сверхширокоугольная камера видит больше деталей в тёмных областяхснимков.
                                        Новая
                                        широкоугольная камера улавливает на 47% больше света для более качественных
                                        фотографий и
                                        видео. Новая
                                        оптическая стабилизация сосдвигом матрицы обеспечит чёткие кадры даже в неустойчивом
                                        положении.
                                    </p>
                                    <p>
                                        Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещенияфокуса и
                                        изменениярезкости. Просто начните запись видео. Режим «Киноэффект» будет удерживать
                                        фокус на объекте
                                        съёмки, создавая красивый эффект размытиявокруг него. Режим «Киноэффект» распознаёт,
                                        когда нужно перевести фокус
                                        на другого человека или объект, который появился в кадре. Теперь ваши видео будут
                                        смотретьсякак настоящее
                                        кино.
                                    </p>
                                </div>
                            </div>
                            <Table />
                        </div>
                        <Saidbar />                      
                    </div>
                    <div>
                        <section className="review">
                            <div className="review-header">
                                <div className="review-header__wrapper">
                                    <h3 className="review-header__title">Отзывы</h3>
                                    <span className="review-header__count">425</span>
                                </div>
                            </div>
                            <Review />                            
                        </section>

                        <Form />
                    </div>
                </main>
            </div>
            <Footer />            
        </div>
    );
}

export default PageProduct;