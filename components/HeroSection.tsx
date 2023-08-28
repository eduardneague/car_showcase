"use client"

import Image from 'next/image'
import CustomButton from './CustomButton'

const HeroSection = () => {
  const handleScroll = () => {
    
  }

  return (
    <div className = "hero">
        <div className = "flex-1 pt-36 padding-x">
            <h1 className = "hero__title leading-[5.5rem]">Book, find or rent a car<br/> faster than ever before!</h1>

            <p className = "hero__subtitle">
                Streamline your car rental expeirence with our effortless booking process
            </p>

            <CustomButton
              title = "Explore Cars"
              containerStyles = "bg-primary-blue text-white rounded-full mt-10"
              handleClick = {handleScroll}
            />

            <div className = "hero__image-container">
              <div className = "hero__image">
                <Image
                  src= "/hero.png"
                  alt = "hero"
                  fill
                  className = "object-contain select-none"
                  draggable = {false}
                />
                <div className = "hero__image-overlay select-none" draggable = {false}/>
              </div>
            </div>

        </div>
    </div>
  )
}

export default HeroSection