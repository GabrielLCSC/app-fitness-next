import React from "react";
import "./index.css";

export default function BicepsCurl() {
  return (
    <div className="bench">
      <h3 className="bench__title">Biceps Curl Libre</h3>
      <div className="bench__series">
        <label>Série 1</label>
        <div className="bench__series__inputs">
          <input placeholder="12" type="text" />
          <label>x</label>
          <input type="text" />
          <label>kg</label>
        </div>
      </div>

      <div className="bench__series">
        <label>Série 2</label>
        <div className="bench__series__inputs">
          <input placeholder="12" type="text" />
          <label>x</label>
          <input type="text" />
          <label>kg</label>
        </div>
      </div>

      <div className="bench__series">
        <label>Série 3</label>
        <div className="bench__series__inputs">
          <input placeholder="12" type="text" />
          <label>x</label>
          <input type="text" />
          <label>kg</label>
        </div>
      </div>

      <div className="bench__series">
        <label>Série 4</label>
        <div className="bench__series__inputs">
          <input placeholder="12" type="text" />
          <label>x</label>
          <input type="text" />
          <label>kg</label>
        </div>
      </div>
    </div>
  );
}
