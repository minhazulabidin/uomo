"use client"
import { XIcon, Search } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import Btn from './Btn'

const SearchBar = ({ item }) => {
    const [search, setSearch] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setSearch(false)
            }
        }
        window.addEventListener('mousedown', handleClickOutside)
        return () => window.removeEventListener('mousedown', handleClickOutside)
    }, [])

    return (
        <>
            <button className='cursor-pointer' onClick={() => setSearch(true)}>
                {item?.icon || <Search size={22} />}
            </button>

            <div className={`fixed inset-0 z-40 bg-black/5 backdrop-blur-sm transition-opacity duration-300 ${search ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}>

                <div
                    ref={ref}
                    className={`bg-white w-full absolute left-0 z-50 shadow-sm transition-transform duration-500 ease-in-out font-jost ${search ? 'translate-y-0' : '-translate-y-full'
                        }`}
                >
                    <div className="max-w-7xl mx-auto px-8 py-16 ">

                        <div className="flex justify-between">
                            <p className="text-sm font-medium text-gray-400 mb-8 uppercase">
                                What are you looking for?
                            </p>
                            <XIcon className='cursor-pointer' size={22} onClick={() => setSearch(false)} />
                        </div>
                        <div className="relative  border-gray-200  mb-10 flex items-center">
                            <input
                                type="text"
                                placeholder="SEARCH PRODUCTS"
                                className="w-full text-sm font-medium outline-none bg-transparent placeholder:text-gray-300 uppercase border-b focus:border-blue-600 peer pb-4"

                            />
                            <Search size={20} className="text-gray-400" />
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-sn font-bold tracking-[0.2em] text-gray-400 uppercase mb-6">
                                Quick links
                            </h4>
                            <ul className="space-y-3">
                                {['New Arrivals', 'Dresses', 'Accessories', 'Footwear', 'Sweatshirt'].map((link) => (
                                    <li key={link}>
                                        <Btn href="#" className="" title={link} />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchBar