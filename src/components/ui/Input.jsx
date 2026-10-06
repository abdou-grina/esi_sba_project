import "./Input.css";
function Input(props) {
  return (
    <div className="input-container">

      {/* LABEL */}
      {props.label && <label className="input-label">{props.label}</label>}

      {/* INPUT BOX WRAPPER (for icon + input together) */}
      <div className="input-wrapper">

        {/* LEFT ICON */}
        {props.iconLeft && <span className="icon-left" onClick={props.oniconLeftClick} style={{cursor: props.oniconLeftClick ? "pointer" : "default"}}>{props.iconLeft}</span>}
        
        {/* INPUT */}
        <input
          type={props.type || "text"}
          placeholder={props.placeholder}
          value={props.value}
          onChange={props.onChange}
          className="input-field"
          />
        
          {/* RIGHT ICON */}
          {props.iconRight && <span className="icon-right">{props.iconRight}</span>}
      </div>

      {/* HELPER TEXT */}
      {props.helper && !props.error && (
        <small className="helper-text">{props.helper}</small>
      )}

      {/* ERROR TEXT */}
      {props.error && (
        <small className="error-text">{props.error}</small>
      )}

    </div>
  );
}

export default Input;