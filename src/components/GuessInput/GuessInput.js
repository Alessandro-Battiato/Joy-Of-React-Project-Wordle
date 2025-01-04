import React, { useState, useCallback } from "react";

function GuessInput({ setRecords, records }) {
    const [value, setValue] = useState({ guess: "" });

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        console.log(value);
        const newArr = [...records];
        newArr.push(value);
        setRecords(newArr);
        setValue({ guess: "" });
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
