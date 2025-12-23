"use client";

import { useState } from "react";

export default function SettingsMenu() {
  const [color, setColor] = useState("#000000");

  const changeBackground = (value) => {
    setColor(value);
    document.body.style.background = value;
  };

  return (
    <div style={{ width: 250 }}>
      <h3 style={{ marginBottom: 10 }}>Instellingen</h3>

      <div style={{ marginBottom: 20 }}>
        <label style={{ display: "block", marginBottom: 6 }}>
          Achtergrondkleur
        </label>
        <input
          type="color"
          value={color}
          onChange={(e) => changeBackground(e.target.value)}
          style={{
            width: "100%",
            height: 40,
            border: "none",
            borderRadius: 6,
            cursor: "pointer"
          }}
        />
      </div>
    </div>
  );
}
