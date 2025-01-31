import { useState } from 'react'
import './Hero.css'
import frameIcon from './../../assets/images/hero/picture.svg'
import profileIcon from './../../assets/images/hero/profile.png'
import wavingHandIcon from './../../assets/images/hero/waving-hand.svg'
import Header from '../header/Header'

function Hero() {
    const [effect, setEffect] = useState(false)
    const [yes, setYes] = useState(false)

    const getSmiley = () => effect ? ':D' : ':)'

    const getName = () => yes ? "I'M VITALIJ SCHWAB" : 'Hello World'

    return (
        <div className="hero-background-container">
            <Header />
            <div className="hero-container">
                <div className="top-container">
                    <div className="left-container">
                        <div className="btn-container">
                            <img src={wavingHandIcon} alt="waving hand" />
                            <span
                                className="btn"
                                onMouseEnter={() => setYes(true)}
                                onMouseLeave={() => setYes(false)}
                            >{getName()}</span>
                        </div>
                        <div className="headline-container">
                            <span className="text-lower">F</span><span className="text-upper">r</span><span className="text-upper">o</span><span className="text-upper">n</span><span className="text-upper">t</span><span className="text-upper">e</span><span className="text-upper">n</span><span className="text-upper">d</span>
                        </div>
                    </div>
                    <div
                        className="picture-container"
                        onMouseEnter={() => setEffect(true)}
                        onMouseLeave={() => setEffect(false)}
                    >
                        <img src={frameIcon} alt="frame" />
                        <img src={profileIcon} alt="profile" />
                        <div>
                            <span>Vitalij</span><span> {getSmiley()}</span>
                        </div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="headline-container">
                        <span className="text-lower">D</span><span className="text-lower">E</span><span className="text-lower">V</span><span className="text-lower">E</span><span className="text-lower">L</span><span className="text-lower">O</span><span className="text-lower">P</span><span className="text-lower">E</span><span className="text-lower">R</span>
                    </div>
                    <span className="btn">Get in Touch</span>
                </div>
            </div>
        </div>
    )
}

export default Hero