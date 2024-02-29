import { useEffect, useRef, useState } from "react";


export default function Ref() {

    const lastP = useRef()

    const moveDown = () => lastP.current.scrollIntoView({
        behavior: "smooth"
    }
    )

    const [reander, setReander] = useState(0)

    const count = useRef(0)

    useEffect(() => {
        count.current = count.current + 1
        console.log(count.current)
    }, [reander])

    return (
        <>
            <div>
                <h1>GO TO PARAGRAF</h1>

                <button onClick={() => setReander(prev => prev + 1)}>Refrish</button>

                <h1>{reander}</h1>

                <button onClick={moveDown}> GO DOWN </button>

                <section>
                    <img src="https://picsum.photos/id/237/200/300" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aliquid? </p>
                </section>

                <section>
                    <img src="https://picsum.photos/id/236/200/300" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aliquid? </p>
                </section>

                <section>
                    <img src="https://picsum.photos/id/235/200/300" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aliquid? </p>
                </section>

                <section>
                    <img src="https://picsum.photos/id/238/200/300" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aliquid? </p>
                </section>

                <section>
                    <img src="https://picsum.photos/id/239/200/300" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aliquid? </p>
                </section>

                <section>
                    <img src="https://picsum.photos/id/234/200/300" />
                    <p ref={lastP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, aliquid? </p>
                </section>
            </div>
        </>
    )
}