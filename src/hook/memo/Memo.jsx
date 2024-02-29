import { useMemo, useState } from "react"

export default function Memo() {

    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const changeOne = () => setCounter1(prev => prev + 1)
    const changeTwo = () => setCounter2(prev => prev + 1)

    const isEven = useMemo(() => {

        let i = 0
        while (i < 2000000099) i++

        return counter1 % 2 === 0

    }, [counter1]) // الفايده منه هوه نخلي يجري عملية بس من اطاب منه ينفذ فاكشن و يعتمد على كاونتر وان

    return (

        <div>
            <button onClick={changeOne}>{counter1}</button>
            {isEven ? "Even" : "Odd"}
            <button onClick={changeTwo}>{counter2}</button>
        </div>
    )
}

