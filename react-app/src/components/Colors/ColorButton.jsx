import './ColorButton.css'

function ColorButton(props) {
    const { color, actived, ...restProops } = props;
    const className = `btn__image ${actived ? "btn__image_actived" : ""}`;

    return ( 
            <label>
                <input className="btn__input" type="radio" name="image" />
                <div {...restProops} className={className}> <img src={color.image} alt={color.alt} /></div>
            </label>
    )
}

export default ColorButton;