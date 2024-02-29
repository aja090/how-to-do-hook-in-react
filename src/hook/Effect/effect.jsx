import { useEffect, useState } from "react"


export default function Effect() {

    const [inputValue, setInputValue] = useState('')
    const [users, setUsers] = useState([])
    const [filteredUsers, setfilteredUsers] = useState([])
    // Componet lifeCycle

    // Mount --> Update --> UnMount

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
        return () => { return false }

    }, [])  // مرتبط يوز افكت رتباط وثيق باليوزستيت هسه لمن ضفت فاليو واسوي على الكلك حتزيد كلمة ماونت

    useEffect(() => {
        setfilteredUsers(users)
    }, [users])

    useEffect(() => {
        const filter = users.filter(
            users => users.name.toLowerCase().includes(inputValue)
        )
        setfilteredUsers(filter)
    }, [inputValue])

    return (
        <>
            <input id="text" className="search" onInput={(e) => setInputValue(e.target.value)} />
            {filteredUsers?.map(
                users => <h3 key={users.id}>{users.name}</h3>
            )}
        </>

    )
}