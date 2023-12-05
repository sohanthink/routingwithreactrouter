import React, { useState } from 'react'

const Home = () => {
    let [count, setCount] = useState(10)
    let handleIncrement = () => {
        count++
        setCount(count)
    }
    let handleDecrement = () => {
        count--
        setCount(count)
    }
    return (
        <>
            <h1>Home page</h1>
            <button onClick={handleIncrement}>Increment</button>
            <h1>{count}</h1>
            <button onClick={handleDecrement}>decrement</button>
        </>
    )
}

export default Home