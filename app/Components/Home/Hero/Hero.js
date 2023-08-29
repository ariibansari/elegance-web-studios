"use client"
import React from 'react'
import styles from './hero.module.css'
import Underline from '../../Extra/Underline'
import Button from '../../Button/Button'

const Hero = () => {

    return (
        <section id={styles.hero}>
            <div id={styles.heroTexture}>
                <img src="./images/dot-texture-dark.png" />
            </div>
            <div id={styles.heroContent}>
                <div id={styles.heroTitleContainer}>
                    <h1>With Our Expert Web Design Services, We Can Elevate Online Presence for Your <br /> Event Planning Brand</h1>
                    <Underline className={styles.customUnderline} mainColor="var(--color-accent)" />
                </div>
                <div className={styles.brand}>
                    <p>
                        Welcome to
                    </p>
                    <h4>
                        ELEGANCE WEB STUDIOS
                        <span />
                    </h4>
                </div>
                <Button
                    text="Get The Party Started"
                />
            </div>
        </section>
    )
}

export default Hero