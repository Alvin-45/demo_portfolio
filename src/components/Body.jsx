import React from 'react'
import Image from './Image'

function Body() {
  return (
    <>
    <div className="bodypart" id="home" style={{paddingTop:'100px'}}>
        <div className="w-100 text-center d-flex justify-content-center flex-column">
            <h1 className='name'>Hello! I’m Aswanth Viswanathan</h1>
            <h5 className="text-dark">"Designing Experiences: Where Vision Meets Interaction"</h5>
            <span className="text-secondary">Scroll down to see my works <i className="fa-solid fa-angles-down fa-xs"></i></span>
        </div>
        <Image/>
    </div>
    </>
  )
}

export default Body