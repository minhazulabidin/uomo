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
          <div className="flex items-center gap-[56px]">
            <Logo />
            <ul className='flex gap-11.25'>
              {
                navbarData.navList.map(item => (
                  <li key={item.id}><Link href={item.url}>{item.title}</Link></li>
                ))
              }
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  )
}
