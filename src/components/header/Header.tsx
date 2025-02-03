import { useState } from 'react'
import './header.css'
import aboutMeIcon from './../../assets/images/header/about-me.svg'
import skillsIcon from './../../assets/images/header/skills.svg'
import projectsIcon from './../../assets/images/header/projects.svg'
import contactIcon from './../../assets/images/header/contact.svg'
import englishIcon from './../../assets/images/header/english.svg'
import germanIcon from './../../assets/images/header/german.svg'

function Header() {
    const [isGermanLanguage, setIsGermanLanguage] = useState<boolean>(false)
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const handleMouseEnter = (item: string): void => {
        setHoveredItem(item);
    };

    return (
        <header className="header">
            <div className="header__logo">
                <span className="header__logo-letter">V</span>
                <span className="header__logo-letter">S</span>
            </div>

            <div className="header__nav-item">
                <img
                    onMouseEnter={() => handleMouseEnter("about")}
                    className={`header__nav-icon header__reveal-top ${hoveredItem === "about" ? "header__hide-top" : ""}`}
                    src={aboutMeIcon}
                    alt="mark"
                />
                <a className="header__nav-link">About me</a>
            </div>

            <div className="header__nav-item">
                <a className="header__nav-link">Skills</a>
                <img
                    onMouseEnter={() => handleMouseEnter("skills")}
                    className={`header__nav-icon header__reveal-left ${hoveredItem === "skills" ? "header__hide-left" : ""}`}
                    src={skillsIcon}
                    alt="underline"
                />
            </div>

            <div className="header__nav-item">
                <a className="header__nav-link">Projects</a>
                <img
                    onMouseEnter={() => handleMouseEnter("projects")}
                    className={`header__nav-icon header__reveal-left ${hoveredItem === "projects" ? "header__hide-left" : ""}`}
                    src={projectsIcon}
                    alt="scribble"
                />
            </div>

            <div className="header__nav-item">
                <a className="header__nav-link">Contact</a>
                <img
                    onMouseEnter={() => handleMouseEnter("contact")}
                    className={`header__nav-icon header__reveal-left ${hoveredItem === "contact" ? "header__hide-left" : ""}`}
                    src={contactIcon}
                    alt="underline z"
                />
            </div>

            <div className="header__languages">
                <div className="header__language-option  header__language-option--first">
                    <img
                        onClick={() => setIsGermanLanguage(false)}
                        onMouseEnter={() => handleMouseEnter("en")}
                        className={`header__language-icon header__reveal-bottom-right ${isGermanLanguage ? "" : "header__language-icon--no-animation"} ${hoveredItem === "en" ? "header__hide-bottom-right" : ""}`}
                        src={englishIcon}
                        alt="border"
                    />
                    <span
                        className="header__language-label"
                        style={{ color: isGermanLanguage ? "#FFFFFF" : "#F87A55" }}
                    >
                        EN
                    </span>
                </div>

                <div className="header__language-slider">
                    <div className={`header__language-circle ${isGermanLanguage ? "header__language-circle--active" : ""}`}></div>
                </div>

                <div className="header__language-option header__language-option--second">
                    <img
                        onClick={() => setIsGermanLanguage(true)}
                        onMouseEnter={() => handleMouseEnter("de")}
                        className={`header__language-icon header__reveal-top-left ${isGermanLanguage ? "header__language-icon--no-animation" : ""} ${hoveredItem === "de" ? "header__hide-top-left" : ""}`}
                        src={germanIcon}
                        alt="border"
                    />
                    <span
                        className="header__language-label"
                        style={{ color: isGermanLanguage ? "#F87A55" : "#FFFFFF" }}
                    >
                        DE
                    </span>
                </div>
            </div>
        </header>
    )
}

export default Header