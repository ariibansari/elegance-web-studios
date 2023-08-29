import React from 'react'

const Triangle = ({ fill = "none", stroke = "var(--color-secondary)", className }) => {
    return (
        <svg className={className} width="58" height="50" viewBox="0 0 58 50" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M1.28719 49L29 1L56.7128 49H1.28719Z" stroke={stroke} />
        </svg>

    )
}

export default Triangle