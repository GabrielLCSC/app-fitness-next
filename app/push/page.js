import React from "react";
import "./style.css";
import Bench from "../components/bench";
import Inclined from "../components/incliné-guidé";
import Butterfly from "../components/papillon";

export default function Push() {
  return (
    <div className="push">
      <h2 className="push__title">Séance push</h2>
      <Bench />
      <Inclined />
      <Butterfly />
    </div>
  );
}
