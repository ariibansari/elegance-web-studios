import React from 'react'
import styles from './reasons.module.css'
import Triangle from './svgs/Triangle'
import Polygon from './svgs/Polygon'
import Elipse from './svgs/Elipse'
import Rectangle from './svgs/Rectangle'

const Reasons = () => {
    return (
        <section id={styles.reasonsContainer}>
            <div className={styles.topSection}>
                <div className={styles.left}>
                    <h2>Why Does Your Event Planning Business Need a Website?</h2>
                    <p>In the fast-paced world of event planning, making a lasting impression matters. Your website serves as a captivating portfolio, allowing you to showcase your past triumphs and demonstrate your expertise in orchestrating extraordinary occasions.</p>
                    <p>Imagine your potential clients gaining access to your services and portfolio anytime, anywhere. A well-crafted website ensures you're a mere click away, even during their hectic schedules. Convenience is key to winning their business.</p>
                </div>
                <div className={styles.right}>
                    <img src='./images/event-planning-team-working.jpg' alt='event planning team' />
                </div>
            </div>
            <div className={styles.bottomSection}>
                <div className={`${styles.reason}`}>
                    <div className={styles.icon}>
                        <Rectangle className={styles.mainIcon} />
                        <span className={styles.circle} />
                    </div>
                    <h3>
                        Visual
                        <br />
                        Storytelling
                    </h3>
                    <p>Engage Your Audience with Visual Storytelling Reflecting Your Brand's Unique Journey and Values.</p>
                </div>

                <div className={`${styles.reason}`}>
                    <div className={styles.icon}>
                        <Elipse className={styles.mainIcon} />
                        <span className={styles.circle} />
                    </div>
                    <h3>
                        24/7
                        <br />
                        Accessibility
                    </h3>
                    <p>Unleash Brand Engagement, and Connection Anytime, Anywhere, Empowering Your Audience.</p>
                </div>

                <div className={`${styles.reason}`}>
                    <div className={styles.icon}>
                        <Triangle className={styles.mainIcon} />
                        <span className={styles.circle} />
                    </div>
                    <h3>
                        Credibility
                        <br />
                        Boost
                    </h3>
                    <p>Boost Your Brand's Credibility with Professional Websites that Instill Trust and Confidence.</p>
                </div>

                <div className={`${styles.reason}`}>
                    <div className={styles.icon}>
                        <Polygon className={styles.mainIcon} />
                        <span className={styles.circle} />
                    </div>
                    <h3>
                        Distinctive
                        <br />
                        Branding
                    </h3>
                    <p>Foster a Digital Identity Aligned with Your Brand's Core, Values, Mission, and Vision.</p>
                </div>
            </div>
        </section>
    )
}

export default Reasons