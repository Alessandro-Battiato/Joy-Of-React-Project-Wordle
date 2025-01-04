import React from "react";

function GuessesRecords({ data }) {
    return (
        <div className="guess-results">
            {data.map((el) => (
                <p key={crypto.randomUUID()} className="guess">
                    {el.guess}
                </p>
            ))}
        </div>
    );
}

export default GuessesRecords;
