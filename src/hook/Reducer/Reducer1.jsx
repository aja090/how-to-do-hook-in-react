import { useReducer } from "react"

export default function Reducer1() {

    const intiState = {
        username: "",
        email: "",
        notes: ""
    }

    const reducer = (state, action) => {

        switch (action.type) {
            case "input":
                return { ...state, [action.filed]: action.payLoad };
            case "reset":
                return intiState;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, intiState)

    const handleReset = () => {

        dispatch({ type: "reset" })
    }

    const handleChange = (e) => {

        dispatch({
            type: 'input',
            filed: e.target.name,
            payLoad: e.target.value
        })
    }

    const handleSubmet = (e) => {
        // e.preventDefulte()
        console.log(state)
        return state
    }

    return (

        <form onSubmit={handleSubmet}>
            <label>
                Username :
                <input type="text" name="username" value={state.username} onChange={handleChange} />
            </label>

            <label>
                Email :
                <input type="email" name="email" value={state.email} onChange={handleChange} />
            </label>

            <label>
                Notes :
                <textarea name="notes" value={state.notes} onChange={handleChange}></textarea>
            </label>

            <button type="submit">Submit</button>
            <button type="button" onClick={handleReset}>Reset</button>
        </form>
    )
}













    // const initState = { count: 0 }
    // const reducer = (state, action) => {

    //     switch (action.type) {
    //         case "UP": return { count: state.count + 1 }
    //         case "DOWN": return { count: state.count - 1 }
    //         case "RESET": return { count: 0 }
    //         default: state;
    //     }

    // }
    // const [state, dispatch] = useReducer(reducer, initState)

    // return (
    //     <>
    //         <div>{state.count}</div>
    //         <button onClick={() => { dispatch({ type: "UP" }) }}>UP</button>
    //         <button onClick={() => { dispatch({ type: "DOWN" }) }}>DOWN</button>
    //         <button onClick={() => { dispatch({ type: "RESET" }) }}>RESET</button>
    //     </>
    // )