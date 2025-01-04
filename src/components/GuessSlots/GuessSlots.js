import React from "react";
import { range } from "../../utils";

function GuessSlots({ arr }) {
    return (
        <p className="guess">
            {range(0, 5).map((_, i) => (
                <span className="cell" key={crypto.randomUUID()}>
                    {arr[i]}
                </span>
            ))}
            {/*Array.from({ length: 5 }, () => (
                <span className="cell" key={crypto.randomUUID()}></span>
            ))*/}
        </p>
    );
}

export default GuessSlots;
