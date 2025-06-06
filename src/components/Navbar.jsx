import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className="mycontainer flex justify-around items-center px-4 py-5 h-14">

        <div className="logo font-bold text-white text-2xl">
          <span className='text-green-500'>&lt;</span>
          CWP
          <span className='text-green-500'>LockMate/&gt;</span>
        </div>
        
        <a href='https://github.com/Student-Pukhraj/' target='_blank' > 
        <button  className='text-white bg-green-700 my-5 rounded-full flex justify-between cursor-pointer items-center ring-white ring-1'>
          <img className='invert w-10 p-1' src="/icons/github.svg" alt="github logo" />
          <span  className='font-bold px-2'  >GitHub</span>
        </button> </a>
        </div>
    </nav>
  )
}

export default Navbar
