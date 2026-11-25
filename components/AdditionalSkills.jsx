const AdditionalSkills = () => {
   
  return (
    <div loading="lazy" className='flex flex-col justify-center items-center h-fit w-screen font-cfMed font-light text-[0.5rem] sm:text-md xl:text-2xl text-nowrap relative text-gray-50 dark:text-gray-800'>
    <div className='overflow-hidden flex items-center h-8 sm:h-8 md:h-12 lg:h-12 xl:h-16 py-3 w-screen absolute rotate-6 bg-blue-600 dark:bg-[rgb(65,176,255)] z-20'>
      <div className='flex w-max will-change-transform animate-marquee'>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i}>&nbsp;COMMUNICATION &nbsp;&bull; TEAM WORK&nbsp;&bull; ADAPTIBILITY&nbsp;&bull; PROBLEM SOLVER&nbsp;&bull; TIME MANAGEMENT&nbsp;&bull; LEARNING ATTITUDE&nbsp;&bull;&nbsp;</span>
        ))}
      </div>
    </div>
    <div className='overflow-hidden flex items-center h-8 sm:h-8 md:h-12 lg:h-12 xl:h-16 py-3 absolute w-screen bg-[rgba(91,146,255,0.9)] dark:bg-[rgba(63,172,255,0.54)] z-10'>
      <div className='flex w-max will-change-transform animate-marquee2'>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i}>&nbsp;COMMUNICATION &nbsp;&bull; TEAM WORK&nbsp;&bull; ADAPTIBILITY&nbsp;&bull; PROBLEM SOLVER&nbsp;&bull; TIME MANAGEMENT&nbsp;&bull; LEARNING ATTITUDE&nbsp;&bull;&nbsp;</span>
        ))}
      </div>
    </div>
    </div>
  )
}

export default AdditionalSkills