import React, { useState } from 'react';
import styles from './button.module.css';

const Button = ({ variant = 'primary', onClick }) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
    };

    return (
        <button
            className={styles[`button`]}
            onMouseMove={handleMouseMove}
            onClick={onClick}
        >
            Get The Party Started
            < span
                className={styles['dot']}
                style={{ left: position.x, top: position.y }}
            ></span >
        </button >
    );
};

export default Button;
