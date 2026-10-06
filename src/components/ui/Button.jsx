import "./Button.css";
function Button(props) {
    return (
        <div className="button-container">
            <button className="main-button" >
                {props.text}
            </button>
            {props.helper &&(<small className="button-helper">{props.helper}</small>)}
        </div>
    );
}
export default Button;