import { useState } from "react"
import User from "./User"
import UserContext from "./HelperContext"

export default function UseContext() {

    const [userOne, setUserOne] = useState("Aseel")

    const userValue = { userOne, setUserOne }
    return (

        <UserContext.Provider value={userValue}>
            <User />
        </UserContext.Provider>
    )
}