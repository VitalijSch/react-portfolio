import './Hero.css'
import { useRef, useState } from 'react'
import frameIcon from './../../assets/images/hero/picture.svg'
import profileIcon from './../../assets/images/hero/profile.png'
import wavingHandIcon from './../../assets/images/hero/waving-hand.svg'
import linkedinIcon from './../../assets/images/hero/linkedin.svg'
import githubIcon from './../../assets/images/hero/github.svg'
import mailIcon from './../../assets/images/hero/mail.svg'
import Header from './../../components/header/Header'

function Hero() {
    const [getLaughingSmiley, setLaughingSmiley] = useState<string>(':)')
    const [getName, setName] = useState<string>('Hello World')
    const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [hasInteracted, setHasInteracted] = useState<boolean>(false)

    const handleMouseEnter = (): void => {
        getNameDelayed()
        trackInteraction()
    }

    const getNameDelayed = (): void => {
        timeoutIdRef.current = setTimeout(() => {
            setName("I'M VITALIJ SCHWAB")
        }, 180)
    }

    const trackInteraction = () => {
        setHasInteracted(true);
    };

    const getLaughingSmileyDelayed = (): void => {
        timeoutIdRef.current = setTimeout(() => {
            setLaughingSmiley(':D')
        }, 200)
    }

    const resetLaughingSmileyDelayed = (): void => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current)
            setLaughingSmiley(':)')
        }
    }

    const resetNameDelayed = (): void => {
        if (timeoutIdRef.current) {
            clearTimeout(timeoutIdRef.current)
            setName("Hello World")
        }
    }

    return (
        <div className="hero">
            <Header />
            <div className="hero__main-container">
                <div className="hero__container">
                    <div className="hero__top">
                        <div className="hero__left">
                            <div
                                className={`hero__button ${hasInteracted ? "hero__button--animation" : ""}`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={resetNameDelayed}
                            >
                                {getName}
                                <img src={wavingHandIcon} alt="waving hand" className="hero__button-icon" />
                            </div>

                            <div className="hero__headline">
                                <span className="hero__headline-text hero__headline-text--lower">F</span>
                                <span className="hero__headline-text hero__headline-text--upper">r</span>
                                <span className="hero__headline-text hero__headline-text--upper">o</span>
                                <span className="hero__headline-text hero__headline-text--upper">n</span>
                                <span className="hero__headline-text hero__headline-text--upper">t</span>
                                <span className="hero__headline-text hero__headline-text--upper">e</span>
                                <span className="hero__headline-text hero__headline-text--upper">n</span>
                                <span className="hero__headline-text hero__headline-text--upper">d</span>
                            </div>
                        </div>

                        <div
                            className="hero__picture"
                            onMouseEnter={getLaughingSmileyDelayed}
                            onMouseLeave={resetLaughingSmileyDelayed}
                        >
                            <img src={frameIcon} alt="frame" className="hero__picture-frame" />
                            <img src={profileIcon} alt="profile" className="hero__picture-profile" />
                            <div className="hero__name">
                                <span>Vitalij</span>
                                <span>{getLaughingSmiley}</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero__bottom">
                        <div className="hero__headline hero__bottom-headline">
                            <span className="hero__headline-text hero__headline-text--lower">D</span>
                            <span className="hero__headline-text hero__headline-text--lower">E</span>
                            <span className="hero__headline-text hero__headline-text--lower">V</span>
                            <span className="hero__headline-text hero__headline-text--lower">E</span>
                            <span className="hero__headline-text hero__headline-text--lower">L</span>
                            <span className="hero__headline-text hero__headline-text--lower">O</span>
                            <span className="hero__headline-text hero__headline-text--lower">P</span>
                            <span className="hero__headline-text hero__headline-text--lower">E</span>
                            <span className="hero__headline-text hero__headline-text--lower">R</span>
                        </div>
                        <button className="hero__button hero__bottom-button">Get in Touch</button>
                    </div>
                </div>

                <div className="hero__social-container">
                    <div className="hero__social-link">
                        <img src={linkedinIcon} alt="linkedin" />
                    </div>

                    <div className="hero__social-link">
                        <img src={githubIcon} alt="github" />
                    </div>

                    <div className="hero__social-link">
                        <img src={mailIcon} alt="mail" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero