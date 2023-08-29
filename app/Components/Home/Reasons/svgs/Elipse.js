import React from 'react'

const Elipse = ({ fill = "none", stroke = "var(--color-secondary)", className }) => {
    return (
        <svg className={className} width="50" height="50" viewBox="0 0 50 50" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <circle cx="25" cy="25" r="24.5" stroke={stroke} />
        </svg>
    )
}

export default Elipse