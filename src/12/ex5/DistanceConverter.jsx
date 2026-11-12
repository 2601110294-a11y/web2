import React, { useState } from "react";
import DistanceInput from "./DistanceInput";

function DistanceConverter() {
    const [distance, setDistance] = useState('');
    const [unit, setUnit] = useState("km");

    const handleKmChange = (distance) => {
        setDistance(distance);
        setUnit("km");
    };

    const handleMileChange = (distance) => {
        setDistance(distance);
        setUnit("mile");
    };

    const km = unit === "mile"
        ? tryConvert(distance, toKm)
        : distance;

    const mile = unit === "km"
        ? tryConvert(distance, toMile)
        : distance;

    return (
        <div>
            <DistanceInput
                unit={"km"}
                distance={km}
                onDistanceChange={handleKmChange}
            />

            <DistanceInput
                unit={"mile"}
                distance={mile}
                onDistanceChange={handleMileChange}
            />
        </div>
    );
}

function toKm(mile) {
    return mile * 1.609344;
}

function toMile(km) {
    return km / 1.609344;
}

function tryConvert(distance, convert) {
    const input = parseFloat(distance);

    if (Number.isNaN(input)) {
        return "";
    }

    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;

    return rounded.toString();
}

export default DistanceConverter;