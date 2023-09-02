"use client"

import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'
import { motion } from 'framer-motion'

const NavBar = () => {
  return (
    <motion.header 
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className = "w-full absolute z-10 mt-4"
    >
      <nav className = "max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href = "/" className = "flex justify-center items-center">
          <Image
            src = "/logo.svg.png"
            alt = "Showcar Logo"
            width = {118}
            height = {118}
            className = "object-contain"
          />
        </Link>

        <CustomButton
          title = "Sign In"
          btnType = "button"
          containerStyles = "text-primary-blue rounded-full bg-white min-w-[130px]"
        />
      </nav>
    </motion.header>
  )
}

export default NavBar