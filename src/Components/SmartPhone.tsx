import React from 'react'
import Location from '../assets/img/gps.png'
import Background from '../assets/img/drmakete-lab-hsg538WrP0Y-unsplash.jpg'
import CardBackground from '../assets/img/ferdinand-stohr-NFs6dRTBgaM-unsplash.jpg'
import PersonalPhoto from '../assets/img/image card.jpeg'
import TelegramQrCode from '../assets/img/tgqr.jpeg'
import TelePhone from '../assets/img/phone-call.png'
import Email from '../assets/img/email.png'
import Web from '../assets/img/web.png'
import LinkedIn from '../assets/img/linkedin.png'
const SmartPhone = () => {
    return (
        <div className='w-full min-h-screen relative'>
            <div className='w-full min-h-screen absolute top-0 left-0 z-0'>
                <img className='w-full min-h-screen' src={Background} />
            </div>
            <div className='w-full min-h-screen absolute top-0 left-0 z-10 bg-[rgba(0,0,0,0.8)]'></div>
            <div className='w-full min-h-screen absolute top-0 left-0 z-20'></div>
            <div className='absolute bottom-0 right-0 z-40 flex justify-end'>
                <img className='w-[20%] m-1 rounded-md' src={TelegramQrCode} />
            </div>
            {/* <<< Content Section >>> */}
            <div className='w-full h-screen absolute top-0 left-0 z-50 flex justify-center overflow-y-scroll'>
                <div className='w-full'>
                    <div className='w-full flex justify-center'>
                        <div className='w-[120px] h-[120px] bg-white rounded-full translate-y-[30px]'>
                            {/* <img className='w-full h-full object-cover rounded-full' src={PersonalPhoto} /> */}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='text-white text-xl mt-10 w-full text-center'>FIRST NAME</div>
                        <div className='text-white text-xl mt-2 w-full text-center'>LAST NAME</div>
                        <div className='text-white text-lg mt-2 w-full text-center'>PROPERTY ADVISOR</div>
                        <div className='w-full flex justify-center'>
                            <div className='w-[90%] h-[2px] bg-[rgba(255,255,255,0.3)] mt-3'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SmartPhone
