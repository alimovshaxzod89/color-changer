import React, { useState } from 'react';

const BackgroundColor = ({ updateColor, colors }) => {
  const [customColor, setCustomColor] = useState('');

  const handleColorClick = (color) => {
    updateColor(color);
  };

  const handleInputChange = (e) => {
    setCustomColor(e.target.value);
  };

  const handleApplyClick = () => {
    updateColor(customColor);
  };

  return (
    <div className="color-selector">
      <h2>Orqa fon rangini tanlang:</h2>
      <div className="colors">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color"
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>
      <input
        type="text"
        value={customColor}
        onChange={handleInputChange}
        placeholder="#RRGGBB"
      />
      <button onClick={handleApplyClick}>Qo'llash</button>
    </div>
  );
};

export default BackgroundColor;
