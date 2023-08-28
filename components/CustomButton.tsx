"use client"

import Image from 'next/image'
import { useState, MouseEventHandler } from 'react'
import { Type } from 'typescript'

interface Props {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

const CustomButton = ({title, containerStyles, handleClick, btnType}: Props) => {
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
    </button>
  )
}

export default CustomButton