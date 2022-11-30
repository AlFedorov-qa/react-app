import { useState } from 'react';
import colors from "../Data/Colors";
import ColorButton from './ColorButton';
import './Color.css';

function Color() {
    const [activedColor, setActivedColor] = useState(6);

    function hendleClick(e, image) {
        setActivedColor(image);
    }

    return (
        <div className="characteristics-color__list">
            {colors.map((color) => (
                <ColorButton
                    key={color.image}
                    color={color}
                    actived={color.image === activedColor}
                    onClick={(e) => hendleClick(e, color.image)}
                />          
                
            ))}
        </div>
    );
}

export default Color;