import { useRef, useState } from 'react'
import './Hero.css'
import frameIcon from './../../assets/images/hero/picture.svg'
import profileIcon from './../../assets/images/hero/profile.png'
import wavingHandIcon from './../../assets/images/hero/waving-hand.svg'
import Header from '../header/Header'

function Hero() {
    const [getLaughingSmiley, setLaughingSmiley] = useState<string>(':)')
    const [getName, setName] = useState<string>('Hello World')
    const timeoutIdRef = useRef<ReturnType<typeof setTimeout> | null>(null)

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

    const getNameDelayed = (): void => {
        timeoutIdRef.current = setTimeout(() => {
            setName("I'M VITALIJ SCHWAB")
        }, 180)
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
            <div className="hero__container">
                <div className="hero__top">
                    <div className="hero__left">
                        <div
                            className="button button--interactive"
                            onMouseEnter={getNameDelayed}
                            onMouseLeave={resetNameDelayed}
                        >
                            {getName}
                            <img src={wavingHandIcon} alt="waving hand" className="button__icon button__icon--interactive" />
                        </div>
                        <div className="hero__headline">
                            <span className="hero__headline__text--interactive hero__headline__text--lower">F</span>
                            <span className="hero__headline__text--interactive hero__headline__text--upper">r</span>
                            <span className="hero__headline__text--interactive hero__headline__text--upper">o</span>
                            <span className="hero__headline__text--interactive hero__headline__text--upper">n</span>
                            <span className="hero__headline__text--interactive hero__headline__text--upper">t</span>
                            <span className="hero__headline__text--interactive hero__headline__text--upper">e</span>
                            <span className="hero__headline__text--interactive hero__headline__text--upper">n</span>
                            <span className="hero__headline__text--interactive hero__headline__text--upper">d</span>
                        </div>
                    </div>
                    <div
                        className="hero__picture"
                        onMouseEnter={getLaughingSmileyDelayed}
                        onMouseLeave={resetLaughingSmileyDelayed}
                    >
                        <img src={frameIcon} alt="frame" className="hero__picture__frame" />
                        <img src={profileIcon} alt="profile" className="hero__picture__profile hero__picture__profile--interactive" />
                        <div className="hero__name">
                            <span>Vitalij</span>
                            <span>{getLaughingSmiley}</span>
                        </div>
                    </div>
                </div>
                <div className="hero__bottom">
                    <div className="hero__headline hero__bottom__headline">
                        <span className="hero__headline__text--interactive hero__headline__text--lower">D</span>
                        <span className="hero__headline__text--interactive hero__headline__text--lower">E</span>
                        <span className="hero__headline__text--interactive hero__headline__text--lower">V</span>
                        <span className="hero__headline__text--interactive hero__headline__text--lower">E</span>
                        <span className="hero__headline__text--interactive hero__headline__text--lower">L</span>
                        <span className="hero__headline__text--interactive hero__headline__text--lower">O</span>
                        <span className="hero__headline__text--interactive hero__headline__text--lower">P</span>
                        <span className="hero__headline__text--interactive hero__headline__text--lower">E</span>
                        <span className="hero__headline__text--interactive hero__headline__text--lower">R</span>
                    </div>
                    <span className="button hero__bottom__button hero__bottom__buttom--interactive">Get in Touch</span>
                </div>
            </div>
        </div>
    )
}

export default Hero