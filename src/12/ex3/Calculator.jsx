import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";
import "./Calculator.css";

function Calculator() {
    return (
        <div className="calculator-container">
            <TemperatureInput scale={"c"}/>
            <TemperatureInput scale={"f"}/>
        </div>
    );
}

export default Calculator;