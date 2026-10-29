import React, { useState } from "react";
import Toolbar from "./Toolbar";
import "./LandingPage.css";
import catjpeg from "./cat.jpeg"

function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const loginClick = () => {
        setIsLoggedIn(true);
    };

    const logoutClick = () => {
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Toolbar
                isLoggedIn={isLoggedIn}
                loginClick={loginClick}
                logoutClick={logoutClick}
            />

            <div>
                9장 조건부 렌더링 실습화면입니다.
                <img src={catjpeg} width ={200} />
            </div>
        </div>
    );
}

export default LandingPage;