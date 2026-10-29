
import React from "react";
import "./MailBox.css";

function MailBox(props) {
    const unreadMessages = 0;

    return (
        <div className="mailbox-container">
            <div className="mailbox-card">
                <h1 className="mailbox-title">안녕하세요!</h1>

                {unreadMessages > 0 ? (
                    <h2 className="mailbox-alert positive">
                        현재 <span className="highlight">{unreadMessages}</span>개의 읽지 않은 메시지가 있습니다.
                    </h2>
                ) : (
                    <h2 className="mailbox-alert empty">
                        모든 메시지를 읽었습니다. 즐거운 하루 되세요! ✨
                    </h2>
                )}

            </div>
        </div>
    );
}

export default MailBox;
