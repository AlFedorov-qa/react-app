import './Saidbar.css'


function Saidbar() {

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
                    <iframe src="./advertising.html" className="advertising__frame"></iframe>
                    <iframe src="./advertising.html" className="advertising__frame"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Saidbar;