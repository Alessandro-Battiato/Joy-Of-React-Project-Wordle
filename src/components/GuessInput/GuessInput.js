import React, { useState, useCallback } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({ setRecords, records, disableInput }) {
    const [value, setValue] = useState("");

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (records.length < NUM_OF_GUESSES_ALLOWED) {
                setRecords([...records, { guess: value }]);
                setValue("");
            } else {
                alert("Troppi risultati!");
            }
        },
        [records, value, setRecords]
    );

    return (
        <form onSubmit={handleSubmit} className="guess-input-wrapper">
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                value={value}
                disabled={disableInput}
                onChange={(e) => setValue(e.target.value.toUpperCase())}
                pattern="^.{5}$"
                id="guess-input"
                type="text"
            />
        </form>
    );
}

export default GuessInput;
