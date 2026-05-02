import React from 'react'

const Title = ({ title, titleB,className }) => {
    return (
        <h3 className={`text-center text-[35px] font-jost ${className}`}>{title}
            <span className='font-bold ml-3.5 '>{titleB}</span>
        </h3>
    )
}

export default Title