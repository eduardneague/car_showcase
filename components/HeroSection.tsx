"use client"

import Image from 'next/image'
import CustomButton from './CustomButton'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const handleScroll = () => {
    
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className = "hero">
        <motion.div 
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className = "flex-1 pt-36 padding-x mt-[5.5rem]"
        >
            <h1 className = "hero__title leading-[5.5rem]">Effortlessly discover your dream car.</h1>

            <p className = "hero__subtitle">
                Streamline your car rental expeirence with our effortless booking process
            </p>

            <CustomButton
              title = "Explore Cars"
              containerStyles = "bg-primary-blue text-white rounded-full mt-10"
              handleClick = {handleScroll}
            />

            </motion.div>
            <div 
              className = "hero__image-container">
              <motion.div 
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className = "hero__image">
                <Image
                  src= "/hero.png"
                  alt = "hero"
                  fill
                  className = "object-contain select-none"
                  draggable = {false}
                />
              </motion.div>
              <div className = "hero__image-overlay select-none" draggable = {false}/>
            </div>
    </motion.div>
  )
}

export default HeroSection