import React from 'react'

const Polygon = ({ fill = "none", stroke = "var(--color-secondary)", className }) => {
    return (
        <svg className={className} width="53" height="50" viewBox="0 0 53 50" fill={fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M0.933731 19.193L26.5 0.618033L52.0663 19.193L42.3008 49.248H10.6992L0.933731 19.193Z" stroke={stroke} />
        </svg>
    )
}

export default Polygon