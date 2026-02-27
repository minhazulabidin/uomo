import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import navbarData from '../../../../data/navbarData'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header>
      <nav>
        <Container>
          <div className="flex items-center gap-14 py-7 justify-between">
            <Logo />
            <ul className='flex gap-11.25 font-jost'>
              {
                navbarData.navList.map(item => (
                  <li className='relative' key={item.id}><Link className="text-sm after:content-[''] after:left-0 after:absolute after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-secondary hover:after:w-3/5 after:duration-300" href={item.url}>{item.title}</Link></li>
                ))
              }
            </ul>
            <ul className='flex gap-8'>
              {
                navbarData.icons.map((icon, index) => (
                  <li className='cursor-pointer hover:opacity-75' key={index}>{icon}</li>
                ))
              }
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  )
}
