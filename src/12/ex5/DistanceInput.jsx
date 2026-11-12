import React from "react";
import "./DistanceConverter.css"

const unitNames = {
    km: "킬로미터",
    mile: "마일"
};

function DistanceInput(props) {
    const handleChange = (event) => {
        props.onDistanceChange(event.target.value);
    };

    return (
        <div>
            <legend>
                {unitNames[props.unit]} 입력:
            </legend>
            <input
                value={props.distance}
                onChange={handleChange}
                placeholder={`${unitNames[props.unit]}를 입력하세요`}
            />
        </div>
    );
}

export default DistanceInput;