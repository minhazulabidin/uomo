import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../../../public/images/logo.png'

const Logo = () => {
    return (
        <Link href="/">
            <Image src={logo} alt="UOMO-Logo" width={100} height={100} className="w-2/4" />
        </Link>
    )
}

export default Logo