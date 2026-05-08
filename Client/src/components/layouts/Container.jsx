import React from 'react'

export default function Container({ children,className }) {
    return (
        <div className={`max-w-352.5 mx-auto ${className}`}>{children}</div>
    )
}
