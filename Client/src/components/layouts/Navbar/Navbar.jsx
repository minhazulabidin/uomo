import React from 'react'
import Container from '../Container'
import Logo from './Logo'
import Link from 'next/link'
import NavIcons from './NavIcons'
import navbarData from '../../../../data/navbarData'

export default function Navbar() {
  return (
    <header>
      <nav>
        <Container>
          <div className="flex items-center  py-7 justify-between">
            <div className='flex gap-14'>
              <Logo />
              <ul className='flex gap-11.25 font-jost'>
                {
                  navbarData.navList.map(item => (
                    <li className='relative' key={item.id}><Link className="text-sm after:content-[''] after:left-0 after:absolute after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-primary hover:after:w-3/5 after:duration-300" href={item.url}>{item.title}</Link></li>
                  ))
                }
              </ul>
            </div>
            <NavIcons />
          </div>
        </Container>
      </nav>
    </header>
  )
}
