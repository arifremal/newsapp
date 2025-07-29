import React, { Component } from 'react'
import loading from '../../../newsapp/src/loading.gif'

const Spinner= (props)=>{
  
    return (
      <div className='text-center' >
        <img src={loading} alt="" />
      </div>
    )

}

export default Spinner