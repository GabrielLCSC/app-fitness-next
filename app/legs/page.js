import React from "react";
import "./style.css";
import Press from "../components/press";
import Legextension from "../components/leg-extension";
import Legcurl from "../components/leg-curl";

export default function Pull() {
  return (
    <div className="legs">
      <h2 className="legs__title">Séance legs</h2>
      <Press />
      <Legextension />
      <Legcurl />
    </div>
  );
}
