import { useCallback, useState } from "react"
import Age from "./age"
import Salary from "./Salary"
import Button from "./Button"

export default function CallBack() {

    const [age, setAge] = useState(20)
    const [salary, setSalary] = useState(5000)

    const ageUp = useCallback(() => setAge(age + 1), [age])

    const salaryUp = useCallback(() => setSalary(salary + 1000), [salary])

    return (
        <>
            <div className=".red">
                <Age age={age} />
                <Salary salary={salary} />
            </div>

            <div>
                <Button text={"age up"} action={ageUp} />
                <Button text={"Salary up"} action={salaryUp} />
            </div>
        </>

    )
}

