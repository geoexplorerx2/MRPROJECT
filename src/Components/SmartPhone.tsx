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
            <div className='w-full min-h-screen absolute top-0 left-0 z-20'>
                <div className='w-full'>
                    <div className='w-full flex justify-center'>
                        <div className='w-[199px] h-[200px] mt-10 rounded-full bg-white p-[1px]'>
                            <img className='w-full h-full object-cover rounded-full' src={PersonalPhoto} />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='text-white text-3xl mt-10 w-full text-center'>MARINA</div>
                        <div className='text-white text-3xl mt-3 w-full text-center'>SHCHERDLOVSKAYA</div>
                        <div className='text-white text-xl mt-3 w-full text-center'>PROPERTY ADVISOR</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmartPhone
