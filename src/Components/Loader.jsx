import React from 'react'
import logo from "../assets/icons/logo.svg"

const Loader = () => {
    return (
        <div className='loader-contaier h-[100vh]  bg-[#434834] text-[#FAF5FF] flex-col gap-[1rem]  w-[100vw] flex items-center justify-center  ' >


            <div className=' rounded-2xl p-[2rem] animate-bounce  bg-[#faf5ff] ' >
                <img src={logo} className=' ' alt="" />

            </div>

            <h1 className='text-[1.9rem]  font-bold text-[#FAF5FF] ' >Haven Beds</h1>

            <p className='text-[1rem]  italic  text-[white]  ' >A safe Haven for dreaming comfortably...</p>


        </div>
    )
}

export default Loader