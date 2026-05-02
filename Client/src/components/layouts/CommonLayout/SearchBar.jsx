"use client"
import { XIcon } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'

const SearchBar = ({ item }) => {
    const [search, setSearch] = useState(false)
    const ref = useRef()

    useEffect(() => {
        console.log(ref)
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setSearch(false)
            }
        }
        window.addEventListener('mousedown', handleClickOutside)
        return () => window.removeEventListener('mousedown', handleClickOutside)
    }, [search])

    return (
        <>
            {
                search ?
                    <XIcon className='cursor-pointer' size={20} onClick={() => setSearch(false)} /> :
                    <button className='cursor-pointer' onClick={() => setSearch(true)}>{item?.icon}</button>
            }

            <div className={`fixed inset-0 z-40 bg-black/10 backdrop-blur-sm transition-opacity duration-300 ${search ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div
                    ref={ref}
                    className={`bg-white w-full h-125 absolute left-0 z-20 shadow-xl transition-transform duration-500 ease-in-out ${search ? 'translate-y-0' : '-translate-y-full'}`}
                >
                
                </div>

            </div>
        </>
    )
}

export default SearchBar