import React, { useState } from 'react'

const ColorGuessr = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    const [riddleRed] = useState(Math.floor(Math.random()*255+1))
    const [riddleGreen] = useState(Math.floor(Math.random()*255+1))
    const [riddleBlue] = useState(Math.floor(Math.random()*255+1))

    const [showRiddle, setShowRiddle] = useState(false)
    return (
            
        <div style={{background: `rgb(${riddleRed}, ${riddleGreen}, ${riddleBlue})`}}>

            <div style={{
                width: "100px",
                aspectRatio: 1,
                background: `rgb(${red}, ${green}, ${blue})`

            }}>

            </div>


            <label htmlFor="red">R - {red}</label> <br /> 
            <input value={red} 
            onChange={(e) => setRed(Number(e.target.value))}
             type="range" min={0} max={255} id='red' />
            <br />
            <br />
            <label htmlFor="green">G - {green}</label> <br />
            <input value={green} onChange={(e) => setGreen(Number(e.target.value))} type="range" id='green' min={0} max={255} />
            <br />
            <br />
            <label htmlFor="blue">B - {blue}</label> <br />
            <input value={blue} onChange={(e) => setBlue(Number(e.target.value))} type="range" id='blue' min={0} max={255} />

            <button onClick={() => setShowRiddle(true)}>Guess Nigga !</button>
            {showRiddle ?
            <h2>rgb( {riddleRed}, {riddleGreen}, {riddleBlue})</h2>:
            <h2>rgb(?,?,?)</h2>
            }
        </div>
    )
}

export default ColorGuessr