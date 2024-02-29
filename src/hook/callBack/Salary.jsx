import React from "react";

function Salary({ salary }) {

    console.log("Reander salary componet");
    return (
        <h3>{salary}</h3>
    )
}

export default React.memo(Salary)