import { useCurrentDate } from "@kundinos/react-hooks";
import './Footer.css';


function Footer() {

    const currentDate = useCurrentDate();

    const fullYear = currentDate.getFullYear();

    return (
        <footer className="footer">
                <div className="footer__container">
                    <div className="footer__info">
                        <p>
                            <b>&#169; ООО «<span className="footer__info-orange">Мой</span>Маркет», 2018-{`${fullYear}`}.</b>
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
    )
}


export default Footer;