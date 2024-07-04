import React, { useState } from 'react';
import BackgroundColor from './components/BackgroundColor';
import TextColor from './components/TextColor';
import './App.css';

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#6600ff', '#ff6600', '#00590e', '#ff99cc'];
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [textColor, setTextColor] = useState('black');
  const [colorHistory, setColorHistory] = useState([]);

  const updateBackgroundColor = (color) => {
    setBackgroundColor(color);
    addToHistory('background', color);
    console.log(colorHistory);
  };

  const updateTextColor = (color) => {
    setTextColor(color);
    addToHistory('text', color);
    console.log(colorHistory);

  };

  const addToHistory = (type, color) => {
    const newEntry = {
      type,
      color,
      time: new Date().toLocaleString()
    };
    setColorHistory([...colorHistory, newEntry]);
    console.log(colorHistory);

  };

  return (
    <div className="app" style={{ backgroundColor: backgroundColor, color: textColor }}>
      <h1>Rang o'zgartiruvchi ilova</h1>
      <BackgroundColor colors={colors} updateColor={updateBackgroundColor} />
      <TextColor colors={colors} updateColor={updateTextColor} />
      <div className="history">
        <h2>Ranglar tarixi:</h2>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <ul style={{textAlign: 'start'}}>
            {colorHistory.map((entry, index) => (
              <li key={index}>
                <span style={{color: entry.color}}>{entry.color}</span> - {entry.type} uchun, {entry.time}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
