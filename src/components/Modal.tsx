import React, { useState } from 'react'

const Modal = () => {

    const[isOpen, setIsOpen] = useState(false)
    const toggle = () => { setIsOpen(!isOpen)}
  return (
    <>
    
      {isOpen ?
        <div className='modal'><button onClick={toggle}>Bezá r nigga</button></div>:
        <button onClick={toggle}>Kinyit</button>
    }
    
    </>
  )
}

export default Modal