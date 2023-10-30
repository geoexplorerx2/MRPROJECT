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
                            <img className='w-full h-full object-cover rounded-full' src={PersonalPhoto} />
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='text-white text-lg mt-10 w-full text-center'>FIRST NAME</div>
                        <div className='text-white text-lg mt-2 w-full text-center'>LAST NAME</div>
                        <div className='text-white text-base mt-2 w-full text-center'>PROPERTY ADVISOR</div>
                        <div className='w-full flex justify-center'>
                            <div className='w-[90%] h-[2px] bg-[rgba(255,255,255,0.3)] mt-3'></div>
                        </div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='w-[90%] h-[50vh] overflow-y-scroll mt-3'>
                            <ul className='w-[80%] list-none mt-5'>
                                <li className='flex'><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={TelePhone} /></div><div className='flex translate-y-[10px] items-center ml-3 text-lg text-white'>+375-29-1603090</div></li>
                                <li className='flex'><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={Email} /></div><div className='flex translate-y-[10px] items-center ml-3 text-lg text-white'>shcherdlovskaya@gmail.com</div></li>
                                <li className='flex'><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={Web} /></div><div className='flex translate-y-[10px] items-center ml-3 text-lg text-white'><a href='https://marielt.by/' target="_blank" rel="noopener noreferrer">marielt.by</a></div></li>
                                <li className='flex'><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={Web} /></div><div className='flex translate-y-[10px] items-center ml-3 text-lg text-white'><a href='https://law.scherdlo@bsu.by' target="_blank" rel="noopener noreferrer">law.scherdlo@bsu.by</a></div></li>
                                <li className='flex'><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={Location} /></div><div className='flex translate-y-[10px] items-center ml-3 text-lg text-white'><a href='https://www.google.com/maps/place/vulica+Ka%C4%BAvaryjskaja+42,+Minsk/data=!4m2!3m1!1s0x46dbc5590845e1b5:0xfb0743446aaa0270?sa=X&ved=2ahUKEwj95-v6rpSCAxWStqQKHT8EDUUQ8gF6BAgNEAA&ved=2ahUKEwj95-v6rpSCAxWStqQKHT8EDUUQ8gF6BAgPEAI' target="_blank" rel="noopener noreferrer">Address</a></div></li>
                                <li className='flex'><div className='w-[30px] h-[30px] rounded-full bg-white flex justify-center items-center mt-4 p-[1px]'><img className='w-full h-full' src={LinkedIn} /></div><div className='flex translate-y-[10px] items-center ml-3 text-lg text-white'><a href='https://www.linkedin.com/in/shcherdlovskaya/' target="_blank" rel="noopener noreferrer">LinkedIn</a></div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SmartPhone
