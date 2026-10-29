import React from "react";

function Toolbar(props) {
    const {isLoggedIn, loginClick, logoutClick} = props;

    return (
        <div className="toolbar">
            {/* 로그인 상태일 때만 환영 문구를 띄우고, 버튼의 배경을 함께 표시 */}
            {isLoggedIn && (
                <span className="welcome-text">👋 환영합니다!</span>
            )}

            {isLoggedIn ? (
                <button className="auth-btn logout" onClick={logoutClick}>로그아웃</button>
            ) : (
                <button className="auth-btn" onClick={loginClick}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;