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
                            {/* <img className='w-full h-full object-cover rounded-full' src={PersonalPhoto} /> */}
                        </div>
                    </div>
                    <div className='w-full'>
                        <div className='text-white text-3xl mt-10 w-full text-center'>MARINA</div>
                        <div className='text-white text-3xl mt-3 w-full text-center'>SHCHERDLOVSKAYA</div>
                        <div className='text-white text-xl mt-3 w-full text-center'>PROPERTY ADVISOR</div>
                    </div>
                    <div className='w-full flex justify-center'>
                        <div className='w-full mt-5'>
                            <div className='w-full flex justify-center'><div className='w-[90%] border-[1px] mt-5 border-[rgba(255,255,255,0.5)]'></div></div>
                            <div className='w-full flex justify-center'>
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
        </div>
    )
}

export default SmartPhone
