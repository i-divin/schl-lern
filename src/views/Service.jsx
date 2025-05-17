import React from 'react'
import Home from './Home'

function Service() {
  return <div className='service'>
    <div className='service-main'>
      <h3>TODAY'S SERVICE</h3>
      <p>There is no active offered service for you today</p>
      <p>Buy a <a href='/Home.jsx'>Product</a></p>
    </div>
  </div>

}

export default Service