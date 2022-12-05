import './PageProduct.css';


function PageProduct() {
    return (

        <div className="wrapper">
            <header>
                <div className="header">
                    <div className="header-block">
                        <img className="logo" src="./img/favicon.svg" alt="логотип" />
                        <h1 className="header-title"><span className="header-title__orange">Мой</span>Маркет</h1>
                    </div>
                    <div className="header-basket">
                        <button className="header-basket__btn"></button>
                        <div className="counter">
                            <div className="counter__text"></div>
                        </div>
                    </div>
                </div>
            </header>

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
                                <div className="characteristics-color__list">
                                    <label>
                                        <input type="radio" checked name="foto" />
                                        <div className="characteristics-color__image">
                                            <img src="./img/color-1.webp" alt="Красный" />
                                        </div>
                                    </label>
                                    <label>
                                        <input type="radio" checked name="foto" />
                                        <div className="characteristics-color__image">
                                            <img src="./img/color-2.webp" alt="Зеленый" />
                                        </div>
                                    </label>
                                    <label>
                                        <input type="radio" checked name="foto" />
                                        <div className="characteristics-color__image">
                                            <img src="./img/color-3.webp" alt="Розовый" />
                                        </div>
                                    </label>
                                    <label>
                                        <input type="radio" checked name="foto" />
                                        <div className="characteristics-color__image">
                                            <img src="./img/color-4.webp" alt="Синий" />
                                        </div>
                                    </label>
                                    <label>
                                        <input type="radio" checked name="foto" />
                                        <div className="characteristics-color__image">
                                            <img src="./img/color-5.webp" alt="Белый" />
                                        </div>
                                    </label>
                                    <label>
                                        <input type="radio" checked name="foto" />
                                        <div className="characteristics-color__image">
                                            <img src="./img/color-6.webp" alt="Черный" />
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="configuration">
                                <h3 className="configuration__name">Конфигурация памяти: 128 ГБ</h3>
                                <div className="configuration__list">
                                    <label>
                                        <input type="radio" checked name="memory" />
                                        <div className="btn">128 ГБ</div>
                                    </label>
                                    <label>
                                        <input type="radio" checked name="memory" />
                                        <div className="btn">256 ГБ</div>
                                    </label>
                                    <label>
                                        <input type="radio" checked name="memory" />
                                        <div className="btn">512 ГБ</div>
                                    </label>
                                </div>
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

                            <div className="comparison">
                                <h3 className="comparison__title">Сравнение моделей</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Модель</th>
                                            <th>Вес</th>
                                            <th>Высота</th>
                                            <th>Ширина</th>
                                            <th>Толщина</th>
                                            <th>Чип</th>
                                            <th>Объём памяти</th>
                                            <th>Аккумулятор</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>iPhone 11</td>
                                            <td>194 грамма</td>
                                            <td>150.9 мм</td>
                                            <td>75.7 мм</td>
                                            <td>8.3 мм</td>
                                            <td>A13 Bionic chip</td>
                                            <td>до 128 Гб</td>
                                            <td>До 17 часов</td>
                                        </tr>
                                        <tr>
                                            <td>iPhone 12</td>
                                            <td>164 грамма</td>
                                            <td>146.7 мм</td>
                                            <td>71.5 мм</td>
                                            <td>7.4 мм</td>
                                            <td>A14 Bionic chip</td>
                                            <td>до 256 Гб</td>
                                            <td>До 19 часов</td>
                                        </tr>
                                        <tr>
                                            <td>iPhone 13</td>
                                            <td>174 грамма</td>
                                            <td>146.7 мм</td>
                                            <td>71.5 мм</td>
                                            <td>7.65 мм</td>
                                            <td>A15 Bionic chip</td>
                                            <td>до 512 Гб</td>
                                            <td>До 19 часов</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

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
                                        <button className="price-heart"></button>
                                    </div>
                                    <div className="price-new">67 990₽</div>
                                </div>
                                <div className="delivery">
                                    <div className="delivery__text">Самовывоз в четверг, 1 сентября — <b>бесплатно</b></div>
                                    <div className="delivery__text">Курьером в четверг, 1 сентября — <b>бесплатно</b></div>
                                </div>
                                <button className="price-btn">Добавить в корзину</button>
                            </div>
                            <div className="advertising-block">
                                <div className="advertising__name">Реклама</div>
                                <div className="advertising__list">
                                    <iframe src="./advertising.html" class="advertising__frame"></iframe>
                                    <iframe src="./advertising.html" class="advertising__frame"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <section className="review">
                            <div className="review-header">
                                <div className="review-header__wrapper">
                                    <h3 className="review-header__title">Отзывы</h3>
                                    <span className="review-header__count">425</span>
                                </div>
                            </div>

                            <div className="review-section">
                                <div className="review-block">
                                    <img src="./img/review-1.jpeg" className="review-block__photo" alt="фотография автора" />

                                    <div className="review-content">
                                        <h4 className="review-content__name">Марк Г.</h4>
                                        <div className="review-content__rating">
                                            <img src="./img/star-g.svg" className="star" alt="звезда" />
                                            <img src="./img/star-g.svg" className="star" alt="звезда" />
                                            <img src="./img/star-g.svg" className="star" alt="звезда" />
                                            <img src="./img/star-g.svg" className="star" alt="звезда" />
                                            <img src="./img/star-g.svg" className="star" alt="звезда" />
                                        </div>

                                        <div className="review-options">
                                            <div className="review-options__point"><b>Опыт использования:</b> менее месяца</div>

                                            <div className="review-options__point">
                                                <div>
                                                    <b>Достоинства:</b>
                                                </div>
                                                это мой первый айфон после после огромного количества телефонов на андроиде.
                                                всёплавно, чётко и красиво.довольно шустрое устройство, камера весьма
                                                неплохая,ширик тоже
                                                на высоте.
                                            </div>

                                            <div className="review-options__point">
                                                <div>
                                                    <b>Недостатки:</b>
                                                </div>
                                                к самому устройству мало имеет отношение, но перенос данных с андроида - адскаявещь)
                                                а если нужно переносить фото с компа, то это только через itunes, который урезает
                                                качество фотографий исходное
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="separator">
                                    <div className="separator__line"></div>
                                </div>

                                <div className="review-block">
                                    <img src="./img/review-2.jpeg" className="review-block__photo" alt="фотография автора" />

                                    <div className="review-content">
                                        <h4 className="review-content__name">Валерий Коваленко</h4>
                                        <div className="review-content__rating">
                                            <img src="./img/star-g.svg" className="star" alt="звезда" />
                                            <img src="./img/star-g.svg" className="star" alt="звезда" />
                                            <img src="./img/star-g.svg" className="star" alt="звезда" />
                                            <img src="./img/star-g.svg" className="star" alt="звезда" />
                                            <img src="./img/star-b.svg" className="star" alt="звезда" />
                                        </div>

                                        <div className="review-options">
                                            <div className="review-options__point"><b>Опыт использования:</b> менее месяца</div>

                                            <div className="review-options__point">
                                                <div>
                                                    <b>Достоинства:</b>
                                                </div>
                                                OLED экран, Дизайн, Система камер, Шустрый А15, Заряд держит долго
                                            </div>

                                            <div className="review-options__point">
                                                <div>
                                                    <b>Недостатки:</b>
                                                </div>
                                                Плохая ремонтопригодность
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="form-block">
                            <h4 className="form-title">Добавить свой отзыв</h4>
                            <form className="form">
                                <div className="form-cont">
                                    <div className="form-name">
                                        <input type="text" name="name" placeholder="Имя и фамилия" className="input-name" />
                                        <div className="error-name"></div>
                                    </div>
                                    <div className="form-rating">
                                        <input type="number" name="rating" placeholder="Оценка" className="input-rating" />
                                        <div className="error-rating"></div>
                                    </div>
                                </div>
                                <textarea name="text" placeholder="Текст отзыва" className="form-area"></textarea>
                                <button type="submit" className="form-btn">Отправить отзыв</button>
                            </form>
                        </section>
                    </div>
                </main>
            </div>

            <footer className="footer">
                <div className="footer__container">
                    <div className="footer__info">
                        <p>
                            <b>&#169; ООО «<span className="footer__info-orange">Мой</span>Маркет», 2018-2022.</b>
                        </p>
                        <p>
                            Для уточнения информации звоните по номеру
                            <a href="tel:79000000000">+7 900 000 0000</a>,
                        </p>
                        <p>
                            а предложения по сотрудничеству отправляйте на почту
                            <a href="mailto:partner@mymarket.com">partner@mymarket.com</a>
                        </p>
                    </div>
                    <a className="footer__ontop" href="#">Наверх</a>
                </div>
            </footer>
        </div>
    );
}

export default PageProduct;