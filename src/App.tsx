import React from 'react'
import Background from './assets/img/drmakete-lab-hsg538WrP0Y-unsplash.jpg'
import CardBackground from './assets/img/ferdinand-stohr-NFs6dRTBgaM-unsplash.jpg'
import PersonalPhoto from './assets/img/image card.jpeg'
import TelegramQrCode from './assets/img/tgqr.jpeg'
import TelePhone from './assets/img/phone-call.png'
import Email from './assets/img/email.png'
import Web from './assets/img/web.png'
import Location from './assets/img/gps.png'
const App = () => {
  return (
    <div className='w-full min-h-screen relative'>
      <div className='w-full h-screen absolute top-0 left-0 z-0'>
        <img className='w-full h-full object-fill' src={Background} />
      </div>
      <div className='w-full h-screen absolute top-0 left-0 z-10 bg-[rgba(0,0,0,0.6)]'></div>
      <div className='w-full h-screen absolute top-0 left-0 z-20 flex justify-center items-center'>
        <div className='w-[60%] h-[70%] bg-[rgba(255,255,255,0.9)] relative rounded-lg border-[1px] border-[rgba(236,240,241,1)]'>
          <div className='absolute top-0 left-0 z-0 w-full h-full rounded-lg opacity-[0.6]'>
            <img className='w-full h-full object-cover rounded-lg' src={CardBackground} />
          </div>
          <div className='absolute top-0 left-0 z-10 w-full h-full rounded-lg bg-[rgba(0,0,0,0.6)] flex'>
            <div className='w-[50%] h-full flex justify-center items-center'>
              <div className='w-full'>
                <div className='w-full flex justify-center'>
                  <div className='w-[300px] h-[300px] rounded-full bg-white'>
                    {/* <img className='w-full h-full rounded-full' src={PersonalPhoto}/> */}
                  </div>
                </div>
                <div className='w-full text-center'>
                  <div className='text-white text-3xl mt-10'>MARINA</div>
                  <div className='text-white text-3xl mt-3'>SHCHERDLOVSKAYA</div>
                  <div className='text-white text-xl mt-3'>PROPERTY ADVISOR</div>
                </div>
              </div>
            </div>
            <div className='w-[50%] h-full relative'>
              <div className='absolute bottom-0 right-0 flex justify-end'>
                <img className='w-[50%] m-1 rounded-lg' src={TelegramQrCode} />
              </div>
              <div className='w-full h-full'>
                <ul className='w-full m-3 list-none'>
                    <li className='flex'><div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={TelePhone}/></div></li>
                    <li className='flex'><div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={Email}/></div></li>
                    <li className='flex'><div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={Web}/></div></li>
                    <li className='flex'><div className='w-[40px] h-[40px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={Location}/></div></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
