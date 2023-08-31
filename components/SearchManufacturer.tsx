"use client"

import {Combobox, Transition} from '@headlessui/react'
import { useState, Fragment } from 'react'
import { manufacturers } from '../constants/constants'
import Image from 'next/image';

interface Props {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

const SearchManufacturer = ({ manufacturer, setManufacturer }: Props) => {
    const [query, setQuery] = useState('')
    const filteredManufacturers = query === '' 
        ? manufacturers 
        : manufacturers.filter((item) => {
            return (
                item.toLowerCase()
                .replace(/\s+/g, "")
                .includes(query.toLowerCase().replace(/\s+/g, ""))
            )
        })

    return (
        <div className = "search-manufacturer">
            <Combobox
                value = {manufacturer}
                onChange = {setManufacturer}
            >
                <div className = "relative w-full">
                    <Combobox.Button className = "absolute top-[14px]">
                        <Image
                            src = "/car-logo.svg"
                            alt = "Logo"
                            width = {20}
                            height = {20}
                            draggable = {false}
                            className = "ml-4 select-none"
                        />
                    </Combobox.Button>

                    <Combobox.Input
                        className = "search-manufacturer__input"
                        placeholder = "Volkswagen"
                        displayValue = {(manufacturer: string) => manufacturer}
                        onChange = {(e) => setQuery(e.target.value)}
                    />

                    <Transition
                        as = {Fragment}
                        leave = "transition ease-in duration-100"
                        leaveFrom = "opacity-100"
                        leaveTo = "opacity-0"
                        afterLeave = {() => setQuery('')}
                    >
                        <Combobox.Options className = "absolute w-full z-[1000] h-[25rem] bg-white shadow-lg overflow-y-scroll">
                            {filteredManufacturers.map((item) => {
                                    return (
                                        <Combobox.Option
                                            key = {item}
                                            value = {item}
                                            className = {({ active }) => `
                                            relative search-manufacturer__option
                                            ${active ? "bg-primary-blue text-white" : "text-gray-900"}
                                            `}
                                        >
                                             {({ active, selected }) => (
                                                <li
                                                    className={`${
                                                    active ? 'bg-primary-blue text-white' : 'bg-white text-black'
                                                    }`}
                                                >
                                                    {selected && <div></div>}
                                                    {item}
                                                </li>
                                                )}
                                        </Combobox.Option>
                                    )
                                })
                            }
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer