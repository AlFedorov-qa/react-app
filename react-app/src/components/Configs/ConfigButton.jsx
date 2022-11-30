import "./ConfigButton.css"


function Button(props) {

    const { configuration, actived, ...restProps } = props;
    const className = `button ${actived ? "button_actived" : ""}`;


    return(
        <button {...restProps} className={className}>
            {configuration.memory}
        </button>
    );
}

export default Button;