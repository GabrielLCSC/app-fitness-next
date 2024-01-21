import React from "react";
import "./style.css";
import Tractions from "../components/tractions";
import HorizontalPull from "../components/tirage-horizontal-guide";
import BicepsCurl from "../components/biceps-curl";

export default function Pull() {
  return (
    <div className="pull">
      <h2 className="pull__title">Séance pull</h2>
      <Tractions />
      <HorizontalPull />
      <BicepsCurl />
    </div>
  );
}
