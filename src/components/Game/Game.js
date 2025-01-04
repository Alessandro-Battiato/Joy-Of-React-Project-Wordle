import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import GuessesRecords from "../GuessesRecords";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
    const [records, setRecords] = useState([]);

    return (
        <>
            <GuessesRecords data={records} />
            <GuessInput records={records} setRecords={setRecords} />
        </>
    );
}

export default Game;
