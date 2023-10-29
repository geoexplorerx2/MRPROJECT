import React from 'react'
import Background from './assets/img/drmakete-lab-hsg538WrP0Y-unsplash.jpg'
const App = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <div className='w-full h-screen absolute top-0 left-0'>
        <img className='w-full h-full object-fill' src={Background} />
      </div>
    </div>
  )
}

export default App
