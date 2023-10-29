import React from 'react'
import useWindowSize from './hooks/useWindowSize'
import Desktop from './Components/Desktop'
import SmartPhone from './Components/SmartPhone'
const App = () => {
  const { width, height } = useWindowSize()
  return (
    <div className='w-full min-h-screen relative'>
      {width >= 790 ? <Desktop /> : <SmartPhone />}
    </div>
  )
}

export default App
