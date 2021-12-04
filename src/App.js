import React from "react"
let number = 0
let addButton = () => {
    number += 1
}
let minusButton = () => {
    number -= 1
}
const App = () => {
    return (
        <div className="parent">
            <span className="red">{number}</span>
            <button onClick={addButton}>+</button>
            <button onClick={minusButton}>-</button>
        </div>
    )
}

export default App