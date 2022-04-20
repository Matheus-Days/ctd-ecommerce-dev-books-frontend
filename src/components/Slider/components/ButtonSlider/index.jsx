
import React from "react";
import "./style.scss";
import { ArrowLeft, ArrowRight } from "../../../../icons";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
    {direction === "next" ? <ArrowRight /> : <ArrowLeft />}
      
    </button>
  );
}