import Link from 'next/link'
import React from 'react'

const Btn = ({ href, title, className }) => {
    return (
        <Link
            href={href}
            className={`after:bg-primary font-jost relative mt-6 cursor-pointer text-sm after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-0 after:duration-300 after:content-[''] hover:after:w-3/5 ${className}`}
        >
            {title}
        </Link>
    )
}

export default Btn