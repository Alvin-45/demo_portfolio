import React from 'react'
import img1 from '../assets/img1.png'
import Works from './Works'

function Image() {
  return (
    <>
    <div className="text-center d-flex justify-content-center align-items-center">
            <img src={img1} style={{width:'30%'}} className='text-center mt-5 img1' alt="centee Img" />
        </div>
        <Works/>

    </>
  )
}

export default Image