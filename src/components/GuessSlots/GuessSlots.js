import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessSlots({ arr, guess, correctGuess }) {
    const checkedGuess =
        guess && correctGuess ? checkGuess(guess, correctGuess) : [];

    return (
        <p className="guess">
            {range(0, 5).map((_, i) => (
                <span
                    className={`cell ${checkedGuess[i]?.status || ""}`}
                    key={i}
                >
                    {arr[i]}
                </span>
            ))}
        </p>
    );
}

export default GuessSlots;
