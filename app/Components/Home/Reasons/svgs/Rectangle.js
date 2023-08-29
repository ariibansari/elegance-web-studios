import React from 'react'

const Rectangle = ({ fill = "none", stroke = "var(--color-secondary)", className }) => {
    return (
        <svg className={className} width="50" height="50" viewBox="0 0 50 50" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="49" height="49" stroke={stroke} />
        </svg>
    )
}

export default Rectangle