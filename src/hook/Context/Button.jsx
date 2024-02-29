import { useContext } from 'react'
import UserContext from './HelperContext'

function Button() {

    const { setUserOne } = useContext(UserContext)

    return (

        <button onClick={() => { setUserOne('Dylan') }}>Update User</button>
    )
}

export default Button