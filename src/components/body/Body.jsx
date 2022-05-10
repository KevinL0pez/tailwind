import React from 'react'
import homero from '../../assets/Images/homero.png'
import gitHub from '../../assets/Images/gitHubLogo.png'
import famSimpson from '../../assets/Images/simpson.jpg'
import perfil from '../../assets/Images/unnamed.jpg'

export const Body = () => {
  return (
    <>
        <div className="flex-col py-8 w-full h-full bg-yellow-400">
            <div className="">
                <img src={homero} alt="" />
            </div>
            <div className='h-0.5 bg-black mx-6 sm:mx-16' ></div>
            <div className='flex-col text-center my-4'>
                <div className='mx-20 my-2 sm:mx-36 bg-orange-500 rounded-xl'>
                    <button type="button" className='py-4 w-full h-full text-lg font-mono '>About Me</button>
                </div>
                <div className='mx-20 my-2 sm:mx-36 bg-orange-500 rounded-xl'>
                    <button type="button" className='py-4 w-full h-full text-lg font-mono'>Briefcase</button>
                </div>
                <div className='mx-20 my-2 sm:mx-36 bg-orange-500 rounded-xl'>
                    <button type="button" className='py-4 w-full h-full text-lg font-mono'>Projects</button>
                </div>
            </div>
            <div className='h-0.5 bg-black mx-6 sm:mx-16' ></div>
            <div className='flex justify-center'>
                <a href="https://github.com/KevinL0pez/tailwind.git">
                    <img src={gitHub} alt="" className='w-48 h-48 sm:w-56 sm:h-56' />
                </a>
            </div>
            <div className='h-0.5 bg-black mx-6 sm:mx-16' ></div>
            <div className='flex justify-center mx-6 my-4'>
                <img src={famSimpson} alt=""  className='w-80 sm:w-90 h-42'/>
            </div>
            <div className='h-0.5 bg-black mx-6 sm:mx-16' ></div>
            <div className='flex w-full justify-center py-6 text-center items-center'>
                <img src={perfil} alt="" className='rounded-full w-12 h-12 '/>
                <p className='text-3xl font-semibold font-sans mx-2' >Kevin López</p>
            </div>
        </div>
    </>
  )
}
