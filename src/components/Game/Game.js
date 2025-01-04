import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesRecords from "../GuessesRecords";
import GuessSlots from "../GuessSlots/GuessSlots";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [records, setRecords] = useState([]);

    return (
        <>
            <div className="guess-results">
                <GuessSlots
                    guess={records[0]?.guess}
                    correctGuess={answer}
                    arr={records[0] ? records[0].guess.split("") : []}
                />
                <GuessSlots
                    guess={records[1]?.guess}
                    correctGuess={answer}
                    arr={records[1] ? records[1].guess.split("") : []}
                />
                <GuessSlots
                    guess={records[2]?.guess}
                    correctGuess={answer}
                    arr={records[2] ? records[2].guess.split("") : []}
                />
                <GuessSlots
                    guess={records[3]?.guess}
                    correctGuess={answer}
                    arr={records[3] ? records[3].guess.split("") : []}
                />
                <GuessSlots
                    guess={records[4]?.guess}
                    correctGuess={answer}
                    arr={records[4] ? records[4].guess.split("") : []}
                />
                <GuessSlots
                    guess={records[5]?.guess}
                    correctGuess={answer}
                    arr={records[5] ? records[5].guess.split("") : []}
                />
            </div>
            <GuessInput records={records} setRecords={setRecords} />
        </>
    );
}

export default Game;
