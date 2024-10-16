import React, { useState } from 'react'

const Colors = () => {
    const colors = ["gray", "red", "black", "green", "orange", "brown"]
    const [idx, setIdx] = useState(0)

    const toggle = () => {
        if(idx<colors.length) {
            setIdx(idx+1)
        }
        else {
            setIdx(0)
        }
    }

    return (
    <button onMouseOver={toggle} className='colorbtn' style={{background: colors[idx]}}>nigga</button>
  )
}

export default Colors