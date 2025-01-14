import { useState } from "react";
import { SketchPicker } from "react-color";

function InputPicker({ id, label, customColor, handleQrCustom }) {
  const [showPicker, setShowPicker] = useState(false),
    handleShowPicker = () => setShowPicker(!showPicker);

  return (
    <div className="input-picker-box">
      <input
        className="input-picker"
        id={id}
        name={id}
        aria-label={id}
        type="button"
        style={{ background: customColor }}
        onClick={handleShowPicker}
      />
      <label htmlFor={id}>Customize {label}</label>

      <div className="color">
        {showPicker && (
          <SketchPicker
            presetColors={["#000000", "#FFFFFF"]}
            color={customColor}
            onChange={handleQrCustom}
          />
        )}
      </div>
    </div>
  );
}

export default InputPicker;
