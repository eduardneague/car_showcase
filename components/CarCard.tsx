"use client"

import {useState} from 'react'
import Image from 'next/image'
import { calculateCarRent, generateCarImageUrl } from '@/utils';
import CustomButton from './CustomButton';
import CarDetails from './CarDetails';
import { CarType } from '@/utils/types';
import { motion } from 'framer-motion'

interface CarCardProps {
    car: CarType
}

const CarCard = ({ car }: CarCardProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const { 
        city_mpg, 
        year, 
        make, 
        model, 
        transmission, 
        drive
    } = car

    const carRent = calculateCarRent(city_mpg, year)
  //d
    return (
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className = "car-card group">
            <div className = "car-card__content">
                <h2 className = "capitalize font-extrabold text-xl">
                    {make} {model}
                </h2>
            </div>

            <p className = "flex mt-6 text-[32px] font-extrabold">
                <span className = "self-start text-[14px] font-semibold ">
                    $
                </span>
                {carRent}
                <span className = "self-end text-[14px] font-medium ">
                    /day
                </span>
            </p>

            <div className = "relative w-full h-40 my-3 object-contain">
                <Image
                    src = {generateCarImageUrl(car)}
                    alt = "cacat"
                    fill
                    priority
                    className = "object-contain select-none"
                    draggable = {false}
                />
            </div>

            <div className = "relative flex w-full mt-2">
                <div className = "flex group-hover:invisible w-full justify-between text-gray-500">

                    <div className = "flex flex-col justify-center items-center gap-2">
                        <Image
                            src = "/steering-wheel.svg"
                            alt = "Steering Wheel"
                            width = {20}
                            height ={20}
                            draggable = {false}
                            className = "select-none object-contain"
                        />
                        <p className = "text-sm">
                            {transmission == 'a' ? 'Automatic' : 'Manual'}
                        </p>
                    </div>

                    <div className = "flex flex-col justify-center items-center gap-2">
                        <Image
                            src = "/tire.svg"
                            alt = "Tire"
                            width = {20}
                            height ={20}
                            draggable = {false}
                            className = "select-none object-contain"
                        />
                        <p className = "text-sm">
                            {drive.toUpperCase()}
                        </p>
                    </div>

                    <div className = "flex flex-col justify-center items-center gap-2">
                        <Image
                            src = "/gas.svg"
                            alt = "Steering Wheel"
                            width = {20}
                            height ={20}
                            draggable = {false}
                            className = "select-none object-contain"
                        />
                        <p className = "text-sm">
                            {city_mpg} MPG
                        </p>
                    </div>

                </div>

                <div className = "car-card__btn-container">
                    <CustomButton
                        title = "View More"
                        containerStyles = "w-full py-[1rem] rounded-full bg-primary-blue text-white text-sm leading-[17px]"
                        rightIcon = "/right-arrow.svg"
                        handleClick = {() => setIsOpen(true)}
                    />
                </div>

            </div>

            <CarDetails
                isOpen = {isOpen}
                closeModal = {() => setIsOpen(false)}
                car = {car}
            />

        </motion.div>
    )
}

export default CarCard