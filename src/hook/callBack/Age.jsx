import React from "react";

function Age({ age }) {

    console.log("Reander age componet ");
    return (
        <h3>{age}</h3>
    )
}

export default React.memo(Age)