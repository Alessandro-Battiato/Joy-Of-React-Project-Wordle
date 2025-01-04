import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessInput from "../GuessInput";
import GuessesRecords from "../GuessesRecords";
import GuessSlots from "../GuessSlots/GuessSlots";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [records, setRecords] = useState([]);
    const hasWon = records.find((el) => el.guess === answer);
    const hasLost = records.length === NUM_OF_GUESSES_ALLOWED;

    return (
        <>
            <div className="guess-results">
                {Array.from({ length: NUM_OF_GUESSES_ALLOWED }, (_, index) => (
                    <GuessSlots
                        key={index}
                        guess={records[index]?.guess}
                        correctGuess={answer}
                        arr={records[index]?.guess?.split("") || []}
                    />
                ))}
            </div>

            {hasWon && (
                <div className="happy banner">
                    <p>
                        <strong>Congratulations!</strong> Got it in{" "}
                        <strong>{records.length} guesses</strong>.
                    </p>
                </div>
            )}

            {hasLost && (
                <div className="sad banner">
                    <p>
                        Sorry, the correct answer is <strong>{answer}</strong>.
                    </p>
                </div>
            )}

            <GuessInput
                disableInput={hasWon || hasLost}
                records={records}
                setRecords={setRecords}
            />
        </>
    );
}

export default Game;
