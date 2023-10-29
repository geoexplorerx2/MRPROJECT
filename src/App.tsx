import React from 'react'
import useWindowSize from './hooks/useWindowSize'
import Desktop from './Components/Desktop'
const App = () => {
  const { width, height } = useWindowSize()
  return (
    <div className='w-full min-h-screen relative'>
      <Desktop/>
    </div>
  )
}

export default App
