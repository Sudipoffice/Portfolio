import React from 'react'
import "./Loading.css"

const Loading = ({imgLoad}) => {
  const [isImageLoaded, setIsImageLoaded] = imgLoad;

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  return (
    
    <div className='flex justify-center items-center h-screen bg-blue-200'>
    <span className="loader"><img className='w-0 h-0' src={"https://sudipoffice.github.io/portfolioImages/images/sudipBW.webp"} onLoad={handleImageLoad} alt=""/></span>
    </div>
  )
}


export default Loading
