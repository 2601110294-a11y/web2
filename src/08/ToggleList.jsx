import React, { useState } from "react";
import Toggle from "./Toggle";

function Toggle2() {
    const [isToggleOn, setIsToggleOn] = useState(true);

    // function handleClick() {
    //     setIsToggleOn((isToggleOn) => !isToggleOn);
    // }

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };

    return (
        <button onClick={handleClick}>
            {isToggleOn ? "켜짐" : "꺼짐"}
        </button>
    );
}

function ToggleList() {
    return (
        <div>
            <Toggle />
            <Toggle2 />
        </div>
    );
}

export default ToggleList;