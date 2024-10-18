import React from 'react'

const Animals = () => {

    const allatok = ["kutya", "szamár", "tasmán ördög", "arapapagáj", "tehén", "varjú"]

  return (
    <>
    {allatok.map((allat, idx) => <span>{allat}
        {idx == allatok.length-1 ? "":", "}
      </span>)}

      </>
  )
}

export default Animals