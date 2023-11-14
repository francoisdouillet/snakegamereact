import { useState } from "react"

const Bonuses = () => {

    const [position, setPosition] = useState(randomPosition())

    function randomPosition() {
        const column = Math.floor(Math.random() * 20) +1
        const row = Math.floor(Math.random() * 20) +1
        return {column, row}
    }
 
    return (
        <div className="bonuses" style={{gridColumn: position.column, gridRow: position.row}}>
            <div className="bonus"></div>
        </div>
    )
}

export default Bonuses;