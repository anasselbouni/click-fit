import React, {useRef} from 'react';
import Fullpage, { FullPageSections,FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';
import bg from './img/image-2.jpeg';
import sv from './img/Group 1.svg';
import bg1 from './img/image-3.jpg';
import trainer from './img/trainer-image.jpg';

const FullPageScroll = () => {
    const SectionStyle = {
        height:'100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundSize: 'cover',
    }

    const joinus = useRef(null);
    const training = useRef(null);
    const events = useRef(null);
    const aboutus = useRef(null);

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <div>
        <nav>
            <div className="nav-content">
                <div className="logo">
                </div>

                <ul className="nav-links">
                    <li onClick={() => scrollToSection(joinus)}>JOIN US</li>
                    <li onClick={() => scrollToSection(training)}>Training</li>
                    <li onClick={() => scrollToSection(events)}>EVENTS</li>
                    <li onClick={() => scrollToSection(aboutus)}>ABOUT US</li>
                </ul>
            </div>
        </nav>
        <Fullpage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection style={{...SectionStyle, backgroundImage:`url(${bg})`}}>
                    <table ref={joinus} style={{width: '100%', height: '100%'}}>
                        <tr>
                            <td>
                                <img src={sv} alt="React Logo" />
                            </td>
                        </tr>
                        <tr>
                            <button className='hero-button'>JOIN US</button>
                        </tr>
                    </table>
                </FullpageSection>
                <FullpageSection style={{...SectionStyle, backgroundImage:`url(${bg1})`}}>
                    <h1 ref={training}>Screen 2</h1>
                </FullpageSection>
                <FullpageSection style={{...SectionStyle, backgroundImage:`url(${bg1})`}}>
                    <h1 ref={events}>Screen 3</h1>
                </FullpageSection>
                <FullpageSection className style={{...SectionStyle, backgroundImage:`url(${trainer})`}}>
                    <div className="trainer-overlay" onclick="off()">

                    <div class="trainer_container">
                        <div class="trainer_cta">
                            <h2 class="trainer_headline">TAKE YOUR TRAINING TO THE NEXT LEVEL</h2>
                            <p class="trainer_wrapper trainer_body">CrossFit courses and certifications are open to individuals and trainers seeking to improve their health and fitness through effective training and nutritional strategies.</p>
                            <div class="trainer_buttons">
                                <a class="trainer_button primary small trainer_button_1" href="/level-1">
                                    Become a Trainer
                                </a>
                                <a class="trainer_button primary small trainer_button_1" href="https://www.crossfit.com/online-courses">
                                    Expand Your Knowledge
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
        </div>
        
    );
};

export default FullPageScroll;