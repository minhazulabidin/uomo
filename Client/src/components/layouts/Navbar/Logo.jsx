import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/images/logo.png'

const Logo = () => {
    return (
        <Link href="/">
            <Image src={logo} alt="UOMO-Logo" width={100} height={100} className="w-[111.55px] h-[27.01px]" />
        </Link>
    )
}

export default Logo