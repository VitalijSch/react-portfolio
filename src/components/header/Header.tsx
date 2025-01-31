import { useState } from 'react'
import './header.css'
import aboutMeIcon from './../../assets/images/header/about-me.svg'
import skillsIcon from './../../assets/images/header/skills.svg'
import projectsIcon from './../../assets/images/header/projects.svg'
import contactIcon from './../../assets/images/header/contact.svg'
import englishIcon from './../../assets/images/header/english.svg'
import germanIcon from './../../assets/images/header/german.svg'

function Header() {
    const [isGermanLanguage, setIsGermanLanguage] = useState(false)

    const toggleLanguage = () => setIsGermanLanguage(prev => !prev)

    return (
        <header>
            <div className="logo">
                <span>V</span>
                <span>S</span>
            </div>
            <div className="p-relative">
                <img className="reveal-top hide-top" src={aboutMeIcon} alt="mark" />
                <a>About me</a>
            </div>
            <div className="p-relative">
                <a>Skills</a>
                <img className="reveal-left hide-left" src={skillsIcon} alt="underline" />
            </div>
            <div className="p-relative">
                <a>Projects</a>
                <img className="reveal-left hide-left" src={projectsIcon} alt="scrible" />
            </div>
            <div className="p-relative">
                <a>Contact</a>
                <img className="reveal-left hide-left" src={contactIcon} alt="underline z" />
            </div>
            <div className="languages-container">
                <div className="p-relative">
                    <img onClick={toggleLanguage} className={`reveal-bottom-right hide-bottom-right ${isGermanLanguage ? "" : "animation-unset"}`}
                        src={englishIcon} alt="border" />
                    <span style={{ color: isGermanLanguage ? "#FFFFFF" : "#F87A55" }}>EN</span>
                </div>
                <div className="slider">
                    <div className={`circle ${isGermanLanguage ? "slider-animation" : ""}`}></div>
                </div>
                <div className="p-relative">
                    <img onClick={toggleLanguage} className={`reveal-top-left hide-top-left ${isGermanLanguage ? "animation-unset" : ""}`} src={germanIcon} alt="border" />
                    <span style={{ color: isGermanLanguage ? "#F87A55" : "#FFFFFF" }}>DE</span>
                </div>
            </div>
        </header>
    )
}

export default Header