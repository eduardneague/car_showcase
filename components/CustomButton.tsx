"use client"

import Image from 'next/image'
import { useState, MouseEventHandler } from 'react'
import { Type } from 'typescript'

interface Props {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  rightIcon?: string;
  isDisabled?: boolean;
}

const CustomButton = ({title, containerStyles, handleClick, btnType, rightIcon, isDisabled}: Props) => {
  const [state, setState] = useState()

  return (
    <button
      disabled = {false}
      type = {btnType || "button"}
      className = {`custom-btn ${containerStyles}`}
      onClick = {handleClick}
    >
      <span className = {`flex-1`}>
        {title}
      </span>

      {rightIcon &&
        <div className = "relative w-6 h-6">
          <Image
            src = {rightIcon}
            alt = {rightIcon}
            fill
            className = "object-contain select-none"
            draggable = {false}
          />
        </div>
      }
    </button>
  )
}

export default CustomButton