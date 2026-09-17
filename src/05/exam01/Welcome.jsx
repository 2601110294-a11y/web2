import React from "react";

function Welcome(props){
    return(
        <h1 className={`welcome-card ${props.name}`}>
            안녕, {props.name}
        </h1>
    );
}

export default Welcome;