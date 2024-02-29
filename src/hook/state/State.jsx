import { useState } from "react"


export default function State() {

    const [posts, setposts] = useState()
    const [postID, setPostID] = useState(0)

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setposts(data))

    const nextPage = () => setPostID(next => next + 1)
    const prevPage = () => setPostID(prev => prev - 1)

    return (
        <div>

            <button onClick={nextPage}>Next page</button>
            <button onClick={prevPage}>Prevues page</button>

            {posts?.map(post =>
                <>
                    {post.id === postID
                        ? (
                            <>
                                <h2>{post.id} : {post.title}</h2>
                                <p>{post.body}</p>
                            </>
                        )
                        : ("")
                    }
                </>
            )}
        </div>
    )
}


















// كيف اسخدام يوز ستيت

// const State = () => {

//     const [value, setValue] = useState(1)

//     let up = () => setValue(prev => prev + 1)
//     let down = () => setValue(prev => prev - 1)

//     return (
//         <>
//             <h1>{value}</h1>
//             <button onClick={up}>+</button>
//             <button onClick={down}>-</button>
//         </>
//     )
// }

// export default State