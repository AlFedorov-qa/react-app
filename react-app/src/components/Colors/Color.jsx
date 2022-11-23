import Colors from "../../Data/Colors";
import './Color.css';

function color() {
    return (
        <div className="characteristics-color__list">
            {Colors.map((color) => (
                <label>
                    <input type="radio" checked name="foto" />
                    <div className="characteristics-color__image">
                        <img src={color.img} alt={color.alt} />
                    </div>
                </label>
            ))}
        </div>
    );
}

export default color;