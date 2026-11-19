
import React from "react";
import "./Card.css";

function Card(props) {
    const { title, backgroundColor, children } = props;

    return (
        <div className="Card" style={{ backgroundColor }}>
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
}

export default Card;
