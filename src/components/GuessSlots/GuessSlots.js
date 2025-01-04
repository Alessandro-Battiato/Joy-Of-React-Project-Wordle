import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function GuessSlots({ arr, guess, correctGuess }) {
    console.log(guess, correctGuess);
    return (
        <p className="guess">
            {range(0, 5).map((_, i) => (
                <span
                    className={`cell ${
                        guess && correctGuess
                            ? checkGuess(guess, correctGuess)[i].status
                            : ""
                    }`}
                    key={crypto.randomUUID()}
                >
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
