import React, { useState, useCallback } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ setRecords, records }) {
    const [value, setValue] = useState({ guess: "" });

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(value);
        const newArr = [...records];
        if (newArr.length !== NUM_OF_GUESSES_ALLOWED) {
            newArr.push(value);
            setRecords(newArr);
            setValue({ guess: "" });
        } else {
            alert("troppi risultati fra");
        }
    });

    return (
        <form onSubmit={handleSubmit} className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                value={value.guess}
                onChange={(e) =>
                    setValue({ guess: e.target.value.toUpperCase() })
                }
                pattern="^.{5}$"
                id="guess-input"
                type="text"
            />
        </form>
    );
}

export default GuessInput;
