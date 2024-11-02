import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
  
      <div loading="lazy" className=' pt-4 pb-4 flex flex-row justify-center items-center w-screen bg-slate-300  dark:bg-slate-800 '>

      
      <div className='bi bi-c-circle flex sm:w-2/5 md:w-4/6 lg:w-2/6 xl:w-2/6 justify-center items-center m-2 text-xs sm:text-xs md:text-sm text-gray-950 dark:text-gray-300 z-10'>
        &nbsp;{year}&nbsp; <p className=''>All rights reserved.</p> 
      </div>


           <p className='bg-blue-700 dark:bg-blue-600 mr-2 h-1 w-4/6'></p>

           <div className='flex w-1/7 justify-center items-center my-2 md:mx-10 lg:mx-20'>
           <a href='https://www.linkedin.com/in/sudipmandal/' target="_blank" className='bi bi-linkedin mx-1 sm:mx-4 sm:text-lg md:text-2xl text-gray-700 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-700'></a>
           <a href='https://github.com/Sudipoffice' target="_blank" className='bi bi-github mx-1 sm:mx-4 sm:text-lg md:text-2xl text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100'></a>
           <a href="https://api.whatsapp.com/send?phone=7003071143" target="_blank" className='bi bi-whatsapp mx-1 sm:mx-4 sm:text-lg md:text-2xl text-gray-700 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-500'></a>
           </div>

          
      </div>

  )
}

export default Footer
