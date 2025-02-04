import './AboutMe.css'
import backgroundBased from './../../assets/images/about-me/background-based.svg'
import backgroundRelocate from './../../assets/images/about-me/background-relocate.svg'
import backgroundRemote from './../../assets/images/about-me/background-remote.svg'
import basedIcon from './../../assets/images/about-me/based-icon.svg'
import relocateIcon from './../../assets/images/about-me/relocate-icon.svg'
import remoteIcon from './../../assets/images/about-me/remote-icon.svg'
import lineIcon from './../../assets/images/about-me/line.svg'

function AboutMe() {
    return (
        <div className="about-me">
            <div className="about-me__location-container">
                <img className="about-me__background about-me__background--first" src={backgroundBased} alt="based background" />
                <div className="about-me__location-info about-me__location-info--first">
                    <img src={basedIcon} alt="based icon" />
                    <span className="about-me__text">Based in Lahr/Schwarzwald</span>
                </div>

                <img className="about-me__background about-me__background--second" src={backgroundRelocate} alt="relocate background" />
                <div className="about-me__location-info about-me__location-info--second">
                    <img src={relocateIcon} alt="relocate icon" />
                    <span className="about-me__text">Open to relocate</span>
                </div>

                <img className="about-me__background about-me__background--third" src={backgroundRemote} alt="remote background" />
                <div className="about-me__location-info about-me__location-info--third">
                    <img src={remoteIcon} alt="remote icon" />
                    <span className="about-me__text">Open to work remote</span>
                </div>
            </div>

            <div className="about-me__info">
                <span className="about-me__name">Who’s Vitalij</span>
                <div className="about-me__headline-container">
                    <h2 className="about-me__headline">About me</h2>
                    <img className='about-me__line-icon' src={lineIcon} alt="line icon" />
                </div>
                <p className="about-me__description">
                    Hi there! I'm Vitalij, a frontend developer passionate about creating intuitive and efficient digital experiences. With a natural problem-solving mindset and a keen eye for detail, I specialize in transforming complex concepts into visually appealing and functional web solutions.
                    <br /><br />
                    Let’s collaborate and build something remarkable together!
                </p>
                <button className="about-me__button">Let’s talk</button>
            </div>
        </div>
    )
}

export default AboutMe;