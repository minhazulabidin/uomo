import Container from '@/components/layouts/Container'
import Image from 'next/image'
import React from 'react'
import womanCatImage from "../../../../public/images/womanCategoryImage.png"
import skinProImage from "../../../../public/images/skinProductImage.png"

import Link from 'next/link'

const TrendyCategory = () => {
  return (
    <section className='mt-25'>
      <Container>
        <div className='flex gap-7.5'> 
          <div className='w-2/4 h-99.5 relative group'>
            <Image src={womanCatImage} alt='woman category image' className='w-full h-full object-cover z-10' />
            <div className='absolute bottom-12.5 left-12.5 z-30'>
              <h3 className='font-medium font-jost text-lg text-white'>STARTING AT $19</h3>
              <h2 className='font-medium font-jost text-[26px] text-white'>Women’s T-Shirts</h2>
              <Link
                href="#"
                className="after:bg-white font-jost relative mt-6 cursor-pointer text-sm after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-3/5 text-white"
              >
                SHOP NOW
              </Link>
            </div>
            <div className='absolute z-20 w-full h-full bg-[#D6001C] top-0 group-hover:opacity-80 opacity-0 transition-all duration-300 ease-in-out'></div>
          </div>
          <div className='w-2/4 h-99.5 relative group'>
            <Image src={skinProImage} alt='woman category image' className='w-full h-full object-cover z-10' />
            <div className='absolute bottom-12.5 left-12.5 z-30'>
              <h3 className='font-medium font-jost text-lg text-white'>STARTING AT $19</h3>
              <h2 className='font-medium font-jost text-[26px] text-white'>Women’s T-Shirts</h2>
              <Link
                href="#"
                className="after:bg-white font-jost relative mt-6 cursor-pointer text-sm after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-3/5 text-white"
              >
                SHOP NOW
              </Link>
            </div>
            <div className='absolute z-20 w-full h-full bg-[#D6001C] top-0 group-hover:opacity-80 opacity-0 transition-all duration-300 ease-in-out'></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TrendyCategory