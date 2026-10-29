import React, { useState } from "react";
import WarningBanner from "./WaringBanner";
import "./MainPage.css";

function MainPage() {
    const [showWarning, setShowWarning] = useState(false);

    const btnListener = () =>{
        setShowWarning(prevShowWaring => !prevShowWaring)
    }
    return(
        <div>
            <WarningBanner warning = {showWarning}/>
            <button onClick = {btnListener}>
                {showWarning? "감추기" : "보이기"}
            </button>
        </div>
    )

}

export default MainPage;