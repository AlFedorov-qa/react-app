import './Header.css'


function Header() {

    return (
        <header>
            <div className="header">
                <div className="header-block">
                    <img className="logo" src="./img/favicon.svg" alt="логотип" />
                    <h1 className="header-title"><span className="header-title__orange">Мой</span>Маркет</h1>
                </div>
                <div className="header-basket">
                    <button className="header-basket__btn"></button>
                    <div className="counter">
                        <div className="counter__text">1</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;


